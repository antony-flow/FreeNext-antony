"use client";
import React, { useEffect, useRef, useState } from "react";
import { socket } from "../../../socket";
import { useSearchParams } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

interface messageType {
  text: string;
  id: string;
  userName: string;
}

export default function page() {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState<messageType[]>([]);
  const [msgsent, setMsgSent] = useState(false);
  const [flag, setFlag] = useState<boolean>(false);
  // const [users, setUsers] = useState(null);
  // const [userr, setUserr] = useState("");
  // const [room, setRoom] = useState("");
  let ismsgbycurruser = false;

  const searchParams = useSearchParams();
  // console.log(searchParams.get("user"));
  let user: string = searchParams.get("user") || "";
  let roomid: string = searchParams.get("room") || "";
  let curruser = user;
  let todisplay;

  useEffect(() => {
    socket.on("connect", () => {
      console.log("hello from client");
    });

    socket.emit("join", { user, roomid }, (error: any) => {
      if (error) {
        alert(error);
      }
    });
    socket.on("roomData", ({ users }) => {
      // setUsers(users);
    });
    socket.on("chatmssg", (mesg) => {
      console.log("recieved the chat-mssg emit");
      console.log(mesg);
      setMessages((prev) => [...prev, mesg]);
      console.log(messages);
    });
  }, [useSearchParams]);

  function SendMessage(textt: string) {
    if (textt === "") {
      setFlag(true);
      setTimeout(() => {
        setFlag(false);
      }, 2000);
      return null;
    }
    const userid: string = uuidv4();
    const username: string = user;

    socket.emit(
      "demo",
      { text: textt, id: userid, userName: username },
      (err: any, response: any) => {
        if (err) {
          console.log(err);
        } else {
          // console.log("inside the callback");
          setMsgSent(true);

          setTimeout(() => {
            setMsgSent(false);
          }, 3000);
        }
      }
    );
    setMsg("");
    console.log("inside send messsage");
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <div
            style={{
              height: "500px",
              width: "300px",
              backgroundColor: "grey",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              overflowY: "hidden",
            }}
          >
            {messages.map((mess) => {
              curruser === mess.userName
                ? (todisplay = (
                    <div
                      key={mess.id}
                      style={{
                        backgroundColor: "#006AFF",
                        color: "white",
                        minHeight: "3px",
                        minWidth: "50px",
                        margin: "8px",
                        padding: "0px 5px",
                        borderRadius: "12px",
                      }}
                    >
                      <p>{mess.text}</p>
                    </div>
                  ))
                : (todisplay = (
                    <div
                      key={mess.id}
                      style={{
                        backgroundColor: "#9F33FF",
                        color: "white",
                        minHeight: "3px",
                        minWidth: "50px",
                        margin: "8px",
                        padding: "0px 5px",
                        borderRadius: "12px",
                      }}
                    >
                      <p>{mess.text}</p>
                    </div>
                  ));
              return todisplay;
            })}
          </div>
          <div>
            <input
              placeholder="Enter Your Message"
              style={{
                width: "250px",
                height: "30px",
                border: "1.5px solid black",
              }}
              value={msg}
              type="text"
              onChange={(e) => setMsg(e.target.value)}
            />
            <button
              style={{ height: "35px", backgroundColor: "skyblue" }}
              onClick={() => SendMessage(msg)}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      {flag && (
        <div
          style={{
            color: "red",
            position: "fixed",
            bottom: "40px",
            width: "100%",
            textAlign: "center",
          }}
        >
          Message cannot be empty!
        </div>
      )}
      <div>hello</div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {msgsent === true ? (
          <div
            style={{
              height: "60px",
              width: "300px",
              backgroundColor: "green",
              color: "white",
              borderRadius: "10px",
              position: "fixed",
              bottom: "30px",
              zIndex: "99",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <h3>Your Mesaage is Sent.....</h3>
          </div>
        ) : null}
      </div>
    </div>
  );
}

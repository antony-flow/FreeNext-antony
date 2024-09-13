"use client";
import { useFormState, useFormStatus } from "react-dom";
import HandleLogin from "@/Server_Action/HandleLogin";
import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation'
import { useState } from "react";


const initialState = {
  name: "",
  roomid: "",
  errormessage: "",
};

export default function LoginHome() {
  // let temp = "hello world";
  // let temp2 = Object.entries(temp);
  //return an array conataining [key,value] pairs from given object
  // let temp3 = Object.fromEntries(temp2);
  //return an object from given array conataining [key,value] pairs
  // let temp4 = Object.values(temp3);
  //return an array containing values of correspond to given object keys
  // console.log(temp4);

 


  const router = useRouter();
  const [state, setState] = useState(initialState);

  const handleChange = (e?: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const HandleSubmit = (e?: any) => {
    e.preventDefault();
    console.log("hello");
    let user:string = state.name;
    let room:string = state.roomid;
    console.log(user,room);
    router.push(`/chats/room?user=${user}&room=${room}`);
    console.log("after redirect");
  }
  return (
    <div>
       <form onSubmit={HandleSubmit}>
        <label htmlFor="name">Enter Name:</label>
        <input name="name" type="text" required onChange={handleChange} />
        <label htmlFor="roomid">Enter RoomID:</label>
        <input name="roomid" type="text" required onChange={handleChange} />
        <p style={{ color: "red" }}>{state.errormessage}</p>
       <button type="submit">Login</button>
      </form>
    </div>
  );
}


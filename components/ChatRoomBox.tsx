import React from "react";

export default function ChatRoomBox() {
  return (
    <div
      style={{
        display: "flex",
        border: "2px solid grey",
        width: "30vw",
        height: "50px",
        margin: "20px",
        padding: "5px",
      }}
    >
      <div style={{ backgroundColor: "black", borderRadius: "40px" }}>
        ...........
      </div>
      <div style={{ display: "flex", paddingLeft: "5px" }}>
        <h3>User_Name</h3>
      </div>
    </div>
  );
}

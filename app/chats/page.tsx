import React from "react";
import ChatRoomBox from "@/components/ChatRoomBox";
import Link from "next/link";

export default function page() {
  return <div style={{border: "2px solid black",width: "35vw",textDecoration: "none"}}>
    <Link href="./chats/12" ><ChatRoomBox/></Link>
    <Link href="./chats/13"><ChatRoomBox/></Link>
    <Link href="./chats/14"><ChatRoomBox/></Link>
    
  </div>;
}

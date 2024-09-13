import React from "react";

export default function page() {
  type MessageType = number | string | boolean;
  function tastingGenerics(message: MessageType): MessageType {
    if(typeof message == "string"){
        return message+"ahejja";
    }
    console.log(typeof message);
    return message;
  }
  // console.log(tastingGenerics("hello"));
  // console.log(tastingGenerics(1233));
  // console.log(tastingGenerics(true));
  return <div>/todo/setting 'page.tsx'</div>;
}

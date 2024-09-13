'use client'
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navlayout({children}: {children: React.ReactNode}) {

  let segment = useSelectedLayoutSegment();
  console.log(segment);

  const [BgColor,setBgColor] = useState("green");

  useEffect(() => {
    if(segment === "book"){
      setBgColor("blue");
    }
    else if(segment === "copy"){
      setBgColor("grey");
    }
  },[segment])
    return (<div>
        hello from nav layout file 
        <nav>
        <Link href="/nav/book">Go to book</Link>
       <Link href="/nav/copy">Go to copy</Link>
        </nav>
        <div style={{backgroundColor: BgColor,height: "90px",width: "200px",color: "white"}}> 
          {children}
        </div>
    </div>);
}   ;
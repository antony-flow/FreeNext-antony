import Link from "next/link";

export default function PersonalPage({children}:{children: React.ReactNode}) {
    return (<div style={{width: "30%",backgroundColor: "grey",height: "100vh",margin: "20px",borderRadius: "50px",
        display: "flex",
        alignItems: "center",
        color: "white",
        fontSize: "30px",}}>
        hello from personal side 
        <div><Link href="/contact/extra">Go to Extra page</Link></div>
     
    </div>)
}
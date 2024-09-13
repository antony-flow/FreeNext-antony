

export default function ContactLayout({children,buisness,personal}: {children: React.ReactNode,buisness: React.ReactNode,personal: React.ReactNode} ) {
   
    return (
        <>
         hello from contact layout file.......
        <div style={{display: "flex"}}>
           {children}
           {buisness}
           {personal}
        </div>
        </> 
    )
}
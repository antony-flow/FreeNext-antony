
import Box from "./box";

export default function TextLayout({children}: {children: React.ReactNode}){
   
    return (<div>
        hello from Text layout file
        <h3>{children}</h3>
        <Box/>
        <Box/>
        <Box/>
    </div>)
}
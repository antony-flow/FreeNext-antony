import { Suspense } from "react";
import Loading from "./loading";

export default function ContactLayout({children}:{children: React.ReactNode}) {
    return (<div>
    this is coming from the contact layout file, watchout...
    <div>
        <Suspense fallback={<Loading/>}>
        {children}
        </Suspense>
    </div>
    </div>);
};

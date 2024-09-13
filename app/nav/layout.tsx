
export default function NavTabLayout({children,navbar}: {children: React.ReactNode, navbar: React.ReactNode}) {
    return (<div>
        hello from the nav  - layout file   
        <div>
            {children}
            {navbar}
        </div>
    </div>)
}
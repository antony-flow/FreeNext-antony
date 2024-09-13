'use client'
import Link from 'next/link'

import { usePathname } from 'next/navigation'

export default function NotFound() {
    const pathname = usePathname();
    return (<div>
        Not found this URL:  {pathname}
       <h2> <Link href="/">Return Home</Link></h2>
    </div>)
}
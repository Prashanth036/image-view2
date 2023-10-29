'use client'
import Link from 'next/link';
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Link href='/details'>
     <Image src="https://images.pexels.com/photos/7209396/pexels-photo-7209396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={200} height={200} unoptimized priority/> 
    </Link>
   </main>
  )
}

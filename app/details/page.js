'use client'
import Image from "next/image";
import { saveAs } from "file-saver";
import { useState } from "react";

export default function Details(){
    const [img1,setImg1]=useState('')
     

    function handleClick(){
        setImg1(img)
     return saveAs(`${img1}`,'image.jpg')
    }

    let img=<Image src="https://images.pexels.com/photos/7209396/pexels-photo-7209396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={200} height={200} unoptimized priority/> 
    return(<>
   <div className="m-16">{img}</div> 
   <button type="button" onClick={(e)=>handleClick()}
    className="mx-16 bg-red-700 text-white p-2 font-mono rounded" style={{}}>Download</button>
    </>)
}
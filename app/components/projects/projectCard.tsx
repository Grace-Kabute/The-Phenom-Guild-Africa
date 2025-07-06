import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import './projects.css'



const ProjectCard = ({id, src, title, subtitle }: {id:string, src: string, title: string, subtitle: string }) => (
<Link href={`/mansion/${id}`} className="project group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden cursor-pointer">
  <div className="relative rounded-2xl overflow-hidden">
    <Image
      src={src}
      alt={title}
      width={500}
      height={500}
      className="h-60 w-full object-cover transition duration-300 group-hover:brightness-75"
    />
  </div>


  <div className="p-20 flex flex-col flex-grow bg-white ">
    <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
    <p className="text-sm text-gray-600">{subtitle}</p>
  </div>
</Link>


  )
  
export default ProjectCard
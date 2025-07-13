import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import './projects.css'



const ProjectCard = ({id, src, title, subtitle, large = false }: {id:string, src: string, title: string, subtitle: string, large: boolean }) => (
<Link href={`/mansion/${id}`} className="project">
<div className={`project-1 relative w-full ${large ? 'min-h-[600px]' : 'min-h-[250px]'}`}>
  <Image
    src={src}
    alt={title}
    fill
    className="object-cover rounded-lg"
  />
</div>

  <div className="flex-layout">
    <h4>{title}</h4>
    <p>{subtitle}</p>
  </div>
</Link>


  )
  
export default ProjectCard
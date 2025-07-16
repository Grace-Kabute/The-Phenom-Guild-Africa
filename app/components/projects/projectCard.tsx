import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import './projects.css'



const ProjectCard = ({id, src, title, subtitle, large = false }: {id:string, src: string, title: string, subtitle: string, large: boolean }) => (
<Link href={`/mansion/${id}`} className="project-card block">
  <div className={`project-1 relative w-full overflow-hidden ${large ? 'min-h-[600px]' : 'min-h-[250px]'}`}>
    <Image
      src={src}
      alt={title}
      fill
      className="object-cover rounded-lg saturate-[0.6] brightness-[0.9] contrast-[0.9]"
    />
  </div>

  <div className="flex-layout mt-2">
    <h4 className="text-lg font-medium">{title}</h4>
    <span className="mx-1">|</span>
    <p className="text-sm text-gray-500">{subtitle}</p>
  </div>
</Link>

  )
  
export default ProjectCard
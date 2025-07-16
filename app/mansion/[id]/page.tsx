import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import '../../components/projects/projects.css';
import { projectsData } from '../../data';
import Navbar from '@/app/components/navbar/navbar';
import Footer from '@/app/components/footer/footer';

interface Props {
  params: { id: string };
}

export default async function MansionPage({ params }: Props) {
  const { id } = params;

  const project = projectsData.find((proj) => proj.id === id);

  if (!project) {
    notFound();
  }

  const { title, description, image, client, year, location, totalArea,work } = project;

  return (
    <>
      <Navbar/>
    <main className="flex items-center justify-center min-h-screen mt-16">
      <div className="centred">
        <div className='mb-16'>
          <Link href="/" className='back'>home /</Link>
          <Link href="/work" className='back'>projects /</Link>
          <span>{title}</span>
        </div>

        <div className="projectContainer">
          <div className='relative'>
            <div className="absolute bottom-10 left-0 bg-black/60 px-3 py-1 text-sm font-semibold z-10">
              <p className='float'>Area: <br />{totalArea}</p>
              </div>
            <Image
              src={image}
              alt={title}
              width={600}
              height={600}
              className="h-150 object-cover"
            />
  </div>
          <div className="space">
            <div className='works'>
              <h1>{title}/</h1>
              <p>{work}</p>
            </div>
            <p className="text max-w-xl">{description}</p>
            <div className="details">
              <span>Client: <br /><strong>{client}</strong></span>
              <span>Location: <br /> <strong>{location}</strong></span>
              <span>Year: <br /> <strong>{year}</strong></span>
            </div>
          </div>
        </div>
      </div>
    </main>
      <Footer/>
</>
  );
}

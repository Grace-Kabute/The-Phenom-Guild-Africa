import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '../../data';

interface Props {
  params: { id: string };
}

export default async function MansionPage({ params }: Props) {
  const { id } = params;

  const project = projectsData.find((proj) => proj.id === id);

  if (!project) {
    notFound();
  }

  const { title, description, image, client, year, location, totalArea } = project;

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="centred">
        <div>
          <Link href="/">home /</Link>
          <Link href="/work">projects /</Link>
          <span>{title}</span>
        </div>

        <div className="projectContainer">
          <Image
            src={image}
            alt={title}
            width={600}
            height={600}
            className="h-60 object-cover"
          />
          <div className="space">
            <h1>{title}</h1>
            <p className="text">{description}</p>
            <div className="flex">
              <span><strong>Client:</strong> {client}</span>
              <span><strong>Location:</strong> {location}</span>
              <span><strong>Year:</strong> {year}</span>
              <span><strong>Area:</strong> {totalArea}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

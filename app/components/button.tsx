import Link from 'next/link';



type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function ButtonLink({ href, children, className = '' }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`btn ${className}`}
    >
      {children}
    </Link>
  );
}

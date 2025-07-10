import Image from "next/image";

type CloudImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

const CloudImage = ({ src, alt, width = 800, height = 600, priority = false }:CloudImageProps) => {
  if (!src) return null;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      placeholder="empty"
      style={{ objectFit: "cover", width: "100%", height: "auto" }}
    />
  );
};

export default CloudImage;

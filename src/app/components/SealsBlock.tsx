import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

interface SealsBlockProps {
  className?: string;
  sealClassName?: string;
}

export default function SealsBlock({
  className = "flex items-center gap-6 justify-center flex-wrap",
  sealClassName = "h-20 w-auto object-contain",
}: SealsBlockProps) {
  const { seals } = siteConfig;

  return (
    <div className={className}>
      <div className="relative flex items-center justify-center p-2 bg-white rounded-lg border border-gray-100 shadow-xs">
        <Image
          src={seals.dgusv.src}
          alt={seals.dgusv.alt}
          width={144}
          height={144}
          sizes="(max-width: 640px) 96px, 144px"
          className={sealClassName}
        />
      </div>
      <div className="relative flex items-center justify-center p-2 bg-white rounded-lg border border-gray-100 shadow-xs">
        <Image
          src={seals.ewivs.src}
          alt={seals.ewivs.alt}
          width={144}
          height={144}
          sizes="(max-width: 640px) 96px, 144px"
          className={sealClassName}
        />
      </div>
    </div>
  );
}

import Link from "next/link";

interface CircleNavItemProps {
  href: string;
  imageSrc: string;
  label: string;
  alt?: string;
}

export function CircleNavItem({ href, imageSrc, label, alt }: CircleNavItemProps) {
  return (
    <Link href={href} className="group flex flex-col items-center space-y-3 transition-transform hover:scale-105">
      <div className="relative w-56 h-56 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${imageSrc}')`
          }}
        >
          {/* Purple overlay */}
          <div className="absolute inset-0 group-hover:bg-purple-100/50 transition-colors"></div>
        </div>
      </div>
      
      <span className="text-gray-900 font-montserrat font-semibold text-sm text-center uppercase tracking-wide max-w-24">
        {label}
      </span>
    </Link>
  );
}

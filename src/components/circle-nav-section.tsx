import { CircleNavItem } from "./circle-nav-item";

export function CircleNavSection() {
  const navItems = [
    {
      href: "/club-coins",
      imageSrc: "/miniatura1.png", // Using hero.jpg as placeholder - replace with specific nav images
      label: "Club Coins",
      alt: "Club Coins navigation"
    },
    {
      href: "/normativa-general",
      imageSrc: "/miniatura2.png",
      label: "Normativa General",
      alt: "Normativa General navigation"
    },
    {
      href: "/normativa-delictual",
      imageSrc: "/miniatura3.png",
      label: "Normativa Delictual",
      alt: "Normativa Delictual navigation"
    },
    {
      href: "/normativa-lspd",
      imageSrc: "/miniatura4.png",
      label: "Normativa LSPD",
      alt: "Normativa LSPD navigation"
    },
    {
      href: "/normativa-ems",
      imageSrc: "/miniatura5.png",
      label: "Normativa EMS",
      alt: "Normativa EMS navigation"
    }
  ];

  return (
    <section className="py-16 bg-white" style={{marginTop: '100px'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-start gap-8 md:gap-12 lg:gap-16">
          {navItems.map((item, index) => (
            <CircleNavItem
              key={index}
              href={item.href}
              imageSrc={item.imageSrc}
              label={item.label}
              alt={item.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

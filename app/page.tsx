import Image from "next/image";

type QrItem = {
  title: string;
  href: string;
  hint: string;
};

type ServiceItem = {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
};

const qrItems: QrItem[] = [
  {
    title: "WiFi · COCO",
    href: "https://example.com/wifi-coco",
    hint: "Conexión rápida y segura para huéspedes.",
  },
  {
    title: "Mi Hotel",
    href: "https://example.com/my-hotel",
    hint: "Información general, políticas y mapas.",
  },
  {
    title: "Conserjería",
    href: "https://example.com/concierge",
    hint: "Reservas, transporte y experiencias locales.",
  },
  {
    title: "WhatsApp",
    href: "https://wa.me/573001112233",
    hint: "Atención en línea para solicitudes inmediatas.",
  },
];

const serviceItems: ServiceItem[] = [
  {
    icon: "🛏️",
    title: "Habitaciones",
    subtitle: "Check-in 3:00 pm · Check-out 12:00 pm",
    description: "Early check-in / late check-out sujeto a disponibilidad.",
  },
  {
    icon: "🍽️",
    title: "Restaurante",
    subtitle: "Desayuno 6:30–10:30 · Almuerzo 12:00–3:00 · Cena 6:00–10:00",
    description: "Opciones locales e internacionales con menú de temporada.",
  },
  {
    icon: "🍸",
    title: "Minibar & Coctelería",
    subtitle: "Servicio diario 11:00 am–11:00 pm",
    description: "Snacks premium, vinos y cocteles artesanales en habitación.",
  },
  {
    icon: "🧖",
    title: "Spa & Masajes",
    subtitle: "9:00 am–8:00 pm",
    description: "Reservación previa recomendada para terapias y rituales.",
  },
  {
    icon: "🏊",
    title: "Piscina",
    subtitle: "Abierta 7:00 am–10:00 pm",
    description: "Zona de descanso con toallas y servicio de bebidas.",
  },
  {
    icon: "🛎️",
    title: "Concierge 24h",
    subtitle: "Disponible todo el día",
    description: "Soporte para traslados, city tours y solicitudes especiales.",
  },
];

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#090909] text-zinc-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(177,145,79,0.28),_transparent_40%),linear-gradient(to_bottom,_rgba(0,0,0,0.15),_rgba(0,0,0,0.85))]" />
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:48px_48px]" />

      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 py-12 md:px-12 md:py-16">
        <header className="flex flex-col items-center gap-4 text-center">
          <p className="text-xs tracking-[0.35em] text-[#b1914f]">MEDELLÍN · EST. 2020</p>
          <h1 className="font-serif text-6xl tracking-[0.25em] text-[#e7dbc0] md:text-7xl">COCO</h1>
          <p className="max-w-2xl text-sm text-zinc-300 md:text-base">
            Accede a todos los servicios del hotel desde un solo panel: WiFi, atención
            por WhatsApp, horarios y experiencias durante tu estadía.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {qrItems.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-[#b1914f33] bg-black/35 p-6 backdrop-blur-sm transition hover:border-[#b1914f77] hover:bg-black/50"
            >
              <div className="flex items-center justify-between gap-6">
                <div className="space-y-3">
                  <h2 className="text-sm tracking-[0.25em] text-[#d5be8a] uppercase">{item.title}</h2>
                  <p className="max-w-sm text-sm text-zinc-300">{item.hint}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white p-3 shadow-2xl">
                  <Image
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${encodeURIComponent(
                      item.href,
                    )}`}
                    alt={`Código QR de ${item.title}`}
                    width={140}
                    height={140}
                    unoptimized
                  />
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="space-y-6">
          <div className="text-center">
            <p className="text-xs tracking-[0.35em] text-[#b1914f]">SERVICIOS · SERVICES</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {serviceItems.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-white/10 bg-black/35 p-6 transition hover:border-[#b1914f66] hover:bg-black/55"
              >
                <p className="text-2xl" aria-hidden>
                  {service.icon}
                </p>
                <h3 className="mt-4 text-sm tracking-[0.25em] text-[#d5be8a] uppercase">{service.title}</h3>
                <p className="mt-2 text-sm font-medium text-zinc-200">{service.subtitle}</p>
                <p className="mt-2 text-sm text-zinc-400">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="border-t border-white/10 pt-6 text-center text-xs tracking-[0.25em] text-zinc-500">
          MEDELLÍN · COLOMBIA · HOTEL COCO
        </footer>
      </main>
    </div>
  );
}

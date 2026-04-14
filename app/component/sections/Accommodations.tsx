export default function Accommodations() {
  return (
    <section className="bg-white py-20 px-10 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* Left: Text */}
        <div className="md:w-2/5 flex flex-col gap-6">
          <span className="text-amber-600 text-sm font-semibold tracking-wide">
            Accommodations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
            Welcome Our Hotels And Resorts
          </h2>
          <p className="text-zinc-500 text-base leading-relaxed">
            Savvy travelers are looking for more than just the next destination
            on the map. They are looking for a memorable experience and to make
            new friends along the way.
          </p>
          <button className="bg-amber-600 hover:bg-amber-500 transition-colors text-white text-sm font-bold tracking-widest px-8 py-4 flex items-center gap-3 w-fit">
            READ MORE →
          </button>
        </div>

        {/* Right: Overlapping images */}
        <div className="md:w-3/5 relative h-[420px] w-full">
          {/* Top-right image (smaller, behind) */}
          <div className="absolute top-0 right-0 w-[55%] h-[55%] z-10 overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80"
              alt="Hotel living room"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom-right image (medium, middle layer) */}
          <div className="absolute bottom-0 right-6 w-[65%] h-[60%] z-20 overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"
              alt="Hotel bedroom"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Left image (large, front) */}
          <div className="absolute bottom-0 left-0 w-[55%] h-[85%] z-30 overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80"
              alt="Hotel suite"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
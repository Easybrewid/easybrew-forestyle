export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfaf5] text-[#333]">
      <header className="flex flex-col md:flex-row items-center justify-between px-10 py-20 gap-8">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-[#3c3c3b] leading-tight mb-6">
            Discover Japandi Serenity with Every Sip
          </h1>
          <p className="text-lg text-[#7a7a78] mb-6">
            Crafted with certified baristas and quality beans — only at Easy Brew.
          </p>
          <a href="https://wa.me/628xxxxxxxxxx" className="inline-block px-6 py-3 bg-[#d96d38] text-white rounded-full font-semibold shadow hover:opacity-90 transition">
            Book a Table
          </a>
        </div>
        <img src="/hero-latte.png" alt="Latte Art" className="max-w-md w-full rounded-xl shadow-xl" />
      </header>

      <section className="text-center px-6 py-16 bg-white">
        <h2 className="text-4xl font-bold text-[#3c3c3b] mb-4">Our Story</h2>
        <p className="text-lg text-[#666] max-w-2xl mx-auto">
          Nestled in Mojokerto’s serene Bumi Sooko Permai, Easy Brew offers a calm Japandi-inspired coffee space — a perfect blend of elegance, peace, and premium taste.
        </p>
      </section>
    </main>
  )
}
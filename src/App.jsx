import { images, products, testimonies } from "./assets/assets";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[var(--color-honey-light)] text-gray-800 font-[Poppins]">
      {/* 🟤 Navbar */}
      <nav className="bg-honey-dark flex justify-between items-center px-6 md:px-10 py-3 backdrop-blur-md shadow-md fixed w-full top-0 z-50">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={images.logo} alt="Madu Rindu" className="w-16 md:w-20" />
          <h1 className="text-2xl md:text-3xl lobster-two-bold text-white drop-shadow-sm hidden sm:block">Madu Rindu</h1>
        </div>

        {/* Menu - Desktop */}
        <div className="hidden md:flex gap-6">
          {["Keunggulan", "Produk", "Testimoni", "Pesan"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-white/90 hover:text-yellow-200 font-poppins font-medium transition">
              {item}
            </a>
          ))}
        </div>

        {/* Tombol Pesan */}
        <div className="hidden md:block">
          <button className="bg-white flex items-center justify-center gap-2 cursor-pointer font-poppins font-semibold px-6 py-2 rounded-full shadow-md hover:bg-amber-100 transition-transform hover:scale-105 text-honey-deep text-sm">
            <FaCartShopping />
            Pesan Sekarang
          </button>
        </div>

        {/* Menu Mobile Button */}
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Dropdown Mobile */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-honey-dark text-center py-4 flex flex-col gap-4 md:hidden">
            {["Keunggulan", "Produk", "Testimoni", "Pesan"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="text-white/90 hover:text-yellow-200 font-medium transition">
                {item}
              </a>
            ))}
            <button className="bg-white text-honey-deep font-semibold mx-auto px-6 py-2 rounded-full shadow-md hover:bg-amber-100 transition">Pesan Sekarang</button>
          </div>
        )}
      </nav>

      {/* 🍯 Hero Section */}
      <section className="text-center flex flex-col items-center justify-center bg-hero bg-cover bg-center h-[90vh] pt-28 px-4 md:px-0">
        <div className="bg-honey-deep/70 p-6 md:p-16 rounded-3xl shadow-lg backdrop-blur-sm max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-4 md:mb-6 drop-shadow-md">Manisnya Cinta, Murninya Alam</h1>
          <p className="text-base md:text-lg leading-relaxed font-poppins text-white/90">Madu Rindu menghadirkan kemurnian madu asli dari lebah pilihan, dipanen dengan kasih sayang untuk menjaga kesehatan dan kebahagiaan Anda.</p>

          <button className="mt-8 md:mt-10 bg-honey text-white font-poppins font-semibold px-8 md:px-10 py-3 rounded-full shadow-lg hover:bg-honey-dark transition-transform hover:scale-105">Dapatkan Sekarang</button>
        </div>
      </section>

      {/* 🌻 Keunggulan */}
      <section id="keunggulan" className="py-20 md:py-24 bg-honey-deep text-center px-6">
        <h2 className="text-3xl font-bold text-white mb-10 md:mb-12 font-poppins">Keunggulan Madu Rindu</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonies.map((item, i) => (
            <div key={i} className="bg-honey-dark/80 p-6 md:p-8 rounded-2xl shadow-md hover:-translate-y-2 transition-transform">
              <img src={item.image} alt="testimony" className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full mb-4 object-cover border-4 border-amber-200" />
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-white/90 font-poppins text-sm md:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🐝 Produk */}
      <section id="produk" className="py-20 md:py-24 bg-[var(--color-honey-light)] px-6 text-center">
        <h2 className="text-3xl font-bold text-honey-deep mb-10">Pilihan Produk Kami</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-2 hover:shadow-amber-400/30 transition-transform">
              <img src={item.img} alt={item.name} className="w-full h-56 md:h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-honey-dark mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">{item.price}</p>
                <button className="bg-honey text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-honey-dark hover:shadow-amber-300/40 transition-transform hover:scale-105">Beli Sekarang</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🧡 Testimoni */}
      <section id="testimoni" className="py-20 md:py-24 bg-white text-center px-6">
        <h2 className="text-3xl font-bold text-honey-deep mb-10 md:mb-12">Apa Kata Mereka?</h2>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-amber-50 p-6 md:p-8 rounded-2xl shadow-sm italic text-sm md:text-base">
            “Setiap pagi saya minum Madu Rindu, badan jadi enteng dan fokus kerja meningkat!”
            <span className="block mt-4 font-semibold text-honey-dark">- Andi, Bandung</span>
          </div>
          <div className="bg-amber-50 p-6 md:p-8 rounded-2xl shadow-sm italic text-sm md:text-base">
            “Rasanya lembut banget, tidak bikin eneg. Anak-anak juga suka!”
            <span className="block mt-4 font-semibold text-honey-dark">- Nisa, Cikampek</span>
          </div>
        </div>
      </section>

      {/* 💛 CTA */}
      <section id="pesan" className="bg-honey text-white text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Rasakan Manisnya Madu Rindu?</h2>
        <p className="text-base md:text-lg mb-8">Klik tombol di bawah dan nikmati madu alami terbaik dari alam Indonesia.</p>
        <button className="bg-white text-honey-deep font-semibold px-8 md:px-10 py-3 rounded-full shadow-md hover:bg-amber-100 transition-transform hover:scale-105">Pesan Sekarang</button>
      </section>

      {/* 🟤 Footer */}
      <footer className="bg-honey-deep text-amber-100 text-center py-10 text-sm md:text-base">
        <p>
          &copy; 2025 <span className="font-semibold text-white">Madu Rindu</span> |{" "}
          <a href="https://brewokode.com/" className="underline hover:text-amber-300">
            Brewokode.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;

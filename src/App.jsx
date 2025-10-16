import { images, products, testimonies } from "./assets/assets";
import { FaCartShopping } from "react-icons/fa6";

const App = () => {
  return (
    <div className="bg-[var(--color-honey-light)] text-gray-800 font-[Inter]">
      {/* Navbar */}
      <nav className="bg-[var(--color-honey-deep)] flex justify-between items-center px-8 py-1 backdrop-blur-md shadow-md fixed w-full top-0 z-50 ">
        <div className="flex items-center gap-3 ">
          <img src={images.logo} alt="Madu Rindu" className="w-24" />
          <h1 className="text-3xl lobster-two-bold text-white">Madu Rindu</h1>
        </div>
        <div className="hidden md:flex gap-6 ">
          {["Keunggulan", "Produk", "Testimoni", "Pesan"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className=" text-white font-poppins font-medium transition">
              {item}
            </a>
          ))}
        </div>
        <div>
          <button className="bg-white flex items-center justify-center gap-1.5 cursor-pointer font-poppins font-semibold px-6 py-2 rounded-full shadow-md hover:bg-amber-100 transition-transform hover:scale-105 text-honey-deep text-sm">
            <FaCartShopping />
            Pesan Sekarang
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-30 pb-28 text-center flex flex-col items-center justify-center bg-hero h-[90vh]">
        <div className="bg-yellow-800/60 p-20 rounded-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-poppins mb-6">Manisnya Cinta, Murninya Alam</h1>
          <p className=" text-lg max-w-2xl mx-auto leading-relaxed font-poppins text-white">Madu Rindu menghadirkan kemurnian madu asli dari lebah pilihan, dipanen dengan kasih sayang untuk menjaga kesehatan dan kebahagiaan Anda.</p>

          <button className="mt-10 bg-honey-dark text-white font-semibold px-10 py-3 rounded-full shadow-lg hover:bg-honey-dark transition-transform hover:scale-105">Dapatkan Sekarang</button>
        </div>
      </section>

      {/* Keunggulan */}
      <section id="keunggulan" className="py-24 bg-[var(--color-honey-deep)] text-center px-6">
        <h2 className="text-3xl font-bold text-honey-deep mb-12">Keunggulan Madu Rindu</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonies.map((item, i) => (
            <div key={i} className="bg-amber-50 p-8 rounded-2xl shadow-sm hover:-translate-y-2 transition-transform">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-honey-dark">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Produk */}
      <section id="produk" className="py-24 bg-amber-100 px-6 text-center">
        <h2 className="text-3xl font-bold text-honey-deep mb-10">Pilihan Produk Kami</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {products.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-2 transition-transform">
              <img src={item.img} alt={item.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-honey-dark mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.price}</p>
                <button className="bg-honey text-white font-semibold px-6 py-2 rounded-full hover:bg-honey-dark transition">Beli Sekarang</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimoni" className="py-24 bg-white text-center px-6">
        <h2 className="text-3xl font-bold text-honey-deep mb-12">Apa Kata Mereka?</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-amber-50 p-8 rounded-2xl shadow-sm italic">
            “Setiap pagi saya minum Madu Rindu, badan jadi enteng dan fokus kerja meningkat!”
            <span className="block mt-4 font-semibold text-honey-dark">— Andi, Bandung</span>
          </div>
          <div className="bg-amber-50 p-8 rounded-2xl shadow-sm italic">
            “Rasanya lembut banget, tidak bikin eneg. Anak-anak juga suka!”
            <span className="block mt-4 font-semibold text-honey-dark">— Nisa, Bandung</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="pesan" className="bg-honey text-white text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-6">Siap Rasakan Manisnya Madu Rindu?</h2>
        <p className="text-lg mb-8">Klik tombol di bawah dan nikmati madu alami terbaik dari alam Indonesia.</p>
        <button className="bg-white text-honey-deep font-semibold px-10 py-3 rounded-full shadow-md hover:bg-amber-100 transition-transform hover:scale-105">Pesan Sekarang 🍯</button>
      </section>

      {/* Footer */}
      <footer className="bg-honey-deep text-amber-100 text-center py-10">
        <p>
          &copy; 2025 Madu Rindu | <a href="https://brewokode.com/">Brewokode.com</a>
        </p>
      </footer>
    </div>
  );
};

export default App;

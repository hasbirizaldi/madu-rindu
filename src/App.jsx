import { images, manfaats, products } from "./assets/assets";
import { IoMdClose } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi (ms)
      once: true, // hanya sekali animasi saat scroll pertama
    });
  }, []);
  return (
    <div className="bg-[var(--color-honey-light)] text-gray-800 font-[Poppins]">
      {/* 🟤 Navbar */}
      <nav className="bg-honey-deep flex justify-between items-center px-3 md:px-10 py-1 md:py-2 backdrop-blur-md shadow-md fixed w-full top-0 z-50" data-aos="fade-down">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img src={images.logo} alt="Madu Rindu" className="w-16 md:w-22" />
          <h1 className="text-2xl md:text-3xl lobster-two-bold text-white drop-shadow-sm hidden sm:block">Madu Rindu</h1>
        </a>

        {/* Menu - Desktop */}
        <div className="hidden md:flex gap-6">
          {["Home", "Produk", "Manfaat", "Testimoni"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-white/90 hover:text-yellow-200 font-poppins font-medium transition">
              {item}
            </a>
          ))}
        </div>

        {/* Tombol Pesan */}
        <div className="hidden md:block">
          <a
            href="https://shopee.co.id/madumurni_rindu?categoryId=100629&entryPoint=ShopByPDP&itemId=7535908713"
            target="_blank"
            className="bg-white flex items-center justify-center gap-2 cursor-pointer font-poppins font-semibold px-6 py-2 rounded-full shadow-md hover:bg-amber-100 transition-transform hover:scale-[1.01] text-honey-deep text-sm"
          >
            <FaCartShopping />
            Pesan Sekarang
          </a>
        </div>

        {/* Menu Mobile Button */}
        <button className="md:hidden text-white text-5xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoMdClose /> : <HiMenuAlt3 />}
        </button>

        {/* Dropdown Mobile */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-honey-deep text-center py-8 flex flex-col gap-4 md:hidden">
            {["Home", "Produk", "Manfaat", "Testimoni"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="text-white/90 hover:text-yellow-200 font-semibold text-lg transition">
                {item}
              </a>
            ))}
            <a
              href="https://shopee.co.id/madumurni_rindu?categoryId=100629&entryPoint=ShopByPDP&itemId=7535908713"
              target="_blank"
              className="bg-white hidden md:block text-honey-deep font-semibold mx-auto px-6 py-2 rounded-full shadow-md hover:bg-amber-100 transition"
            >
              <FaCartShopping />
              Pesan Sekarang
            </a>
          </div>
        )}
      </nav>

      {/* 🍯 Hero Section */}
      <section id="home" className="text-center flex flex-col items-center justify-center bg-hero  bg-center h-[100vh]  px-4 md:px-0" data-aos="zoom-out">
        <div className="bg-honey-deep/90 p-2 py-5 md:px-10 md:py-10 rounded-3xl shadow-lg backdrop-blur-xs max-w-4xl" data-aos="fade-up">
          <img src={images.logo} alt="Madu Rindu" className="w-40 md:w-60 mb-8 mx-auto object-cover" />
          <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-4 md:mb-6 drop-shadow-md">Manisnya Cinta, Murninya Alam</h1>
          <p className="text-base md:text-xl leading-relaxed font-poppins text-white/90">Madu Rindu menghadirkan kemurnian madu asli dari lebah pilihan, dipanen dengan kasih sayang untuk menjaga kesehatan dan kebahagiaan Anda.</p>

          <div className="mt-10">
            <a
              href="https://shopee.co.id/madumurni_rindu?categoryId=100629&entryPoint=ShopByPDP&itemId=7535908713"
              target="_blank"
              className="w-60 mx-auto flex items-center justify-center gap-2 bg-amber-50 text-honey-deep font-poppins font-semibold px-8 md:px-10 py-3 rounded-full shadow-lg hover:bg-amber-100 transition-transform hover:scale-[1.01] cursor-pointer"
            >
              <FaCartShopping />
              Pesan Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* 🐝 Produk */}
      <section id="produk" className="py-16 md:py-20 bg-[var(--color-honey-light)] px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-honey-deep mb-5" data-aos="fade-up">
          Pilihan Produk Kami
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {products.map((item, i) => (
            <div key={i} className="bg-amber-50 border-2 border-amber-700 rounded-2xl shadow-ku overflow-hidden hover:scale-[1.01] cursor-pointer transition duration-500 ease-in-out hover:shadow-gray-900/30 " data-aos="fade-up">
              <img src={item.img} alt={item.name} className="w-full h-60 md:h-70 object-cover hover:scale-[1.05] transition duration-500 ease-in-out" />
              <div className="p-4  relative h-40 md:h-45">
                <h3 className="text-[16px] md:text-xl font-semibold text-honey-dark mb-2">{item.name}</h3>
                <p className="text-gray-700 mb-4 text-base md:text-lg ">{item.price}</p>
                <button className="bg-amber-800 w-45 md:w-50 flex items-center justify-center gap-2 absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-semibold px-6 py-2 rounded-full shadow-md cursor-pointer hover:bg-amber-700 hover:shadow-gray-900/40 transition-transform hover:scale-[1.02] md:text-base text-sm">
                  <FaCartShopping />
                  Beli Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🌻 manfaat */}
      <section id="manfaat" className="py-20 md:py-24 bg-honey text-center px-6" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-bold text-honey-deep mb-5 md:mb-12 font-poppins">4 Manfaat Minum Madu Rindu</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {manfaats.map((item, i) => (
            <div key={i} className=" border-2 border-amber-700 rounded-2xl shadow-ku hover:scale-[1.01] cursor-pointer hover:shadow-gray-900/30  transition-transform overflow-hidden ">
              <div className=" bg-manfaat py-4">
                <div className="flex items-center justify-center w-40 md:w-60 md:h-60 h-40 mx-auto bg-amber-100 rounded-full overflow-hidden shadow-md">
                  <img src={item.icon} alt="Manfaat" className="w-55 h-55 object-contain" />
                </div>
              </div>
              <div className="bg-white py-4 px-2 h-22 border-t-2 border-amber-50">
                <p className="font-poppins text-base md:text-xl font-semibold text-amber-900">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🧡 Testimoni */}
      <section id="testimoni" className="py-20 md:py-24 bg-[var(--color-honey-light)] text-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-honey-deep mb-5 md:mb-12" data-aos="fade-up">
          Apa Kata Mereka?
        </h2>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-6 md:gap-8 ">
          <div className="bg-amber-50 h-34 md:h-40 p-6 md:p-8 rounded-2xl shadow-ku italic text-sm md:text-base relative" data-aos="flip-down">
            “Setiap pagi saya minum Madu Rindu, badan jadi enteng dan fokus kerja meningkat!”
            <span className="block mt-4 font-semibold text-honey-deep absolute bottom-4 left-1/2 -translate-x-1/2">- Hasbi, Kebumen</span>
          </div>
          <div className="bg-amber-50  h-34 md:h-40 p-6 md:p-8 rounded-2xl shadow-ku italic text-sm md:text-base relative" data-aos="flip-down">
            “Rasanya lembut banget, tidak bikin eneg. Anak-anak juga suka!”
            <span className="block mt-4 font-semibold text-honey-deep absolute bottom-4 left-1/2 -translate-x-1/2">- Karsono, Cikampek</span>
          </div>
          <div className="bg-amber-50  h-34 md:h-40 p-6 md:p-8 rounded-2xl shadow-ku italic text-sm md:text-base relative" data-aos="flip-down">
            “Sudah coba banyak madu, tapi Madu Rindu rasanya paling natural dan efeknya cepat terasa.”
            <span className="block mt-4 font-semibold text-honey-deep absolute bottom-4 left-1/2 -translate-x-1/2">- Anton, Cikampek</span>
          </div>
        </div>
      </section>

      {/* 💛 CTA */}
      <section id="pesan" className="bg-[var(--color-honey)] text-honey-deep text-center py-20 px-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-6" data-aos="fade-up">
          Siap Rasakan Manisnya Madu Rindu?
        </h2>
        <p className="text-base md:text-lg mb-8" data-aos="fade-up">
          Klik tombol di bawah dan nikmati madu alami terbaik dari alam Indonesia.
        </p>
        <a
          href="https://shopee.co.id/madumurni_rindu?categoryId=100629&entryPoint=ShopByPDP&itemId=7535908713"
          target="_blank"
          className="bg-amber-800 flex justify-center w-60 items-center gap-2 mx-auto text-white cursor-pointer font-semibold px-8 md:px-10 md:py-3 py-2 rounded-full shadow-md hover:bg-amber-700 transition-transform hover:scale-[1.01]"
          data-aos="fade-up"
        >
          <FaCartShopping />
          Pesan Sekarang
        </a>
      </section>

      {/* 🟤 Footer */}
      <footer className="bg-honey-deep text-amber-100 text-center py-3 text-xs md:text-sm">
        <p>
          &copy; 2025 <span className="font-semibold  text-white">Madu Rindu</span> | Dibuat dengan ❤
          <a href="https://brewokode.com/" className="underline hover:text-amber-200 ml-2">
            Brewokode.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;

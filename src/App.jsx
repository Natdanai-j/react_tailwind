import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const [accordionOpen, setAccordionOpen] = useState(null);
  const toggleAccordion = (index) => {
    setAccordionOpen(accordionOpen === index ? null : index);
  };

  const services = [
    { name: "UX/UI Designing", icon: "ui.png" },
    { name: "Graphic Designing", icon: "web-design.png" },
    { name: "Web Development", icon: "web-development.png" },
    { name: "Microsoft Office", icon: "office.png" },
  ];

  const accordionItems = [
    {
      title: "\uD83C\uDF93 ประวัติการศึกษา",
      content: (
        <div className="space-y-6 border-l-2 border-blue-500 pl-4">
          <div>
            <h3 className="text-lg font-semibold dark:text-white">
              มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              คณะบริหารธุรกิจ | ระบบสารสนเทศและนวัตกรรมธุรกิจดิจิทัล
            </p>
            <span className="text-sm text-gray-500">2566 - ปัจจุบัน</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold dark:text-white">
              ประกาศนียบัตรวิชาชีพชั้นสูง
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              วิทยาลัยเทคนิคพิมาย | เทคโนโลยีสารสนเทศ
            </p>
            <span className="text-sm text-gray-500">2564 - 2566</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold dark:text-white">
              ประกาศนียบัตรวิชาชีพ
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              วิทยาลัยเทคนิคพิมาย | เทคโนโลยีสารสนเทศ
            </p>
            <span className="text-sm text-gray-500">2561 - 2564</span>
          </div>
        </div>
      ),
    },
    {
      title: "\uD83D\uDCBC ประสบการณ์ฝึกงาน",
      content: (
        <div className="space-y-6 border-l-2 border-blue-500 pl-4">
          <div>
            <h3 className="text-lg font-semibold dark:text-white">
              แคนนอน ไฮเทค (ประเทศไทย)
            </h3>
            <p className="text-sm text-gray-500">2566</p>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
              <li>เตรียมส่วนประกอบวัตถุดิบและส่งออกใบยังรายการการผลิต</li>
              <li>ตรวจสอบสภาพชิ้นส่วนว่าผิดปกติหรือไม่</li>
              <li>ดูแลไม่ให้เครื่องจักรทำงานผิดปกติ</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold dark:text-white">
              ไทยเบฟเวอเรจ (KFC)
            </h3>
            <p className="text-sm text-gray-500">2564</p>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
              <li>
                รับผิดชอบในการเตรียมส่วนผสมหมักไก่ ผสมแป้งตามสูตรต่าง ๆ
                และปรุงไก่ให้สุก
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  const [filter, setFilter] = useState("All");

  const galleryItems = [
    { src: "./images/Screenshot-230252.png", tag: "UX/UI Designing" },
    { src: "./images/Screenshot-230520.png", tag: "UX/UI Designing" },
    { src: "./images/Screenshot-230755.png", tag: "UX/UI Designing" },
    { src: "./images/Screenshot-225130.png", tag: "UX/UI Designing" },
    { src: "./images/Screenshot-225901.png", tag: "UX/UI Designing" },
    { src: "./images/Screenshot-230938.png", tag: "UX/UI Designing" },
    { src: "./images/web001.png", tag: "Website" },
    { src: "./images/graphic001.jpg", tag: "Graphic Designing" },
    { src: "./images/graphic002.jpg", tag: "Graphic Designing" },
    { src: "./images/graphic003.jpg", tag: "Graphic Designing" },
    { src: "./images/project1.png", tag: "Graphic Designing" },
    { src: "./images/Screenshot-234113.png", tag: "certificate" },
    { src: "./images/Screenshot-233746.png", tag: "certificate" },
    { src: "./images/Screenshot-233534.png", tag: "certificate" },
  ];

  const filteredItems =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.tag === filter);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white border-b dark:bg-gray-900 fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-3">
            <img src="./images/open-book.png" className="h-8" alt="Logo" />
            <span className="text-2xl font-bold dark:text-white">
              My Profile
            </span>
          </a>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 dark:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a href="#home" className="text-blue-600 font-semibold">
              Home
            </a>
            <a href="#about" className="hover:text-blue-500 dark:text-white">
              About
            </a>
            <a href="#services" className="hover:text-blue-500 dark:text-white">
              Services
            </a>
            <a href="#gallery" className="hover:text-blue-500 dark:text-white">
              Gallery
            </a>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 flex flex-col space-y-2">
            <a href="#home" className="text-blue-600 font-semibold">
              Home
            </a>
            <a href="#about" className="hover:text-blue-500 dark:text-white">
              About
            </a>
            <a href="#services" className="hover:text-blue-500 dark:text-white">
              Services
            </a>
            <a href="#gallery" className="hover:text-blue-500 dark:text-white">
              Gallery
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-blue-50 dark:bg-gray-900 pt-28 pb-20 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-300 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-300 opacity-10 rounded-full blur-3xl animate-pulse"></div>

        <div className="max-w-screen-xl mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center z-10 relative">
          {/* ข้อความแนะนำตัว */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Hello I'm <br />
              <span className="text-blue-600 dark:text-blue-400">
                Natdanai Jitphimai
              </span>
            </h1>

            <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              มุ่งมั่นในการพัฒนาทักษะและความรู้เพื่อสร้างสรรค์งานที่มีคุณภาพ
              พร้อมรับความท้าทายและการเรียนรู้ใหม่ๆ
            </p>

            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-700 transition duration-300"
              >
                ดูผลงาน
              </a>
              <a
                href="#about"
                className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 font-medium rounded-full hover:bg-blue-50 dark:hover:bg-gray-800 transition duration-300"
              >
                ติดต่อฉัน
              </a>
            </div>
          </div>

          {/* รูปโปรไฟล์ */}
          <div className="lg:col-span-5 hidden lg:block">
            <img
              src="./images/IMG_0165-1.jpg"
              className="rounded-[80px] shadow-2xl transform hover:scale-105 transition duration-500"
              alt="Profile"
            />
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="bg-white dark:bg-gray-800 py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center lg:justify-end">
            <img
              src="./images/IMG_0165-1.jpg"
              className="rounded-[50px]  shadow-lg w-full max-w-sm"
              alt="Profile"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              เกี่ยวกับฉัน
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              ผมกำลังมองหาโอกาสในการทำงานในด้านพัฒนาเว็บไซต์,
              ส่วนหน้าของเว็บไซต์, ธุรการบุคคลและทั่วไป, การตลาดดิจิทัล
              หรือการออกแบบเว็บไซต์
            </p>
            {/* ข้อมูลการติดต่อ */}
      <div className="mt-6 space-y-4 text-base text-gray-800 dark:text-gray-200">
        <div className="flex items-center">
          <img src="./images/phone-call.png" className="w-5 h-5 mr-3" />
          <span className="font-medium">โทร:</span> 065-109-7086
        </div>
        <div className="flex items-center">
          <img src="./images/email-1.png" className="w-5 h-5 mr-3" />
          <span className="font-medium">Email:</span> 12natdanai.j@gmail.com
        </div>
        <div className="flex items-center">
          <img src="./images/location.png" className="w-5 h-5 mr-3" />
          <span className="font-medium">ที่อยู่:</span> 9/1 หมู่ 6 ต.ในเมือง อ.พิมาย จ.นครราชสีมา
        </div>
      </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="bg-yellow-50 dark:bg-gray-900 py-20 px-4 text-center"
      >
        <h3 className="text-yellow-500 uppercase text-sm">Services</h3>
        <h1 className="text-3xl font-bold mt-2 mb-6 dark:text-white">
          สำรวจทักษะและผลงานของฉันด้านล่าง
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 w-64 rounded-lg hover:scale-105 transition"
            >
              <img
                src={`./images/${service.icon}`}
                className="w-12 h-12 mx-auto mb-4"
                alt={service.name}
              />
              <h2 className="text-white text-lg font-semibold">
                {service.name}
              </h2>
            </div>
          ))}
        </div>
      </section>

      {/* Accordion Section */}
      <section id="contact" className="bg-green-50 dark:bg-gray-800 py-20 px-6">
        <h2 className="text-3xl font-bold text-gray-50 mb-6 text-center">
          ประวัติการศึกษา/ประสบการณ์ทำงาน
        </h2>
        {accordionItems.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-700 py-4 max-w-3xl mx-auto"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center text-white text-lg font-medium"
            >
              {item.title}
              <span className="text-gray-50 text-2xl">
                {accordionOpen === index ? "-" : "+"}
              </span>
            </button>
            {accordionOpen === index && (
              <div className="mt-3">{item.content}</div>
            )}
          </div>
        ))}
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="dark:bg-gray-900 py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-black">
  <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
    🎨 แกลเลอรี่ผลงานของฉัน
  </h2>

  {/* Filter Buttons */}
  <div className="flex justify-center flex-wrap gap-3 mb-8">
    {["All", "UX/UI Designing", "Website", "Graphic Designing", "certificate"].map(
      (category) => (
        <button
          key={category}
          onClick={() => setFilter(category)}
          className={`px-5 py-2 text-sm rounded-full border font-medium transition ${
            filter === category
              ? " text-white"
              : "border-gray-400 text-gray-700 dark:text-white   hover:text-white"
          }`}
        >
          {category}
        </button>
      )
    )}
  </div>

  {/* Image Gallery */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {filteredItems.map((item, index) => (
      <img
        key={index}
        src={item.src}
        alt={item.tag}
        className="rounded-xl shadow-lg transition-transform hover:scale-105"
      />
    ))}
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 relative">
  <p className="mb-2">&copy; 2025 Natdanai Jitphimai. All rights reserved.</p>
  <div className="flex justify-center gap-4">
    <a href="mailto:12natdanai.j@gmail.com">
      <img src="./images/email-1.png" className="w-5 h-5 hover:scale-110 transition" />
    </a>
    <a href="tel:0651097086">
      <img src="./images/phone-call.png" className="w-5 h-5 hover:scale-110 transition" />
    </a>
    {/* เพิ่ม social link ได้ที่นี่ */}
  </div>
</footer>

    </>
  );
}

export default App;

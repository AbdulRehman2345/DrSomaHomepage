import { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import HeroSection from "../Components/HeroSection/HeroSection";
import Footer from "../Components/Footer/Footer";
import {
  Users,
  Calendar,
  HeartPulse,
  Star,
  Quote,
  Microscope,
  Megaphone,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ShieldCheck,
  Award,
  GraduationCap,
  FileText,
  Activity,
  ZoomIn,
  Sparkles,
  Shield,
  Cpu,
  X,
} from "lucide-react";

const UpdatesBanner = () => {
  const credentials = [
    {
      icon: <ShieldCheck size={20} />,
      title: "Special Consultation Offer",
      desc: "ntroducing our latest facial rejuvenation treatment with cutting-edge technology ",
    },
    {
      icon: <Award size={20} />,
      title: "Enhanced Patient Experience",
      desc: "Our patient portal has been upgraded with new features for better experience.",
    },
    {
      icon: <Microscope size={20} />,
      title: "New Advanced Treatment",
      desc: "ntroducing our latest facial rejuvenation treatment with cutting-edge technology",
    },
  ];

  return (
    <div className="w-full mt-2 bg-black border-y border-[#EA622F]/10">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {credentials.map((item, index) => (
            <div
              key={index}
              className="group flex items-center justify-between p-8 hover:bg-white/[0.02] transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-5">
                <div className="text-[#EA622F]">{item.icon}</div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#EA622F] font-bold tracking-[0.2em] uppercase mb-1">
                    {item.title}
                  </span>
                  <span className="text-xs text-white/70 font-medium tracking-wide uppercase">
                    {item.desc}
                  </span>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-white/20 group-hover:text-[#EA622F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------------- Services Data ---------------- */
const features = [
  {
    pic: "/breast.png",
    title: "BREAST",
    description:
      "Transform your confidence with advanced breast procedures including augmentation, reduction, and lift surgeries tailored to your unique needs",
  },
  {
    pic: "/cream.png",
    title: "FACE",
    description:
      "Rejuvenate your natural beauty with cutting-edge facial procedures including lifts, rhinoplasty, and non-surgical treatments",
  },
  {
    pic: "/weight-loss.png",
    title: "BODY",
    description:
      "Sculpt your ideal physique with advanced body contouring procedures including liposuction, tummy tucks, and fat transfer",
  },
];

const AboutDoctor = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const stats = [
    { icon: <Users size={16} />, value: "1000+", label: "Happy Patients" },
    { icon: <Calendar size={16} />, value: "30+", label: "Years Experience" },
    {
      icon: <HeartPulse size={16} />,
      value: "500+",
      label: "Successful Surgeries",
    },
    { icon: <Star size={16} />, value: "4.9", label: "Patient Rating" },
  ];

  const values = [
    { icon: <ShieldCheck size={16} />, text: "Safety First Protocol" },
    { icon: <Activity size={16} />, text: "Natural Aesthetics" },
    { icon: <Microscope size={16} />, text: "Precision Technology" },
  ];

  const certificateImages = [
    { src: "/ce1.jpg" },
    { src: "/ce2.jpg" },
    { src: "/ce3.jpg" },
    { src: "/ce4.jpg" },
  ];

  return (
    <div className="w-full bg-white font-sans antialiased overflow-hidden">
      {/* Main Section Container */}
      <section className="max-w-[1440px]  mx-auto px-4 sm:px-8 lg:px-12 py-16 lg:py-24">
        {/* Top Header: Trust Indicators */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-black/5 pb-8">
          <div className="max-w-xl">
            <h4 className="text-[#EA622F] text-[10px] font-black uppercase tracking-[0.4em] mb-3">
              Surgical Leadership
            </h4>
            <h2 className="text-4xl lg:text-6xl font-bold text-black tracking-tighter leading-[0.9]">
              DR. SOMA{" "}
              <span className="text-black/20 font-light">SUNDARAM</span>
            </h2>
          </div>
          <div className="flex items-center space-x-4 bg-black text-white px-6 py-4 rounded-2xl shadow-xl shadow-black/10 self-start md:self-auto">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">
                Expertise
              </span>
              <span className="text-sm font-medium">
                Aesthetic & Reconstructive Surgery
              </span>
            </div>
            <div className="h-8 w-[1px] bg-white/10"></div>
            <Star className="text-[#EA622F]" size={24} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side: Modern Profile Card (4/12) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="relative group overflow-hidden rounded-[2.5rem] bg-black">
              <img
                src="/dr_soma_pic.png"
                alt="Dr. Soma Sathappan"
                className="w-full aspect-[4/5] object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

              {/* Quick Contact CTA overlay */}
              <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <button className="w-full bg-white text-black py-4 rounded-xl text-xs font-black uppercase tracking-widest shadow-2xl flex items-center justify-center space-x-2 hover:bg-[#EA622F] hover:text-white transition-colors">
                  <span>Read More</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* Vertically Stacked Trust Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] p-6 rounded-2xl border border-black/5 hover:border-[#EA622F]/20 transition-all group"
                >
                  <div className="text-[#EA622F] mb-3 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="text-2xl font-normal text-black leading-none mb-1">
                    {item.value}
                  </div>
                  <div className="text-[9px] font-bold text-black/40 uppercase tracking-widest">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Narrative & Credentials (8/12) */}
          <div className="lg:col-span-8">
            <div className="max-w-3xl">
              <p className="text-xl lg:text-2xl text-black/70 leading-relaxed font-light mb-10">
                A pioneer in plastic surgery with{" "}
                <span className="text-black font-semibold underline decoration-[#EA622F] decoration-2 underline-offset-4">
                  30+ years of excellence
                </span>
                . Specializing in reconstructive and aesthetic procedures across
                Malaysia and the UK, Dr. Soma blends clinical mastery with an
                artistic vision for natural results.
              </p>

              {/* Value Propositions Partition */}
              <div className="flex flex-wrap gap-4 mb-16">
                {values.map((v, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-3 bg-[#F8FAFC] border border-black/5 px-5 py-3 rounded-full"
                  >
                    <div className="text-[#EA622F]">{v.icon}</div>
                    <span className="text-[10px] font-bold text-black/60 uppercase tracking-widest">
                      {v.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* The Credential Ledger */}
              <div className="bg-[#F8FAFC] rounded-[2rem] p-8 md:p-12 border border-black/5">
                <div className="flex items-center justify-between mb-8 border-b border-black/10 pb-6">
                  <div>
                    <h5 className="text-black font-bold text-sm uppercase tracking-widest">
                      Certificates
                    </h5>
                    <p className="text-[#EA622F] text-[9px] font-black uppercase tracking-[0.2em] mt-1">
                      Medical Board Accreditations
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                  {certificateImages.map((cert, idx) => (
                    <div
                      key={idx}
                      className="group relative cursor-pointer"
                      onClick={() => setSelectedCert(cert)}
                    >
                      <div className="relative aspect-[3/4] bg-white border border-black/5 rounded-2xl overflow-hidden shadow-sm transition-all duration-500 group-hover:border-[#EA622F]/40 group-hover:shadow-2xl group-hover:-translate-y-2">
                        <img
                          src={cert.src}
                          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />

                        {/* Placeholder Icon if Image fails */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-40 group-hover:opacity-0 transition-opacity">
                          <FileText
                            size={32}
                            className="text-black/10 mb-2"
                            strokeWidth={1}
                          />
                        </div>

                        {/* Zoom Indicator */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                          <div className="bg-white text-black p-3 rounded-full shadow-2xl">
                            <ZoomIn size={18} />
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 text-center">
                        <span className="text-[8px] font-bold text-black/30 uppercase tracking-[0.2em] group-hover:text-[#EA622F] transition-colors">
                          {cert.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 animate-in fade-in zoom-in-95 duration-300"
          onClick={() => setSelectedCert(null)}
        >
          <button className="absolute top-8 right-8 text-white/40 hover:text-white transition-all transform hover:rotate-90">
            <X size={40} />
          </button>

          <div
            className="relative max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCert.src}
              className="max-w-full max-h-[80vh] object-contain shadow-[0_0_100px_rgba(234,98,47,0.2)] rounded-lg border border-white/10"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/1000x1400?text=Credential+Preview";
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const Apprrrr = () => {
  const values = [
    {
      title: "REINVENT",
      subtitle: "Your Appearance",
      desc: "Our comprehensive approach to aesthetic and reconstructive surgery helps you reinvent your appearance with surgical precision and artistic vision.",
    },
    {
      title: "REFRESH",
      subtitle: "Natural Beauty",
      desc: "From advanced facial rejuvenation techniques to sophisticated body contouring procedures, we refresh your natural beauty.",
    },
    {
      title: "REVEAL",
      subtitle: "Your Best Self",
      desc: "Our state-of-the-art facility combines cutting-edge technology with three decades of expertise to reveal the best version of yourself.",
    },
  ];

  return (
    <section className="w-full bg-white py-0 px-6 md:px-12 lg:px-24 font-sans text-black">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
              OUR COMMITMENT TO <br />
              <span className="text-[#FF6B00]">EXCELLENCE.</span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-xl leading-relaxed">
              Every procedure is tailored to your individual needs, ensuring
              results that are both beautiful and natural. Experience the
              perfect blend of medical excellence and aesthetic artistry.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="bg-black text-white p-6 rounded-2xl flex items-center gap-4 border border-black hover:border-[#FF6B00] transition-colors group cursor-default">
              <div className="p-3 bg-[#FF6B00] rounded-xl text-black">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Safety First
                </p>
                <p className="font-bold">Caring Environment</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Main Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* LEFT COLUMN: The Reinvent/Refresh/Reveal Cards */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {values.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8F8F8] p-8 rounded-[2.5rem] border border-gray-100 group hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-black tracking-tighter">
                    <span className="text-[#FF6B00]">{item.title}</span>{" "}
                    {item.subtitle}
                  </h3>
                  <ArrowUpRight className="text-gray-300 group-hover:text-black transition-all" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: The High Impact Stat Grid */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* 30+ Years Hero (Black) */}
            <div className="sm:col-span-2 bg-black rounded-[3rem] p-12 flex flex-col justify-between relative overflow-hidden h-[400px] border border-black hover:border-[#FF6B00]/50 transition-all duration-500 group">
              {/* Abstract Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00] opacity-10 blur-[100px] group-hover:opacity-20 transition-opacity"></div>

              <div className="flex justify-between items-start z-10">
                <div className="p-4 bg-[#FF6B00] rounded-2xl text-black">
                  <Star className="w-8 h-8 fill-black" />
                </div>
              </div>

              <div className="z-10">
                <h4 className="text-white text-8xl font-black tracking-tighter leading-none">
                  30<span className="text-[#FF6B00]">+</span>
                </h4>
                <p className="text-[#FF6B00] text-2xl font-bold mt-2 uppercase tracking-tight">
                  Years Experience
                </p>
                <p className="text-gray-400 mt-4 max-w-xs text-sm">
                  Decades of surgical expertise and artistic vision across
                  thousands of successful procedures.
                </p>
              </div>
            </div>

            {/* 100% Personalized */}
            <div className="bg-[#F8F8F8] rounded-[2.5rem] p-10 border border-gray-100 flex flex-col justify-between group hover:bg-white transition-all">
              <Sparkles className="text-[#FF6B00] w-10 h-10 mb-8" />
              <div>
                <h5 className="text-5xl font-black text-black tracking-tighter">
                  100%
                </h5>
                <p className="text-gray-500 font-bold uppercase text-xs tracking-widest mt-2">
                  Personalized Care
                </p>
              </div>
            </div>

            {/* Latest Technology */}
            <div className="bg-black rounded-[2.5rem] p-10 border border-black flex flex-col justify-between group hover:border-[#FF6B00] transition-all">
              <Cpu className="text-[#FF6B00] w-10 h-10 mb-8" />
              <div>
                <h5 className="text-white text-3xl font-black leading-tight">
                  Latest <br />
                  <span className="text-[#FF6B00]">Tech</span>
                </h5>
                <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mt-2">
                  State-of-the-Art facility
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Methodology Section */}
          <div className="md:col-span-12 mt-4">
            <div className="bg-[#F8F8F8] rounded-[3rem] p-6 md:p-12 border border-gray-100 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <p className="text-black font-black text-xl uppercase tracking-widest mr-4">
                Our Core Standards
              </p>
              {[
                "Surgical Precision",
                "Artistic Vision",
                "Medical Excellence",
              ].map((standard, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white px-8 py-5 rounded-2xl shadow-sm border border-gray-100 w-full md:w-auto hover:border-[#FF6B00] transition-colors cursor-default"
                >
                  <div className="w-2 h-2 rounded-full bg-[#FF6B00]"></div>
                  <span className="font-bold text-black">{standard}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <HeroSection />

      {/* ----------------------------- Services Section  ---------------------- */}
      <section className="bg-white mt-3 pt-15 md:pt-16 pb-28 px-4 md:px-16 lg:px-28">
        <div className="text-center mb-11">
          <h2 className="text-3xl md:text-3xl font-bold text-black mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Expert cosmetic and reconstructive treatments to enhance your <br />
            natural beauty and confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-lg p-10 text-center rounded-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                {/* Use feature.pic instead of feature.icon */}
                <img
                  src={feature.pic}
                  alt={feature.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Apprrrr />

      {/* ----------------------------- Dr Info Section  ---------------------- */}
      <UpdatesBanner />

      <AboutDoctor />
      <div className="relative w-full h-8 mt-0  md:h-10 md:mt-6 lg:h-12 lg:mt-7 pointer-events-none">
        <svg
          className="absolute bottom-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
        >
          <path
            // This transformation flips the path horizontally (scale(-1, 1)) and shifts it back into view (translate(-1440, 0)).
            transform="scale(-1, 1) translate(-1440, 0)"
            fill="#EA622F"
            fillOpacity="1"
            // This is the original path data, now mirrored by the transform attribute.
            d="M0,32L48,42.7C96,53,192,50,288,48C384,46,480,42,576,40C672,38,768,36,864,32C960,28,1056,24,1152,20C1248,16,1344,12,1392,10L1440,8L1440,60L1392,60C1344,60,1248,60,1152,60C1056,60,960,60,864,60C768,60,672,60,576,60C480,60,384,60,288,60C192,60,96,60,48,60L0,60Z"
          ></path>
        </svg>
      </div>

      <Footer />
    </div>
  );
}

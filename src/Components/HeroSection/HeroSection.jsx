export default function HeroSection() {
  return (
    <>
      <section className="pt-25 lg:pt-24 bg-white text-gray-900 overflow-hidden relative">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-2 lg:gap-8 pt-8 lg:pt-24 pb-8 lg:pb-16 relative min-h-[500px]">

            <div className="flex flex-col justify-center mb-6 lg:mb-0 lg:h-full px-4 sm:px-8 lg:px-12">
              <div className="flex items-center text-sm font-semibold text-[#EA622F] mb-2">
                <span className="w-2  h-2 bg-[#EA622F] rounded-full mr-2"></span>
                The Best Choice A Patient Can Make Is One That Leads To Their Own Happiness
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight mb-6">
                Bring Out The
                <br />
                <span className="text-black">Natural Beauty</span> <br />
                 In You
                <br />
              </h1>

              <blockquote className="text-gray-600 text-lg mb-8 border-l-4 border-[#EA622F] pl-4 italic">
                "Dr. Soma - Plastic Surgeon"
              </blockquote>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#EA622F] cursor-pointer text-white font-semibold px-6 py-3 rounded-xl transition-transform duration-300 hover:-translate-y-0.5 rounded-md font-semibold shadow-[0_10px_30px_rgba(250,200,21,0.12)">
                  View Our Services
                </button>
                <button className="flex items-center cursor-pointer justify-center border border-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-xl transition hover:bg-gray-50">
                  Contact Us
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center lg:h-full px-4 sm:px-8 lg:px-12 pt-4 lg:pt-0">
              <div className="hero-card shadow-xl rounded-2xl overflow-hidden relative w-full lg:max-w-none cursor-pointer md:min-h-[300px] lg:h-full">
                <img
                  src="/public/pexels-moose-photos-170195-1586999.jpg"
                  alt=""
                  className="w-full h-110 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-lg font-medium opacity-80">
                      Enhance Your Beauty
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="relative w-full h-8 mt-0 md:h-10 md:mt-0 lg:h-12 lg:mt-7 pointer-events-none">
        <svg
          className="absolute bottom-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
        >
          <path
            fill="#EA622F"
            fillOpacity="1"
            d="M0,32L48,42.7C96,53,192,50,288,48C384,46,480,42,576,40C672,38,768,36,864,32C960,28,1056,24,1152,20C1248,16,1344,12,1392,10L1440,8L1440,60L1392,60C1344,60,1248,60,1152,60C1056,60,960,60,864,60C768,60,672,60,576,60C480,60,384,60,288,60C192,60,96,60,48,60L0,60Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
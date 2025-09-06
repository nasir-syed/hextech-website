import TextAnimation from "../components/TextAnimation";

export default function Hero() {
  return (
    <div className="w-screen h-screen relative flex items-center justify-center overflow-hidden px-6">
      <div className="text-center max-w-[95%] mx-auto">
        <TextAnimation delay={0.8}>
          <h1 className="text-2xl sm:text-5xl md:text-7xl font-bold text-[#007fc2] poppins-semibold mb-6 leading-tight">
            Innovative tech solutions <br/> that scale with you
          </h1>
        </TextAnimation>

        <TextAnimation delay={0.8}>
          <p className="text-md sm:text-xl md:text-2xl text-gray-300 poppins-regular mb-12 leading-relaxed max-w-5xl mx-auto">
            Build cutting-edge applications for your startups, clients, and
            enterprise projects, without compromising on performance or
            innovation.
          </p>
        </TextAnimation>
      </div>
    </div>
  );
}

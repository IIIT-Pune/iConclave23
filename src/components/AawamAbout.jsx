const AawamAbout = () => {
  return (
    <div
      className="min-h-screen py-10 flex flex-col justify-center items-center bg-black text-white font-monoton"
      id="about"
    >
      <div>
        <div>
          <h1 className="text-5xl text-center lg:text-left sm:text-6xl md:text-7xl lg:text-8xl lg:pl-10 lg:pt-10">
            ABOUT
          </h1>
        </div>
        <div className="text-white text-base sm:text-xl md:text-2xl lg:text-4xl space-y-6 text-justify leading-relaxed px-10 sm:px-20 py-10 lg:py-12 font-miso">
          <p>
            Immerse yourself in the compelling world of street theatre, where
            the art of performance becomes a dynamic force for change.
          </p>
          <p>
            Our street play performances are not mere spectacles; they are a
            transformative medium through which we deliver vital social messages
            to a diverse and extensive audience. Beyond entertainment, we aim to
            ignite awareness, cultivate a deeper understanding of pressing
            societal issues and foster empathy that drives collective action.
          </p>
          <p>
            Join us in this immersive experience, where the streets become our
            stage, and together, we become the voice of change!
          </p>
        </div>
        <div className="text-center text-white">
          <h3 className="text-5xl font-miso">PRIZE POOL</h3>
          <h1 className="text-center text-5xl text-white lg:text-8xl font-monoton">
            INR 18K
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AawamAbout;

import AnuragNav from "../components/AnuragNav";
import Footer from "../components/Footer";
import { Element } from "react-scroll";

const Anurag = () => {
  return (
    <div className="bg-[url('/images/anuraag_bg.png')] cover no-repeat text-white min-h-screen flex flex-col bg-cover bg-center">
      <AnuragNav />
      <div className="flex flex-col items-center my-20 flex-grow">
        <div className="flex justify-center">
          <img
            src="./images/anuraag_logo.png"
            alt="lockoutlogo"
            className="w-10/12 md:w-9/12 lg:w-192 p-10"
          />
        </div>

        {/* <div className="flex flex-col">
            <h1 className="text-8xl lg:text-12xl font-smarkan lg:mt-10">
              anuraag
            </h1>
            <p className="text-5xl lg:text-7xl font-miso lg:-mt-10 lg:-ml-5 text-center">
              BATTLE OF BANDS
            </p>
          </div> */}

        {/* <div className="flex justify-center items-center mt-48 m-10">
          <h1 className="text-white font-miso border-2 px-5 py-3 text-4xl lg:text-5xl rounded-2xl tracking-wider ">
            REGISTER
          </h1>
        </div> */}
      </div>
      <Element name="aboutsection">
        <section className="about mb-24">
          <div className="flex-grow flex flex-col">
            <div
              className="font-newshape flex justify-center items-center pb-8 pt-12 md:pt-16 md:px-20"
              style={{ fontSize: "7rem" }}
            >
              <img
                src="/images/anuragabout.png"
                className="h-16 sm:h-20 md:h-24 lg:h-36"
                alt=""
              />
            </div>

            <div className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl space-y-6  text-justify leading-relaxed px-10 sm:px-20 py-10 lg:py-12 font-miso">
              <p>
                Prepare for an unparalleled musical showdown as the stage comes
                alive with the thunderous beats and electrifying melodies of the
                Inter-College Battle of Bands!
              </p>
              <p>
                This exhilarating event invites talented bands from colleges far
                and wide to unleash their sonic prowess and compete for ultimate
                supremacy. It's not just a competition; it's a celebration of
                artistry and creativity, where each note strikes a chord with
                the audience's hearts. Beyond the spotlight, it's a platform for
                forging lasting connections, where musicians can collaborate,
                inspire, and learn from one another.
              </p>
              <p>
                So, whether you're a fan of rock, pop, or something in between,
                join us for an unforgettable evening of music that will leave
                you cheering, dancing and grooving along to the song beats!
              </p>
            </div>
          </div>
        </section>
      </Element>
      <Footer
        textColor="white"
        socialMediaLinks={{
          mail: "mailto:saaz_iiitp@iiitp.ac.in",
          instagram: "https://www.instagram.com/saaz_iiitp/",
        }}
      />

      {/* <div className="bg-[url('/images/anuragbg.png')] text-white min-h-screen flex flex-col bg-cover bg-center"></div> */}
    </div>
  );
};

export default Anurag;

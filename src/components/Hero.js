import Spline from "@splinetool/react-spline";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col bg-primary justify-center items-centerpy-2 items-center pt-14 md:pt-0`}
    >
      <div className="container">
        <div className="wrapper grid sm:grid-cols-2 gap-8 bg-primary">
          <div className={`flex justify-center items-start flex-col`}>
            <div className="flex flex-row justify-between items-center w-full ">
              <h1 className=" font-poppins font-semibold  text-white text-[2.5rem] sm:text-[3rem] md:text-[3rem] lg:text-6xl leading-[-10rem]">
                The Next Gen <br className="sm:block hidden" />{" "}
                <span className="text-gradient">Video Solution.</span>
                <br className="sm:block hidden" /> Zero Code.
              </h1>
            </div>

            <p
              className={`font-poppins font-normal text-dimWhite text-[18px] mt-5`}
            >
              Hello, streamers! Welcome to nosiy, where your streaming dreams
              come true. From content to streaming, we handle it all, code-free.
              Let&apos;s explore!
            </p>
            <div className="flex flex-row items-center py-2 px-4 bg-discount-gradient rounded-xl mb-2 mt-8">
              <img
                src="/launch.svg"
                alt="in beta"
                className="w-[14px] h-[14px]"
              />
              <p
                className={`font-poppins font-normal text-dimWhite text-[12px] ml-2`}
              >
                <span className="text-white font-mono">IN CLOSED BETA</span>
              </p>
            </div>
          </div>

          <div className={`flex justify-center items-center relative`}>
            <Spline
              scene="https://prod.spline.design/SuNdcjb8PU1yEa4H/scene.splinecode"
              className="relative z-[5]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

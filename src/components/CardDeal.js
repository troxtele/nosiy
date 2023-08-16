import Button from "./Button";

const CardDeal = () => (
  <section className={`flex md:flex-row flex-col`}>
    <div className="container">
      <div className="wrapper flex flex-col-reverse md:grid grid-cols-2 gap-8">
        <div className={`flex justify-center items-start flex-col`}>
          <h2 className={`font-poppins font-semibold  text-white w-full`}>
            Stream Beyond Limits: <br className="sm:block hidden" /> Build Your
            One-of-a-Kind Streaming Hub.
          </h2>
          <p className={`font-poppins font-normal text-dimWhite text-[18px] mt-5`}>
            Shape your streaming universe with a toolkit customized to your
            imagination. Transform your content, engage your audience, and
            amplify your brand&apos;s essence—crafting an extraordinary
            streaming hub that stands apart.
          </p>

          <Button styles={`mt-10`} />
        </div>

        <div className={`flex justify-center items-center relative`}>
          <img
            src="/features.png"
            alt="billing"
            className="w-[100%] h-[100%]"
          />
        </div>
      </div>
    </div>
  </section>
);

export default CardDeal;

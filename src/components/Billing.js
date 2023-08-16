const Billing = () => (
  <section
    id="product"
    className={`flex md:flex-row flex-col-reverse relative`}
  >
    <div className="container">
      <div className="wrapper grid md:grid-cols-2 gap-8">
        <div className="img">
          <img
            src="/Ads.png"
            alt="billing"
            className=" relative max-w-[35rem] w-full"
          />

          {/* gradient start */}
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          {/* gradient end */}
        </div>

        <div className={`flex justify-center items-start flex-col`}>
          <h2 className={`font-poppins font-semibold text-white w-full `}>
            Turn your passion
            <br className="md:block hidden" />
            into paychecks
          </h2>
          <p
            className={`font-poppins font-normal text-dimWhite text-[18px] mt-5`}
          >
            Nosiy get you the ticket to monetize your passion. Say hello to our
            Ads tool – the ultimate sidekick for streamers. Seamlessly weave ads
            into your content and start raking in the rewards. It&apos;s time to
            get paid for doing what you love.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Billing;

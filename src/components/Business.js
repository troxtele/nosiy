import { features } from "../constants";
import styles, { layout } from "../constants/styles";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className="feature-card md:p-5 rounded-2xl flex gap-3">
    <div
      className={`rounded-full max-h-[50px] min-w-[50px] flex justify-center items-center bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[1.5rem]" />
    </div>

    <div className="flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={`flex md:flex-row flex-col`}>
    <div className="container">
      <div className="wrapper grid md:grid-cols-2 gap-12 sm:gap-8">
        <div className={`flex items-start flex-col`}>
          <div>
            <h2 className={`font-poppins font-semibold  text-white w-full`}>
              You focus on creation, <br className="sm:block hidden" /> we’ll
              handle the rest.
            </h2>
            <p
              className={`font-poppins font-normal text-dimWhite text-[18px] mt-5`}
            >
              Dive into video creation and streaming as we adaptly handle
              content preparation, enhancement, website publishing, membership
              services, and even secure payment processing. Trust in us to fuel
              your vision.
            </p>
            <Button styles={`mt-10`} />
          </div>
        </div>

        <div
          className={`flex  gap-8 md:gap-1 justify-between flex-col rounded-[20px] relative`}
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Business;

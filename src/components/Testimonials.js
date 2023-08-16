import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`flex justify-center items-center flex-col relative`}
  >
    <div className="container">
      <div className="wrappper grid gap-12 max-w-[75rem] 2xl:max-w-[82rem] m-auto">
        <div className="relative z-[1] grid md:flex gap-4 md:gap-8 items-center">
          <h2 className="font-poppins font-semibold  text-white w-full">
            What People are <br className="md:block hidden" /> saying about us
          </h2>
          <div>
            <p
              className={`font-poppins font-normal text-dimWhite text-[18px] text-left`}
            >
              Elevate your video streaming endeavors and worldwide business
              expansion – all from one platform.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-[1]">
          {feedback.map((card) => (
            <FeedbackCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>

    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
  </section>
);

export default Testimonials;

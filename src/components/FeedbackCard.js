const FeedbackCard = ({ content, name, title, img }) => (
  <>
    <div className="flex justify-between flex-col py-6 px-5 md:px-10 md:py-12 rounded-xl feedback-card border border-dimWhite/10 transition-all duration-300">
      <img src="/quotes.svg" alt="double_quotes" className="w-10" />
      <p className="font-poppins font-normal text-[18px] text-white my-10">
        {content}
      </p>

      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  </>
);

export default FeedbackCard;

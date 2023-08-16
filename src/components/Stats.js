import { stats } from "../constants";

const Stats = () => (
  <section className="">
    <div className="container">
      <div className="wrapper flex flex-wrap sm:justify-around gap-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`flex justify-start items-center flex-row`}
          >
            <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] text-white">
              {stat.value}
            </h4>
            <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] text-gradient uppercase ml-3">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;

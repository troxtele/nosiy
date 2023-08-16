const Steps = () => (
  <section className="">
    <div className="container">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-[#ff9e00] uppercase rounded-full bg-teal-accent-400">
            Blazing Fast
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-4xl text-white font-bold md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-indigo-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="d0d83814-78b6-480f-9a5f-7f637616b267"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#d0d83814-78b6-480f-9a5f-7f637616b267)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{" "}
          quickest way to start streaming
        </h2>
        <p className="text-base text-gradient md:text-lg">
          Experience the thrill of launching your streaming website
          lightning-fast, from concept to takeoff.
        </p>
      </div>
      <div className="relative grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
          <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
        </div>
        <div className="p-5 duration-300 transform bg-[#5a189a] border border-[#7785ac] rounded-lg shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold text-zinc-200">Prompt</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-indigo-800 bg-indigo-200">
              1
            </p>
          </div>
          <p className="text-sm text-zinc-300">
            Outline your project concept, and watch us swiftly produce a
            template.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-[#5a189a] border border-[#7785ac] rounded-lg shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold text-zinc-200">Upload</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-indigo-800 bg-indigo-200">
              2
            </p>
          </div>
          <p className="text-sm text-zinc-300">
            Drag your video into nosiy, we prep, you stream. Ready to live
            stream? The stage is yours!
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-[#5a189a] border border-[#7785ac] rounded-lg shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold text-zinc-200">Optimize</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-indigo-800 bg-indigo-200">
              3
            </p>
          </div>
          <p className="text-sm text-zinc-300">
            Expertly optimizing, securing, and distributing, empowering your
            creative brilliance.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-[#5a189a] border border-[#7785ac] rounded-lg shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold text-zinc-200">Launch</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-indigo-800 bg-indigo-200">
              4
            </p>
          </div>
          <p className="text-sm text-zinc-300">
            Ready to make an entrance? Publish your site whenever you&apos;re
            prepared to wow.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Steps;

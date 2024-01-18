import React, { useState } from "react";
import Simple from "../Tabs/Simple";
import Speedy from "../Tabs/Speedy";
import Easy from "../Tabs/Easy";

const FeaturesSec = () => {
  const [activeTab, setActiveTab] = useState(1);

  const toggletab = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="font-[Rubik] my-[7rem]">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[1.9rem] font-[500] text-Very-Dark-Blue">
          Features
        </h2>
        <p className="my-[0.8rem] text-Faded-Very-Dark-Blue text-[1rem] leading-[1.6rem] mx-[1.5rem] lg:mx-[2.5rem] text-center lg:w-2/6 lg:tracking-wide lg:leading-relaxed lg:text-[1.2rem] xl:text-[1.3rem] md:w-4/6">
          Our aim is to make it quick and easy for you to access our favourites
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>

        <div className="flex-col md:flex-row mx-auto text-center mt-[1rem] mb-[2rem] lg:flex xl:flex border-spacing-y-[1.5rem] border-Faded-Very-Dark-Blue lg:border-b gap-[6rem]">
          <div className="my-5">
            <h2
              onClick={() => toggletab(1)}
              className={`${
                activeTab === 1 ? "underline decoration-4 decoration-Soft-Red underline-offset-[0.5rem] md:underline-offset-[0.8rem] lg:underline-offset-[1.45rem] xl:underline-offset-[1.45rem] cursor-pointer" : "cursor-pointer text-Faded-Very-Dark-Blue"
              }`}
            >
              Simple Bookmarking
            </h2>
          </div>
          <div className="my-5 ">
            <h2
              onClick={() => toggletab(2)}
              className={`${
                activeTab === 2 ? "underline decoration-4 decoration-Soft-Red underline-offset-[0.5rem] cursor-pointer md:underline-offset-[0.8rem] lg:underline-offset-[1.45rem] xl:underline-offset-[1.45rem]" : "cursor-pointer text-Faded-Very-Dark-Blue"
              }`}
            >
              Speedy Searching
            </h2>
          </div>
          <div className="my-5">
            <h2
              onClick={() => toggletab(3)}
              className={`${
                activeTab === 3 ? "underline decoration-4 decoration-Soft-Red underline-offset-[0.5rem] cursor-pointer md:underline-offset-[0.8rem] lg:underline-offset-[1.45rem] xl:underline-offset-[1.45rem]" : "cursor-pointer text-Faded-Very-Dark-Blue"
              }`}
            >
              Easy Sharing
            </h2>
          </div>
        </div>

        <div className="flex mx-[5rem] lg:py-[3rem]">
          <div className={activeTab === 1 ? "flex " : "hidden"}>
            <Simple />
          </div>

          <div className={activeTab === 2 ? "flex" : "hidden"}>
            <Speedy />
          </div>

          <div className={activeTab === 3 ? "flex" : "hidden"}>
            <Easy />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSec;

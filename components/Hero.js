import React, { useEffect } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";
import '../styles/Home.module.css'

export default function Hero() {
  const colors = ["#fb7185", "#eab308", "#60a5fa", "#3B82F6"];
  
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">

      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true} className="intro">
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-8xl font-bold italic text-gray-700 dark:text-gray-200 my-2">
              Developer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-4xl md:text-8xl font-bold italic text-gray-700 dark:text-gray-200 my-2">
              Programmer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className="text-4xl md:text-8xl font-bold italic text-gray-700 dark:text-gray-200 my-2">
              Creator.
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      <div className="lg:block relative w-full md:w-1/2 -mr-40 mt-20">
      <div>
          <div className="w-3/4 shadow-2xl">
            <img src={userData.avatarUrl} alt="avatar" className="avatar-img"/>
            <div className="flex flex-row justify-between mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
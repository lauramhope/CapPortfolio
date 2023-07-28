import userData from "@constants/data";
import React from "react";

export default function Education() {
  return (
    <section className="bg-blue-100 bg-opacity-60 dark:bg-gray-700">
      <div className="max-w-6xl mx-auto h-48 bg-blue-100 bg-opacity-5 dark:bg-gray-700">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left relative z-10">
            Education
        </h1>
      </div>
      <div className="bg-gray-50 min-h-screen flex items-center justify-center px-16 dark:bg-gray-700">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="bg-gray-100 bg-opacity-10 dark:bg-gray-700 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-500 max-w-xl mx-auto pt-20 -px-1">
          {userData.education.map((exp, ind) => (
            <>
              <EducationCard
                key={ind}
                diploma={exp.diploma}
                desc={exp.desc}
                year={exp.year}
                program={exp.program}
                link={exp.link}
              />
              {ind === userData.education.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-pink-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-pink-500 rounded-full relative z-10"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-400 dark:bg-gray-700 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
}

const EducationCard = ({ diploma, desc, year, program, link }) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-400 font-bold dark:text-white">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{diploma}</h1>
      <p className="text-gray-500">{program}</p>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
      <a
        href={link}
        className="text-blue-500 inline-flex items-center font-semibold"
      >{program}</a>
    </div>
  );
};



/* <section className="bg-blue-100 bg-opacity-60 dark:bg-gray-700">
<div className="max-w-6xl mx-auto h-48 bg-blue-100 bg-opacity-5 dark:bg-gray-700">
  <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
    Education
  </h1>
</div>
<div className="bg-gray-100 bg-opacity-70 dark:bg-gray-700 -mt-4">
  <div className="grid grid-cols-1 dark:bg-gray-500 max-w-xl mx-auto pt-20">
    {userData.education.map((exp, ind) => (
      <>
        <EducationCard
          key={ind}
          diploma={exp.diploma}
          desc={exp.desc}
          year={exp.year}
          program={exp.program}
          link={exp.link}
        />
        {ind === userData.education.length - 1 ? null : (
          <div className="divider-container flex flex-col items-center -mt-2">
            <div className="w-4 h-4 bg-pink-500 rounded-full relative z-10">
              <div className="w-4 h-4 bg-pink-500 rounded-full relative z-10 animate-ping"></div>
            </div>
            <div className="w-1 h-24 bg-gray-400 dark:bg-gray-700 rounded-full -mt-2"></div>
          </div>
        )}
      </>
    ))}
  </div>
</div>
</section>
);
} */

// const EducationCard = ({ diploma, desc, year, program, link }) => {
// return (
// <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
// <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-400 font-bold dark:text-white">
//   {year}
// </h1>
// <h1 className="font-semibold text-xl">{diploma}</h1>
// <p className="text-gray-500">{program}</p>
// <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
// <a
//   href={link}
//   className="text-blue-500 inline-flex items-center font-semibold"
// >{program}</a>
// </div>
// );
// };
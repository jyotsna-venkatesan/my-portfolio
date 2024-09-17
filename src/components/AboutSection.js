import React from "react";
import {
  CodeBracketIcon,
  UserGroupIcon,
  CameraIcon,
  PencilSquareIcon,
  ComputerDesktopIcon,
  BeakerIcon,
  CogIcon,
} from "@heroicons/react/20/solid";

export default function AboutSection() {
  return (
    <div className="relative isolate overflow-hidden bg-primary-dark py-24 sm:py-32">
      <div
        className="absolute inset-0 -z-10 bg-repeat opacity-20 hidden md:block"
        style={{
          backgroundImage: "url('AboutBgDoodle.png')",
          backgroundSize: "100% 100%", // Adjust size as needed
        }}
      ></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:grid-cols-2 lg:gap-x-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-text-bg">
                  Who is Jyotsna??
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-background sm:text-8xl">
                  <span>About Me</span>
                </h1>
                <p className="mt-6 text-xl font-semibold leading-8 text-background">
                  Jyotsna Venkatesan
                </p>
                <p className="text-xl font-semibold leading-8 text-background">
                  venkatesanjyotsna@gmail.com
                </p>
                <p className="text-xl font-semibold leading-8 text-background">
                  +852 97753135
                </p>
              </div>
            </div>
          </div>
          <div className="lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <div className="relative">
              <h2 className="text-2xl font-bold text-text-bg mb-6 text-center">
                If I were a picture...
              </h2>
              <div className="space-y-8 flex flex-col items-center">
                <img
                  alt="Ship in ocean"
                  src="/JyotsAsAPicture1.jpg"
                  className="w-5/6 rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
                />
                <img
                  alt="Jyotsna in Saizeriya"
                  src="/ProfilePicture.jpg"
                  className="w-5/6 rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
                />
                <img
                  alt="Greenery in India"
                  src="/JyotsAsAPicture2.jpg"
                  className="w-5/6 rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:grid-cols-2 lg:gap-x-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-background lg:max-w-lg">
                <p>
                  I am a third-year Computer Science student from India with a
                  minor in Business Economics. I am particularly passionate
                  about Software Engineering. My goal is to bring innovation to
                  life and use my skills to create something truly meaningful.
                </p>
                <div className="mt-8 relative">
                  <h2 className="text-2xl font-bold text-background mb-4">
                    My Experience Journey
                  </h2>
                </div>
                <ul className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <CodeBracketIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-text-bg"
                    />
                    <span className="text-background">
                      <strong className="font-bold text-background">
                        Jun 2021 - Jul 2021
                      </strong>{" "}
                      Front-end Web Developer at Sleep Deprived Dreamers
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <UserGroupIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-text-bg"
                    />
                    <span className="text-background">
                      <strong className="font-bold text-background">
                        May 2021 - Aug 2021
                      </strong>{" "}
                      Founding Developer and Moderator at Auxiliors
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CameraIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-text-bg"
                    />
                    <span className="text-background">
                      <strong className="font-bold text-background">
                        Apr 2021 - May 2022
                      </strong>{" "}
                      Digital Media Creator at AInspire
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <PencilSquareIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-text-bg"
                    />
                    <span className="text-background">
                      <strong className="font-bold text-background">
                        Feb 2023 - Apr 2023
                      </strong>{" "}
                      Student Assistant at CLP
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CodeBracketIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-text-bg"
                    />
                    <span className="text-background">
                      <strong className="font-bold text-background">
                        Jun 2023 - Aug 2023
                      </strong>{" "}
                      Web/ Front-End Developer Intern at Oxbridge Economics
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ComputerDesktopIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-text-bg"
                    />
                    <span className="text-background">
                      <strong className="font-bold text-background">
                        Feb 2024 - May 2034
                      </strong>{" "}
                      UI/UX Designer at PolyU Smart Cities Research Institute
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <BeakerIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-text-bg"
                    />
                    <span className="text-background">
                      <strong className="font-bold text-background">
                        Jun 2024 - Aug 2024
                      </strong>{" "}
                      Quality Assurance Intern at GoGoX
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CogIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-text-bg"
                    />
                    <span className="text-background">
                      <strong className="font-bold text-background">
                        Sep 2024 - Present
                      </strong>{" "}
                      QA Automation Intern at GoGoX
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

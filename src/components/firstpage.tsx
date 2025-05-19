// src/pages/LandingPage.tsx
import React, { useRef, useState } from "react";

const LandingPage: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isCancel, setisCancel] = useState<boolean>(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleToggleVideo = () => {
    if (!videoRef.current) return;
    if (isVideoPaused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsVideoPaused(!isVideoPaused);
  };

  return isCancel ? (
    <div>
      <header className="stiky inset-x-0 top-0 z-50  transition-all duration-300 ease-in-out bg-white ">
        <div className="mx-auto flex h-full w-full max-w-screen-xl items-center justify-between px-6 py-4">
          <div className="flex flex-1 items-center">
            <a className="pointer-events-auto inline-block" href="/">
              <img src="./../../public/vite.svg" width="24" height="24" />
              Chatbase
            </a>
          </div>
          <button className= " right-4 rounded-full bg-blue-500 p-2 opacity-90 transition-opacity md:p-3 group-hover:opacity-100" onClick={()=>setisCancel(!isCancel)}>
            Back
          </button>

        </div>
      </header>
      <div className="flex flex-col mt-5 px-5 py-4 bg-amber-200 rounded-lg text-pink-500 text-center">Guide</div>
      <div className="flex flex-col mt-1 px-5 py-4 bg-amber-200 rounded-lg text-pink-500 text-center ">Blog</div>
      <div className="flex flex-flex flex-col mt-1 px-5 py-4 bg-amber-200 rounded-lg text-pink-500 text-center ">Docs</div>
      <div className="flex flex-flex flex-col mt-1 px-5 py-4 bg-amber-200 rounded-lg text-pink-500 text-center ">ChangeLog</div>
    </div>
  ) : (
    <div className="App">
      <header className="stiky inset-x-0 top-0 z-50  transition-all duration-300 ease-in-out bg-white ">
        <div className="mx-auto flex h-full w-full max-w-screen-xl items-center justify-between px-6 py-4">
          <div className="flex flex-1 items-center">
            <a className="pointer-events-auto inline-block" href="/">
              <img src="./../../public/vite.svg" width="24" height="24" />
              Chatbase
            </a>
          </div>
          <div className="hidden flex-1 items-center justify-center gap-14 font-bold text-sm text-zinc-950 leading-6 lg:flex">
            <a href="/">Affiliates</a>
            <a href="/">Pricing</a>
            <nav className="relative z-10 flex max-w-max flex-1 items-center justify-center">
              <div className="relative">
                <button
                  onMouseEnter={() => setIsActive(true)}
                  onMouseLeave={() => setIsActive(false)}
                >
                  Resources
                </button>
                {isActive && (
                  <ul className="absolute group flex flex-1 flex-col list-none items-center justify-center space-x-1 ">
                    <li>
                      <button className=" group inline-flex w-max items-center justify -center rounded-md transition-colors hover:text-zinc-900">
                        Guide
                      </button>
                    </li>
                    <li>
                      <button className=" group inline-flex w-max items-center justify -center rounded-md transition-colors hover:text-zinc-900">
                        Blog
                      </button>
                    </li>
                    <li>
                      <button className=" group inline-flex w-max items-center justify -center rounded-md transition-colors hover:text-zinc-900">
                        Docs
                      </button>
                    </li>
                    <li>
                      <button className=" group inline-flex w-max items-center justify -center rounded-md transition-colors hover:text-zinc-900">
                        ChangeLog
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </nav>
          </div>
          <div className="hidden flex-1 items-center justify-end lg:flex">
            <div className="fade-in animate-in transition-opacity">
              <a
                href="/"
                className=" font-bold text-sm text-zinc 900 px-3 py-2"
              >
                Sign in
              </a>
              <a
                href="/"
                className="ml-4 rounded-md bg-blue-400 px-3 py-2 font-bold"
              >
                Try for Free
              </a>
            </div>
          </div>
          <div className="lg:hidden">
            <button
              className=" outline-2 outline-offset-2 outline-pink-500 flex mt-2 px-2 py-3 bg-red-500 md:rounded-lg
          rounded-full"
              onClick={() => setisCancel(!isCancel)}
            >
              <p className="text-15px text-yellow-200">more...</p>
            </button>
          </div>
        </div>
      </header>
      <div className="relative flex min-h-[86.1vh] flex-col justify-between overflow-x-clip scroll-smooth md:overflow-y-visible">
        <div className="isolate flex flex-col gap-12 overflow-scroll bf-zinc-50">
          <div className="relative w-full flex-col gap-12 overflow-hidden bg-white py-10">
            <section className="mx-auto flex max-w-screen-xl px-6 relative w-full flex-col gap-12 overflow-hidden bg-white py-0">
              <div className="grid container relative mx-auto items-center gap-6 px-4 lg:grid-cols-2">
                <div className="flex flex-col gap-6">
                  <h1 className="font-medium text-[42px] text-zinc-950 leading -[2.9rem] lg:text-5xl lg:text-[4.4rem] lg:leading-[5rem]">
                    AI Agents for magical customer experience
                  </h1>
                  <p className="text-[16px] text-zinc-900 lg:w-[90%] md:text-xl">
                    Chatbase is the complete platform for building & deploying
                    AI Agents for your business to handle customr supports &
                    drive more revenue
                  </p>
                  <div className="mt-2 flex flex-col gap-4 md:flex-row md:items-center">
                    <div className="relative mb-2 inline-block">
                      <button className="items-center justify-center font-medium">
                        Build your agent
                      </button>
                    </div>
                    <div className="flex items-center gap-2  font-medium text-sm text-zinc-700">
                      No credit card required
                    </div>
                  </div>
                </div>
                <div className="group relative aspect-[0.939] w-full overflow-hidden">
                  <video
                    className="aspect-[0.939] w-full rounded-3xl object-contain block cursor-pointer"
                    src="https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/hero/hero.webm"
                    preload="metadata"
                    poster="https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/hero/hero-thumbnail.png"
                    playsInline
                    muted
                    loop
                    autoPlay
                    ref={videoRef}
                  >
                    Your browser does not support the video tag. Please try
                    viewing this page in a modern browser.
                  </video>
                  <button
                    className="absolute bottom-4 left-4 rounded-full bg-black/65 p-2 opacity-90 transition-opacity md:p-3 group-hover:opacity-100"
                    onClick={handleToggleVideo}
                  >
                    Click here
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center gap-6 lg:flex-row">
                <p className="font-medium text-lg">
                  <span className=" font-bold text-primary">
                    Trusted by 9000+
                  </span>
                  <span>business worldwide</span>
                </p>
                <div className="mt-2 flex flex-row gap-4 md:flex-row md:items-center">
                  <div className="mb-2">
                    <div className="flex items-center justify-center gap-4 flex-wrap bottom-2 h-4 w-full rounded-b-lg ">
                      <button className="flex items-center justify-center whitespace-nowrap font-medium">
                        postman
                      </button>
                      <button className="flex items-center justify-center whitespace-nowrap font-medium">
                        alias
                      </button>
                      <button className="flex items-center justify-center whitespace-nowrap font-medium">
                        youtube
                      </button>
                      <button className="flex items-center justify-center whitespace-nowrap font-medium">
                        reactjs
                      </button>
                      <button className="flex items-center justify-center whitespace-nowrap font-medium">
                        console
                      </button>
                      <button className="flex items-center justify-center whitespace-nowrap font-medium">
                        bootstraps
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;

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
          <button
            className=" right-4 rounded-full bg-blue-500 p-2 opacity-90 transition-opacity md:p-3 group-hover:opacity-100"
            onClick={() => setisCancel(!isCancel)}
          >
            Back
          </button>
        </div>
      </header>
      <div className="flex flex-col mt-5 px-5 py-4 bg-amber-200 rounded-lg text-pink-500 text-center">
        Guide
      </div>
      <div className="flex flex-col mt-1 px-5 py-4 bg-amber-200 rounded-lg text-pink-500 text-center ">
        Blog
      </div>
      <div className="flex flex-flex flex-col mt-1 px-5 py-4 bg-amber-200 rounded-lg text-pink-500 text-center ">
        Docs
      </div>
      <div className="flex flex-flex flex-col mt-1 px-5 py-4 bg-amber-200 rounded-lg text-pink-500 text-center ">
        ChangeLog
      </div>
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
      <div className="relative flex min-h-[86.1vh] flex-col justify-between md:overflow-y-visible">
        <div className="isolate flex flex-col gap-12  bf-zinc-50">
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
                  <div className="mt-2 flex flex-col gap-8 md:flex-row md:items-center">
                    <div className="relative mb-2 inline-block">
                      <button className="items-center bg-zinc-900 text-white justify-center font-medium px-6 py-4 rounded-full">
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
                    type="button"
                    className="absolute bottom-4 left-4 rounded-full bg-black/25 p-2 opacity-90 transition-opacity md:p-3 group-hover:opacity-100"
                    onClick={handleToggleVideo}
                  >
                    <svg
                      className="-rotate-90 absolute top-0 left-0 h-full w-full"
                      viewBox="0 0 32 32"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="white"
                      stroke="currentColor"
                      stroke-width="0"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-play relative h-4 w-4 md:h-6 md:w-6"
                    >
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
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
                <div className="relative overflow-x-hidden md:overflow-x-visible">
                  <div className="hidden flex-row items-center gap-4 md:flex">
                    <img
                      width="144"
                      height="48"
                      className="w-auto"
                      src="https://www.chatbase.co/_next/static/media/2.979f5eb2.svg"
                    />
                    <img
                      width="129"
                      height="48"
                      className="w-auto"
                      src="https://www.chatbase.co/_next/static/media/3.af1bc48a.svg"
                    />
                    <img
                      width="76"
                      height="48"
                      className="w-auto"
                      src="https://www.chatbase.co/_next/static/media/4.fff2ca29.svg"
                    />
                    <img
                      width="129"
                      height="48"
                      className="w-auto"
                      src="https://www.chatbase.co/_next/static/media/0.7eb72cbd.svg"
                    />
                    <img
                      width="105"
                      height="48"
                      className="w-auto"
                      src="https://www.chatbase.co/_next/static/media/0.7eb72cbd.svg"
                    />
                    <img
                      width="128"
                      height="48"
                      className="w-auto"
                      src="https://www.chatbase.co/_next/static/media/5.6b017c6f.svg"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <section className="mx-auto flex w-full max-w-screen-xl px-6">
        <div className="flex flex-col gap-4 py-12">
          <div className="flex flex-col items-start gap-4">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 font-medium text-sm border border-zinc-200 bg-white text-zinc-950">
              <div className="mr-2 size-2 rounded-full bg-gradient-to-r from-[#FB923C] via-[#F472B6] to-[#E879F9]"></div>
              Hightligths
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:gap-10">
              <h2 className="font-medium text-4xl text-zinc-950 tracking-tight lg:text-5xl">
                The complete platform for AI support agents
              </h2>
              <p className="max-w-[600px] text-lg text-zinc-500">
                Chatbase is designed for building AI support agents that solve
                your customers' hardest problems while improving business
                outcomes.
              </p>
            </div>
          </div>
          <div className="grid gap-6 pt-8 lg:grid-cols-3 md:grid-cols-2">
            <div className="relatvie flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-all duration-300 hover:border-zinc-300">
              <img
                width="784"
                height="800"
                src="https://www.chatbase.co/_next/image?url=https%3A%2F%2Fbackend.chatbase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fchatbase%2Flanding%2Fhighlights%2Fpurpose-built-for-llms.png&w=828&q=75&dpl=dpl_9XRftHWdiowZsxMZqnpC3jWw71zh"
              />
              <div className="space-y-2 px-6 pb-6">
                <h3 className="font-semibold text-xl text-zinc-950">
                  Purpose-built for LLMs
                </h3>
                <p className="text-base text-zinc-500">
                  Language models with reasoning capabilities for effective
                  responses to complex queries.
                </p>
              </div>
            </div>
            <div className="relatvie flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-all duration-300 hover:border-zinc-300 ">
              <img
                width="784"
                height="800"
                src="https://www.chatbase.co/_next/image?url=https%3A%2F%2Fbackend.chatbase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fchatbase%2Flanding%2Fhighlights%2Fdesigned-for-simplicity.png&w=828&q=75&dpl=dpl_9XRftHWdiowZsxMZqnpC3jWw71zh"
              />
              <div className="space-y-2 px-6 pb-6">
                <h3 className="font-semibold text-xl text-zinc-950">
                  Designed for simplicity
                </h3>
                <p className="text-base text-zinc-500">
                  Create, manage, and deploy AI Agents easily, even without
                  technical skills.
                </p>
              </div>
            </div>
            <div className="relatvie flex lg:col-span-1 md:col-span-2 overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-all duration-300 hover:border-zinc-300 ">
              <img
                width="784"
                height="800"
                src="https://www.chatbase.co/_next/image?url=https%3A%2F%2Fbackend.chatbase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fchatbase%2Flanding%2Fhighlights%2Fengineered-for-security.png&w=828&q=75&dpl=dpl_9XRftHWdiowZsxMZqnpC3jWw71zh"
              />
              <div className="space-y-2 px-6 pb-6">
                <h3 className="font-semibold text-xl text-zinc-950">
                  Engineered for security
                </h3>
                <p className="text-base text-zinc-500">
                  Enjoy peace of mind with robust encryption and strict
                  compliance standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto flex w-full max-w-screen-xl px-6">
        <div className="flex flex-col gap-4 py-12">
          <div className="flex flex-col items-start gap-4">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 font-medium text-sm border border-zinc-200 bg-white text-zinc-950">
              <div className="mr-2 size-2 rounded-full bg-gradient-to-r from-[#FB923C] via-[#F472B6] to-[#E879F9]"></div>
              How it works
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:gap-10">
              <h2 className="font-medium text-4xl text-zinc-950 tracking-tight lg:text-5xl">
                An end-to-end solution for conversational AI
              </h2>
              <p className="max-w-[600px] text-lg text-zinc-500">
                With Chatbase, your customers can effortlessly find answers,
                resolve issues, and take meaningful actions through seamless and
                engaging AI-driven conversations.
              </p>
            </div>
            <div className="grid container relative mx-auto items-center gap-6 px-4 lg:grid-cols-2">
              <div className="hidden self-center md:block">
                <div className="flex items-center justify-start">
                  <div className="flex w-full max-w-[530px] flex-col gap-2">
                    <button className="w-full rounded-2xl p-6 text-left transition-all duration-300 border border-zinc-200 bg-white opacity-100">
                      <div className="flex items-start gap-4">
                        <span className="font-medium text-lg transition-colors duration-300 bg-gradient-to-r from-[#FB923C] to-[#F472B6] bg-clip-text text-transparent transition:color 0s">
                          01
                        </span>
                        <div className="flex-1">
                          <h3 className="font-medium text-lg transition-colors duration-300 text-zinc-950">
                            Build &amp; deploy your agent
                          </h3>
                          <p className="text-zinc-500 height:auto;opacity:1; margin-top:8px">
                            Train an agent on your business data, configure the
                            actions it can take, then deploy it for your
                            customers.
                          </p>
                        </div>
                      </div>
                    </button>
                    <button className="w-full rounded-2xl p-6 text-left transition-all duration-300 bg-transparent opacity:0.6 ">
                      <div className="flex items-start gap-4">
                        <span className="font-medium text-lg transition-colors duration-300 text-zinc-400 transition:color 0s">
                          02
                        </span>
                        <div className="flex-1">
                          <h3 className="font-medium text-lg transition-colors duration-300 text-zinc-400">
                            Agent solves your customers' problems{" "}
                          </h3>
                        </div>
                      </div>
                    </button>
                    <button className="w-full rounded-2xl p-6 text-left transition-all duration-300 bg-transparent opacity:0.6 ">
                      <div className="flex items-start gap-4">
                        <span className="font-medium text-lg transition-colors duration-300 text-zinc-400 transition:color 0s">
                          03
                        </span>
                        <div className="flex-1">
                          <h3 className="font-medium text-lg transition-colors duration-300 text-zinc-400">
                            Refine&Optimize
                          </h3>
                        </div>
                      </div>
                    </button>
                    <button className="w-full rounded-2xl p-6 text-left transition-all duration-300 bg-transparent opacity:0.6 ">
                      <div className="flex items-start gap-4">
                        <span className="font-medium text-lg transition-colors duration-300 text-zinc-400 transition:color 0s">
                          04
                        </span>
                        <div className="flex-1">
                          <h3 className="font-medium text-lg transition-colors duration-300 text-zinc-400">
                            Route complex issues to a human{" "}
                          </h3>
                        </div>
                      </div>
                    </button>
                    <button className="w-full rounded-2xl p-6 text-left transition-all duration-300 bg-transparent opacity:0.6 ">
                      <div className="flex items-start gap-4">
                        <span className="font-medium text-lg transition-colors duration-300 text-zinc-400 transition:color 0s">
                          05
                        </span>
                        <div className="flex-1">
                          <h3 className="font-medium text-lg transition-colors duration-300 text-zinc-400">
                            Review Analytics@insights{" "}
                          </h3>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="group relative aspect-[0.939] w-full overflow-hidden">
                <video
                  className="aspect-[0.939] w-full rounded-3xl object-contain block cursor-pointer"
                  src="https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/how-it-works/build-and-deploy.webm"
                  preload="metadata"
                  poster="https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/how-it-works/build-and-deploy-thumbnail.png"
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
                  type="button"
                  className="absolute bottom-4 left-4 rounded-full bg-black/25 p-2 opacity-90 transition-opacity md:p-3 group-hover:opacity-100"
                  onClick={handleToggleVideo}
                >
                  <svg
                    className="-rotate-90 absolute top-0 left-0 h-full w-full"
                    viewBox="0 0 32 32"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                    stroke="currentColor"
                    stroke-width="0"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-play relative h-4 w-4 md:h-6 md:w-6"
                  >
                    <polygon points="6 3 20 12 6 21 6 3"></polygon>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto flex w-full max-w-screen-xl px-6">
        <div className="flex flex-col gap-4 py-12">
          <div className="flex flex-col items-start gap-4">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 font-medium text-sm border border-zinc-200 bg-white text-zinc-950">
              <div className="mr-2 size-2 rounded-full bg-gradient-to-r from-[#FB923C] via-[#F472B6] to-[#E879F9]"></div>
              Features
            </div>
            <h2 className="font-medium text-4xl text-zinc-950 tracking-tight lg:text-5xl">
              Build the perfect customer-facing AI agent
            </h2>
            <p className="max-w-[800px] text-lg text-zinc-500">
              Chatbase gives you all the tools you need to train your perfect AI
              agent and connect it to your systems.
            </p>
          </div>
          <div className="grid gap-8 py-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                <div className="w-full rouned-2xl px-4 pt-4">
                  <img
                    width="1216"
                    height="696"
                    src="https://www.chatbase.co/_next/image?url=https%3A%2F%2Fbackend.chatbase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fchatbase%2Flanding%2Ffeatures%2Fsync-with-realtime-data.png&w=1920&q=75&dpl=dpl_9XRftHWdiowZsxMZqnpC3jWw71zh"
                  />
                </div>
                <div className="flex flex-col gap-2 px-5 pb-5">
                  <h3 className="font-medium text-lg text-zinc-800 leading-[21.78px] tracking-[-0.02em]">
                    Sync with real-time data
                  </h3>
                  <p className="text-[14px] text-zinc-600 leading-[22px] tracking-[-0.02em]">
                    Connect your agent to systems like order management tools,
                    CRMs, and more to seamlessly access data ranging from order
                    details to active subscriptions and beyond.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                <div className="w-full rouned-2xl px-4 pt-4">
                  <img
                    width="1216"
                    height="696"
                    src="https://www.chatbase.co/_next/image?url=https%3A%2F%2Fbackend.chatbase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fchatbase%2Flanding%2Ffeatures%2Ftake-actions-on-your-systems.png&w=1920&q=75&dpl=dpl_9XRftHWdiowZsxMZqnpC3jWw71zh"
                  />
                </div>
                <div className="flex flex-col gap-2 px-5 pb-5">
                  <h3 className="font-medium text-lg text-zinc-800 leading-[21.78px] tracking-[-0.02em]">
                    Take actions on your systems
                  </h3>
                  <p className="text-[14px] text-zinc-600 leading-[22px] tracking-[-0.02em]">
                    Configure actions that your agent can perform within your
                    systems or through one of our integrations, like updating a
                    customer's subscription or changing their address.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                <div className="w-full rouned-2xl px-4 pt-4">
                  <img
                    width="794"
                    height="696"
                    src="https://www.chatbase.co/_next/image?url=https%3A%2F%2Fbackend.chatbase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fchatbase%2Flanding%2Ffeatures%2Fcompare-ai-models.png&w=828&q=75&dpl=dpl_9XRftHWdiowZsxMZqnpC3jWw71zh"
                  />
                </div>
                <div className="flex flex-col gap-2 px-5 pb-5">
                  <h3 className="font-medium text-lg text-zinc-800 leading-[21.78px] tracking-[-0.02em]">
                    Compare AI models
                  </h3>
                  <p className="text-[14px] text-zinc-600 leading-[22px] tracking-[-0.02em]">
                    Experiment with various models and configurations to make
                    sure you have the best setup for your use case.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                <div className="w-full rouned-2xl px-4 pt-4">
                  <img
                    width="794"
                    height="696"
                    src="https://www.chatbase.co/_next/image?url=https%3A%2F%2Fbackend.chatbase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fchatbase%2Flanding%2Ffeatures%2Fsmart-escalation.png&w=828&q=75&dpl=dpl_9XRftHWdiowZsxMZqnpC3jWw71zh"
                  />
                </div>
                <div className="flex flex-col gap-2 px-5 pb-5">
                  <h3 className="font-medium text-lg text-zinc-800 leading-[21.78px] tracking-[-0.02em]">
                    Smart escalation
                  </h3>
                  <p className="text-[14px] text-zinc-600 leading-[22px] tracking-[-0.02em]">
                    Give your agent instructions in natural language on when to
                    escalate queries to a human agents.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                <div className="w-full rouned-2xl px-4 pt-4">
                  <img
                    width="794"
                    height="696"
                    src="https://www.chatbase.co/_next/image?url=https%3A%2F%2Fbackend.chatbase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fchatbase%2Flanding%2Ffeatures%2Fadvanced-reporting.png&w=828&q=75&dpl=dpl_9XRftHWdiowZsxMZqnpC3jWw71zh"
                  />
                </div>
                <div className="flex flex-col gap-2 px-5 pb-5">
                  <h3 className="font-medium text-lg text-zinc-800 leading-[21.78px] tracking-[-0.02em]">
                    Advanced reporting
                  </h3>
                  <p className="text-[14px] text-zinc-600 leading-[22px] tracking-[-0.02em]">
                    Gain insights and optimize agent performance with detailed
                    analytics.
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden  rounded-3xl border border-zinc-200 bg-white">
              <div className=" hidden md:flex md:items-start md:justify-between md:p-8 md:pr-0">
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium text-lg text-zinc-800 leading-[21.78px] tracking-[-0.02em]">
                    Works with your tools
                  </h3>
                  <p className="max-w-[400px] text-[14px] text-zinc-600 leading-[22px] tracking-[-0.02em]">
                    Integrate diverse data sources to enrich your agent's
                    knowledge and capabilities.
                  </p>
                </div>
                <div className="relative flex flex-col gap-3 overflow-x-auto max-h-[180px] max-w-[60%] lg:overflow-hidden">
                  <div className="flex gap-3">
                    <div className="inline-flex h-10 flex-shrink-0 items-center gap-2 rounded-full bg-zinc-100 p-1">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white transition-colors hover:border-zinc-300">
                        <img
                          src="https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/features/integrations/make.png"
                          className="h-8 w-8"
                        />
                      </div>
                      <div className="pr-2 font-medium text-sm text-zinc-800">
                        Make
                      </div>
                    </div>
                    <div className="inline-flex h-10 flex-shrink-0 items-center gap-2 rounded-full bg-zinc-100 p-1">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white transition-colors hover:border-zinc-300">
                        <img
                          src="https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/features/integrations/zendesk.png"
                          className="h-8 w-8"
                        />
                      </div>
                      <div className="pr-2 font-medium text-sm text-zinc-800">
                        Zendesk
                      </div>
                    </div>
                    <div className="inline-flex h-10 flex-shrink-0 items-center gap-2 rounded-full bg-zinc-100 p-1">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white transition-colors hover:border-zinc-300">
                        <img
                          src="https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/features/integrations/notion.png"
                          className="h-8 w-8"
                        />
                      </div>
                      <div className="pr-2 font-medium text-sm text-zinc-800">
                        Notion
                      </div>
                    </div>
                    <div className="inline-flex h-10 flex-shrink-0 items-center gap-2 rounded-full bg-zinc-100 p-1">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white transition-colors hover:border-zinc-300">
                        <img
                          src="https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/features/integrations/slack.png"
                          className="h-8 w-8"
                        />
                      </div>
                      <div className="pr-2 font-medium text-sm text-zinc-800">
                        Slack
                      </div>
                    </div>
                    <div className="inline-flex h-10 flex-shrink-0 items-center gap-2 rounded-full bg-zinc-100 p-1">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white transition-colors hover:border-zinc-300">
                        <img
                          src="https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/features/integrations/stripe.png"
                          className="h-8 w-8"
                        />
                      </div>
                      <div className="pr-2 font-medium text-sm text-zinc-800">
                        Stripe
                      </div>
                    </div>
                    <div className="inline-flex h-10 flex-shrink-0 items-center gap-2 rounded-full bg-zinc-100 p-1">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white transition-colors hover:border-zinc-300">
                        <img
                          src="https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/features/integrations/salesforce.png"
                          className="h-8 w-8"
                        />
                      </div>
                      <div className="pr-2 font-medium text-sm text-zinc-800">
                        Salesforce
                      </div>
                    </div>
                  </div>
                  <div className="ml-8 flex gap-3">
                    <div className="w-[100px] flex-shrink-0">
                      <div className="flex h-8 w-[100px] transition-colors">
                        <img
                          src="https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/features/integrations/green-cloud.png"
                          className="h-8 w-100px object-cover"                         />
                      </div>
                    </div>
                    <div className="inline-flex h-10 flex-shrink-0 items-center gap-2 rounded-full bg-zinc-100 p-1">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white transition-colors hover:border-zinc-300">
                        <img
                          src="https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/features/integrations/calendly.png"
                          className="h-8 w-8"
                        />
                      </div>
                      <div className="pr-2 font-medium text-sm text-zinc-800">
                      Calendly
                      </div>
                    </div>
                    <div className="inline-flex h-10 flex-shrink-0 items-center gap-2 rounded-full bg-zinc-100 p-1">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white transition-colors hover:border-zinc-300">
                        <img
                          src="https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/features/integrations/cal.png"
                          className="h-8 w-8"
                        />
                      </div>
                      <div className="pr-2 font-medium text-sm text-zinc-800">
                      Cal
                      </div>
                    </div>
                    <div className="inline-flex h-10 flex-shrink-0 items-center gap-2 rounded-full bg-zinc-100 p-1">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white transition-colors hover:border-zinc-300">
                        <img
                          src="https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/features/integrations/whatsapp.png"
                          className="h-8 w-8"
                        />
                      </div>
                      <div className="pr-2 font-medium text-sm text-zinc-800">
                      Whatsapp
                      </div>
                    </div>
                    <div className="inline-flex h-10 flex-shrink-0 items-center gap-2 rounded-full bg-zinc-100 p-1">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white transition-colors hover:border-zinc-300">
                        <img
                          src="https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/features/integrations/messenger.png"
                          className="h-8 w-8"
                        />
                      </div>
                      <div className="pr-2 font-medium text-sm text-zinc-800">
                      Messenger
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default LandingPage;

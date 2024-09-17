"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact Me!", href: "#contact" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const arrow = document.querySelector(".animate-bounce");
      if (arrow) {
        if (window.scrollY > 100) {
          arrow.style.display = "none";
        } else {
          arrow.style.display = "block";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-background font-sans min-h-screen flex flex-col">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex-1 lg:flex-none">
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-text"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-text relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-light origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </a>
            ))}
          </div>
          <div className="flex-1 lg:flex-none"></div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-text/10">
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-text"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-text/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text hover:bg-secondary"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8 w-full">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-secondary-accent opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-text sm:text-8xl">
                <span className="italic">Hello</span>,{" "}
                <span className="text-primary-light relative inline-block">
                  I'm Jyotsna{" "}
                </span>
              </h1>
              <p className="mt-6 text-[16px] leading-8 text-text-light font-semibold">
                A CS Student at the Hong Kong Polytechnic University
              </p>
              <div className="mt-4 text-sm leading-6 text-text sm:text-2xl">
                <span className="relative inline-block px-4">
                  <span
                    className="relative z-10 inline-block"
                    style={{ transform: "rotate(-1deg)" }}
                  >
                    console.log("Building code that's as functional as it is
                    beautiful");
                  </span>
                  <span
                    className="absolute bg-primary opacity-20 z-0"
                    style={{
                      transform: "rotate(-1deg) skew(-12deg)",
                      top: "0.0em",
                      bottom: "-0.1em",
                      left: "-0.5em",
                      right: "-0.5em",
                    }}
                  ></span>
                </span>
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/Jyotsna_Resume.pdf"
                  className="text-sm font-semibold leading-6 text-text underline hover:text-primary transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My Resume!
                </a>
                <a
                  href="mailto:venkatesanjyotsna@gmail.com"
                  className="text-sm font-semibold leading-6 text-text underline hover:text-primary transition duration-300"
                >
                  Email Me <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-secondary-accent opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce hover:animate-none transition-all duration-300 ease-in-out">
            <ChevronDownIcon
              className="h-8 w-8 text-primary-light"
              aria-hidden="true"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

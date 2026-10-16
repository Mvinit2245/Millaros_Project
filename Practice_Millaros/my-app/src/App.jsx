
import { useState } from "react";
import VinitImg from "./assets/VinitImg.jpg";

import {
  Home,
  User,
  BriefcaseBusiness,
  GraduationCap,
  Code,
  Moon,
  Sun,
  Monitor,
  Palette,
  Mic,
  Camera,
  Gamepad2,
  Download,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Blog, E-Commerce, Education",
    icon: Code,
  },
  {
    title: "UI/UX Design",
    description: "Mobile Design, Website Design",
    icon: Monitor,
  },
  {
    title: "Backend Development",
    description: "Database working",
    icon: Monitor,
  },
  {
    title: "Python Development",
    description: "Character Design, Props & Objects",
    icon: Gamepad2,
  },
  {
    title: "Social Awareness",
    description: "Interacting with People with their Problems",
    icon: Camera,
  },
  {
    title: "Consulting",
    description: "Solves the mentally problems",
    icon: Palette,
  },
];

const skills = [
  { name: "HTML", percent: 95 },
  { name: "CSS", percent: 85 },
  { name: "JavaScript", percent: 80 },
  { name: "PHP", percent: 75 },
  { name: "Tailwind CSS", percent: 85 },
];

const languages = [
  { name: "Marathi", percent: 100 },
  { name: "English", percent: 80 },
  { name: "Hindi", percent: 60 },
];

function Sidebar() {
  return (
    <aside className="w-full shrink-0 bg-white p-5 md:w-[250px]">
      <div className="text-center">
        <img
          src={VinitImg}
          alt="Profile"
          className="mx-auto h-20 w-20 rounded-full object-cover"
        />

        <h2 className="mt-3 text-sm font-bold text-gray-800">
          Vinit Morankar
        </h2>

        <p className="mt-1 text-[10px] text-gray-400">
          Front-End Developer
        </p>
      </div>

      <div className="my-5 space-y-2 border-b border-gray-200 pb-5 text-xs">
        {[
          ["Age:", "22"],
          ["Residence:", "India"],
          ["For Working:", "Available"],
          ["Address:", "Maharashtra, India"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between gap-2"
          >
            <span className="bg-amber-400 px-1 font-semibold text-gray-900">
              {label}
            </span>

            <span
              className={
                value === "Available"
                  ? "text-green-600"
                  : "text-gray-500"
              }
            >
              {value}
            </span>
          </div>
        ))}
      </div>

      <div className="mb-5">
        <h3 className="mb-3 text-sm font-semibold">Languages</h3>

        {languages.map((language) => (
          <div key={language.name} className="mb-3">
            <div className="mb-1 flex justify-between text-[10px] text-gray-500">
              <span>{language.name}</span>
              <span>{language.percent}%</span>
            </div>

            <div className="h-1 border border-amber-400 p-[1px]">
              <div
                className="h-full bg-amber-400"
                style={{ width: `${language.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mb-5">
        <h3 className="mb-3 text-sm font-semibold">Skills</h3>

        {skills.map((skill) => (
          <div key={skill.name} className="mb-3">
            <div className="mb-1 flex justify-between text-[10px] text-gray-500">
              <span>{skill.name}</span>
              <span>{skill.percent}%</span>
            </div>

            <div className="h-1 border border-amber-400 p-[1px]">
              <div
                className="h-full bg-amber-400"
                style={{ width: `${skill.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold">Extra Skills</h3>

        <ul className="space-y-2 text-[10px] text-gray-500">
          {[
            "Bootstrap, Python",
            "Java, MongoDB",
            "Database Knowlegde",
            "Github Knowledge",
          ].map((skill) => (
            <li key={skill} className="flex items-center gap-2">
              <ChevronRight size={12} className="text-amber-500" />
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#contact"
        className="mt-5 flex items-center justify-center gap-2 bg-amber-400 px-3 py-3 text-[10px] font-bold text-gray-900 transition hover:bg-amber-500"
      >
        DOWNLOAD CV
        <Download size={13} />
      </a>
    </aside>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative grid min-h-[300px] overflow-hidden bg-white md:grid-cols-2"
    >
      <div className="z-10 flex flex-col justify-center p-7 md:p-10">
        <h1 className="text-3xl font-bold leading-tight text-gray-800 md:text-4xl">
          I'm Vinit Morankar
          <br />
          <span className="text-amber-500">Front-end</span> Developer
        </h1>

        <p className="mt-4 max-w-md text-xs leading-6 text-gray-500">
          I build responsive websites using React, JavaScript,
          and Tailwind CSS. I enjoy creating clean user interfaces
          and developing useful web applications.
        </p>

        <a
          href="#contact"
          className="mt-5 flex w-fit items-center gap-3 bg-amber-400 px-5 py-3 text-xs font-bold transition hover:bg-amber-500"
        >
          HIRE ME
          <ChevronRight size={14} />
        </a>
      </div>

      <div className="relative flex items-end justify-center">
        <img
          src={VinitImg}
          alt="Vinit Morankar"
          className="h-[280px] max-w-full object-contain object-bottom md:h-[320px]"
        />
      </div>

      <span className="absolute left-[5%] top-5 h-2 w-2 rotate-45 border border-amber-400" />
      <span className="absolute right-[8%] top-10 h-2 w-2 rotate-45 border border-blue-400" />
      <span className="absolute bottom-5 left-[45%] h-2 w-2 rounded-full border border-green-400" />
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="px-5 py-10 md:px-10 md:py-12">
      <div className="mx-auto mb-8 max-w-xl text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          My Services
        </h2>

        <p className="mt-3 text-xs leading-5 text-gray-500">
          Creative ideas, professional design, and quality
          development to help your business and industry grow.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className="flex min-h-[155px] flex-col items-center justify-center bg-white p-5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Icon
                size={35}
                strokeWidth={1.4}
                className="mb-4 text-amber-400"
              />

              <h3 className="text-sm font-semibold text-gray-800">
                {service.title}
              </h3>

              <p className="mt-2 text-xs text-gray-400">
                {service.description}
              </p>

              {service.title === "Advertising" && (
                <a
                  href="#contact"
                  className="mt-3 text-[10px] font-bold text-amber-500"
                >
                  ORDER NOW →
                </a>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function RightNavbar({ dark, setDark }) {
  const links = [
    { icon: Home, href: "#home", label: "Home" },
    { icon: User, href: "#profile", label: "Profile" },
    {
      icon: BriefcaseBusiness,
      href: "#services",
      label: "Services",
    },
    {
      icon: GraduationCap,
      href: "#skills",
      label: "Skills",
    },
  ];

  return (
    <nav className="flex w-full shrink-0 flex-row items-center justify-center gap-5 bg-white p-3 md:w-16 md:flex-col md:justify-start md:gap-6 md:py-6">
      <button
        onClick={() => setDark(!dark)}
        className="rounded-full p-2 text-gray-700 transition hover:bg-amber-100"
        title="Toggle theme"
        aria-label="Toggle dark mode"
      >
        {dark ? <Sun size={17} /> : <Moon size={17} />}
      </button>

      {links.map(({ icon: Icon, href, label }, index) => (
        <a
          href={href}
          key={label}
          title={label}
          className={`rounded-full p-2 transition hover:bg-amber-100 hover:text-amber-500 ${
            index === 0
              ? "bg-amber-400 text-gray-900"
              : "text-gray-500"
          }`}
        >
          <Icon size={17} />
        </a>
      ))}
    </nav>
  );
}

export default function Design() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={`min-h-screen p-3 transition-colors duration-300 sm:p-6 ${
        dark ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1250px] flex-col overflow-hidden border-2 border-blue-400 shadow-sm md:flex-row ${
          dark ? "bg-gray-800" : "bg-[#f1f0f6]"
        }`}
      >
        <Sidebar />

        <main className="min-w-0 flex-1">
          <Hero />
          <Services />
        </main>

        <RightNavbar dark={dark} setDark={setDark} />
      </div>

      <footer
        id="contact"
        className={`py-5 text-center text-xs ${
          dark ? "text-gray-300" : "text-gray-500"
        }`}
      >
        © 2026 Vinit Portfolio. All rights reserved.
      </footer>
    </div>
  );
}

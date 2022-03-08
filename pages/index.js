import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { AiFillStar, AiOutlineMenu } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { BsTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { es } from "../locales/es";
import { en } from "../locales/en";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const handlerMenu = () => setShowMenu(!showMenu);
  const router = useRouter();
  const { locale } = router;

  const t = locale === "es" ? es : en;

  const changeLanguage = (event) => {
    const locale = event.target.value;
    router.push("/", "/", { locale });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Portafolio Ricardo</title>
        <meta
          name="description"
          content="Roberto es un Developer que le encanta implementar diseños que inspiran y atraen a las personas."
        />
        <link rel="icon" href="/favicon.ico" />
        {/* opengraph */}
        <meta property="og:title" content="Portafolio Ricardo" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/DavidMarioLC/LandingPage-Ricardo/main/preview.webp"
        />
        <meta
          property="og:description"
          content="Roberto es un Developer que le encanta implementar diseños que inspiran y atraen a las personas."
        />
      </Head>
      <header className="bg-mybrown text-zinc-50 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 lg:items-center">
              <a href="#" className="text-white text-2xl font-extrabold">
                LOGO
              </a>
              {/* menu-mobile */}
              <nav
                className={` ${
                  showMenu ? "opacity-1 visible" : "opacity-0 "
                }invisible bg-mybrown p-4 w-full  fixed z-10  left-0  top-16 transition duration-300  ease-in-out `}
              >
                <ul className="text-center  lg:flex">
                  <li>
                    <a
                      onClick={handlerMenu}
                      className="block p-4 text-lg"
                      href="#proyectos"
                    >
                      {t.project}
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={handlerMenu}
                      className="block p-4 text-lg"
                      href="#testimonios"
                    >
                      {t.testimony}
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={handlerMenu}
                      className="block p-4 text-lg"
                      href="#about"
                    >
                      {t.about}
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={handlerMenu}
                      className="block p-4 text-lg"
                      href="#contacto"
                    >
                      {t.contact}
                    </a>
                  </li>
                </ul>
              </nav>
              {/* menu-desktop */}
              <nav className=" hidden bg-mybrown p-4 w-full  fixed z-10  left-0  top-16 transition duration-300  ease-in-out lg:block  lg:relative  lg:p-0 lg:top-0  ">
                <ul className="text-center  lg:flex">
                  <li>
                    <a className="block p-4" href="#proyectos">
                      {t.project}
                    </a>
                  </li>
                  <li>
                    <a className="block p-4" href="#testimonios">
                      {t.testimony}
                    </a>
                  </li>
                  <li>
                    <a className="block p-4" href="#about">
                      {t.about}
                    </a>
                  </li>
                  <li>
                    <a className="block p-4" href="#contacto">
                      {t.contact}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <select
                className="bg-mybrown text-white h-14 outline-none"
                onChange={changeLanguage}
                defaultValue={locale}
              >
                <option className="p-0" value="es">
                  ES
                </option>
                <option className="p-0" value="en">
                  EN
                </option>
              </select>
              <div
                title="Menu"
                aria-label="Open Menu"
                onClick={handlerMenu}
                className="border p-2  rounded-lg lg:hidden"
              >
                {showMenu ? <CgClose /> : <AiOutlineMenu />}
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className=" overflow-hidden">
        <section className="bg-mybrown pt-4 pb-16  md:py-32" aria-label="Hero">
          <div className="max-w-6xl mx-auto px-4">
            <div className="md:flex gap-12">
              <div
                data-aos="zoom-in"
                className="flex justify-center relative md:order-2 md:flex-1 "
              >
                <Image
                  src="/perfil.svg"
                  title="perfil"
                  alt="perfil"
                  width={624}
                  height={466}
                  priority
                />
              </div>
              <div data-aos="zoom-in" className="flex flex-col gap-6 md:flex-1">
                <h1 className="text-6xl font-extrabold text-zinc-50 leading-snug">
                  {t.hero}
                </h1>
                <p className="text-2xl font-normal	text-zinc-300">
                  {t.heroDescription}
                </p>
                <button
                  aria-label="Ver mi trabajo"
                  className="bg-violet-600 text-zinc-50 h-12 rounded-md font-black md:w-48"
                >
                  {t.showMyWork}
                </button>
              </div>
            </div>
          </div>
        </section>
        <section
          aria-label="My projects"
          className="bg-mypinksoft py-16   md:py-32"
          id="proyectos"
        >
          <div className="max-w-6xl mx-auto px-4">
            <p
              data-aos="fade-right"
              className="pb-6 text-myorange tracking-[.15em]"
            >
              {t.subtitlePortafolio}
            </p>
            <h2
              data-aos="fade-right"
              className="text-4xl	font-extrabold pb-6 text-mychocolate md:text-6xl"
            >
              {t.titlePortafolio}
            </h2>
            <div className="flex flex-col gap-8 items-center md:flex-wrap md:flex-row">
              <article
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                className="w-full relative rounded-2xl overflow-hidden max-w-xs		"
              >
                <figure className="flex">
                  <Image
                    src="/project-niko.webp"
                    width={448}
                    height={576}
                    title="project Niko"
                    alt="project Niko"
                    objectFit="cover"
                  />
                </figure>
                <div className="absolute top-0 h-full w-full bg-stone-900/50 flex items-end">
                  <h3 className="p-5 text-4xl font-extrabold text-zinc-50">
                    Niko
                  </h3>
                </div>
              </article>
              <article
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-anchor-placement="bottom-bottom"
                className="w-full relative rounded-2xl overflow-hidden max-w-xs		"
              >
                <figure className="flex">
                  <Image
                    src="/project-amazonas.webp"
                    width={448}
                    height={576}
                    title="project Amazonas"
                    alt="project Amazonas"
                    objectFit="cover"
                  />
                </figure>
                <div className="absolute top-0 h-full w-full bg-stone-900/50 flex items-end">
                  <h3 className="p-5 text-4xl font-extrabold text-zinc-50">
                    Amazonas
                  </h3>
                </div>
              </article>
              <article
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-anchor-placement="bottom-bottom"
                className="w-full relative rounded-2xl overflow-hidden max-w-xs		"
              >
                <figure className="flex">
                  <Image
                    src="/project-principe.webp"
                    width={448}
                    height={576}
                    title="project Principe"
                    alt="project Principe"
                    objectFit="cover"
                  />
                </figure>
                <div className="absolute top-0 h-full w-full bg-stone-900/50 flex items-end">
                  <h3 className="p-5 text-4xl font-extrabold text-zinc-50">
                    Príncipe fresco
                  </h3>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section id="about" className="py-16  md:py-32" aria-label="About me">
          <div className="max-w-6xl mx-auto px-4">
            <div className="md:flex gap-4 items-center">
              <div data-aos="zoom-out" className="flex md:flex-1">
                <Image
                  src="/notebook.webp"
                  title="Laptop"
                  alt="Laptop"
                  width={528}
                  height={504}
                  priority
                />
              </div>
              <div
                data-aos="fade-left"
                className="flex  flex-col gap-6 md:flex-1"
              >
                <p className="text-base text-violet-400 tracking-[.15em]">
                  RICARDO PÉREZ
                </p>
                <h2 className="font-extrabold text-4xl text-mychocolate md:text-6xl ">
                  {t.titleAbout}
                </h2>
                <p
                  data-aos="zoom-out"
                  className="text-mysoftbrown text-xl leading-loose"
                >
                  {t.descriptionAbout}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          aria-label="Testimonies"
          className=" bg-mypinksoft pt-4 pb-16 md:py-32"
          id="testimonios"
        >
          <div className="max-w-6xl mx-auto px-4">
            <p
              data-aos="zoom-in-down"
              className="text-center text-violet-400 tracking-[.15em]"
            >
              {t.subtitleTestimony}
            </p>
            <h2
              data-aos="zoom-out"
              className="font-extrabold text-2xl text-center py-10 text-mychocolate md:text-6xl"
            >
              {t.titleTestimony}
            </h2>
            <div className="lg:flex ">
              <article
                data-aos="zoom-out-right"
                className="  md:h-[29rem] flex flex-col gap-12  border p-6"
              >
                <div className="flex gap-3">
                  <AiFillStar className="h-6 w-6 text-yellow-400" />
                  <AiFillStar className="h-6 w-6 text-yellow-400" />
                  <AiFillStar className="h-6 w-6 text-yellow-400" />
                  <AiFillStar className="h-6 w-6 text-yellow-400" />
                  <AiFillStar className="h-6 w-6 text-yellow-400" />
                </div>
                <p className="text-xl leading-loose text-mysoftbrown">
                  {t.testimony1}
                </p>
                <div className="flex items-center gap-6 ">
                  <div className="rounded-full flex ">
                    <Image
                      src="/testimony-juan.webp"
                      width={80}
                      height={80}
                      title="Testimonio Juan"
                      alt="Testimonio Juan"
                    />
                  </div>
                  <p className="text-2xl	font-bold text-mychocolate	">
                    Juan Antonio
                  </p>
                </div>
              </article>
              <article
                data-aos="zoom-out-down"
                className="  md:h-[29rem] flex flex-col gap-12 p-6 bg-white shadow-lg"
              >
                <div className="flex gap-3">
                  <AiFillStar className="h-6 w-6 text-yellow-400" />
                  <AiFillStar className="h-6 w-6 text-yellow-400" />
                  <AiFillStar className="h-6 w-6 text-yellow-400" />
                  <AiFillStar className="h-6 w-6 text-yellow-400" />
                  <AiFillStar className="h-6 w-6 text-yellow-400" />
                </div>
                <p className="text-xl leading-loose text-mysoftbrown">
                  {t.testimony2}
                </p>
                <div className="flex items-center gap-6 ">
                  <div className="rounded-full flex ">
                    <Image
                      src="/testimony-eleanor.webp"
                      width={80}
                      height={80}
                      title="Testimonio Eleanor"
                      alt="Testimonio Eleanor"
                    />
                  </div>
                  <p className="text-2xl	font-bold	text-mychocolate">
                    Eleanor Pena
                  </p>
                </div>
              </article>
              <article
                data-aos="zoom-out-left"
                className="  md:h-[29rem] flex flex-col gap-12  border p-6"
              >
                <div className="flex gap-3">
                  <AiFillStar className="h-6 w-6 text-yellow-400" />
                  <AiFillStar className="h-6 w-6 text-yellow-400" />
                  <AiFillStar className="h-6 w-6 text-yellow-400" />
                  <AiFillStar className="h-6 w-6 text-yellow-400" />
                  <AiFillStar className="h-6 w-6 text-yellow-400" />
                </div>
                <p className="text-xl leading-loose text-mysoftbrown">
                  {t.testimony3}
                </p>
                <div className="flex items-center gap-6 ">
                  <div className="rounded-full flex ">
                    <Image
                      src="/testimony-darlene.webp"
                      width={80}
                      height={80}
                      title="Testimonio Darlene"
                      alt="Testimonio Darlene"
                    />
                  </div>
                  <p className="text-2xl	font-bold	text-mychocolate">
                    Darlene Robertson
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section
          className="py-16  md:py-32"
          aria-label="Contacts"
          id="contacto"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col gap-10 md:flex-row ">
              <div className="flex flex-col gap-6 text-left   md:order-2 md:flex-1">
                <p
                  data-aos="fade-up"
                  className="text-base tracking-[.15em] text-myorange "
                >
                  {t.subtitleContact}
                </p>
                <h2
                  data-aos="zoom-out"
                  className="font-extrabold text-4xl md:text-5xl text-mychocolate"
                >
                  {t.titleContact}
                </h2>
                <div data-aos="fade-left" className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center text-white bg-red-400 rounded-full">
                    <BsTelephoneFill />
                  </div>
                  <p className="text-xl text-mychocolate font-semibold	">
                    +1 (234) 928-22-34
                  </p>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-delay="300"
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 flex items-center justify-center text-white bg-red-400 rounded-full">
                    <MdMail />
                  </div>
                  <p className="text-xl text-mychocolate font-semibold	">
                    ricardo.perez@gmail.com
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="bg-stone-900 p-7 md:p-12 rounded-md  md:flex-1"
              >
                <h3 className="text-2xl font-bold	text-slate-50 pb-6">
                  {t.titleForm}
                </h3>
                <form className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <label
                      className="font-semibold	text-slate-50 "
                      htmlFor="name"
                    >
                      {t.labelName}
                    </label>
                    <input
                      className="px-4 py-2 rounded"
                      id="name"
                      name="name"
                      type="text"
                      placeholder={t.placeHolderName}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label
                      className="font-semibold	text-slate-50 "
                      htmlFor="mail"
                    >
                      {t.labelMail}
                    </label>
                    <input
                      className="px-4 py-2 rounded"
                      name="mail"
                      id="mail"
                      type="mail"
                      placeholder={t.placeHolderMail}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label
                      className="font-semibold	text-slate-50 "
                      htmlFor="description"
                    >
                      {t.labelDescription}
                    </label>
                    <textarea
                      className="px-4 py-2 rounded"
                      name="description"
                      id="description"
                      cols="30"
                      rows="5"
                      placeholder={t.placeHolderDescription}
                    ></textarea>
                  </div>
                  <button className="bg-violet-600 text-slate-50 py-4  px-6 rounded-md font-bold md:w-48">
                    {t.showMyWork}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-zinc-900 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col justify-center items-center gap-2 md:flex-row md:justify-between">
            <p className="text-white text-2xl font-extrabold">LOGO</p>
            <div className="flex gap-2">
              <div className="w-12 h-12 flex items-center justify-center text-white bg-red-400 rounded-full">
                <FaFacebookF />
              </div>
              <div className="w-12 h-12 flex items-center justify-center text-white bg-red-400 rounded-full">
                <BsTwitter />
              </div>
              <div className="w-12 h-12 flex items-center justify-center text-white bg-red-400 rounded-full">
                <BsInstagram />
              </div>
            </div>
          </div>
          <hr className="my-6 block" />
          <p className="text-center text-white md:text-left">{t.reserved}</p>
        </div>
      </footer>
    </>
  );
}

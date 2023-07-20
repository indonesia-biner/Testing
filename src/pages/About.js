import React from "react";
// import images
import AboutMe from "../img/about/about.png";
// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
// import transtion
import { transition1 } from "../transitions";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section overflow-y-scroll"
    >
      <div className="container mx-auto h-full relative">
        {/* text and image */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* image */}
          <motion.div
            initial={{ opacity: 0, y: "80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={transition1}
            className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={transition1}
              src={AboutMe}
              alt=""
            ></motion.img>
          </motion.div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "50%" }}
            transition={transition1}
            className="flex-1 pt-96 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1 font-primary lg:mt-o mt-[100px] lg:mt-[160px]">About me</h1>
            <p className="mb-12 max-w-sm font-primary font-normal w-4/5 md:container">
              Kenalin nama gw <b> Huda Rasyad Wicaksono </b>, Anak tahun 2000-an awal. Selamat datang di website sederhana gw. Menurut gw, website ini akan berguna untuk sekali untuk gw
              pribadi dalam menjalani kehidupan di era modernisasi.
              <br />
              <br />
              Menurut gw, visual #1. Contohnya website saat ini. Kenapa anda semua ingin membaca
              sampai kalimat ini?, karna anda semua berhasil gw manjakan.
            </p>

            <motion.div
              whileHover={{
                borderColor: "black",
                borderWidth: "2px",
                color: "black",
                background: "transparent",
              }}
              transition={transition1}
              className="btn mb-[30px]"
            >
              <Link to={"/contact"} className="font-primary">
                Gass ngab lanjut chat
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

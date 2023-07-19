import React from "react";
// import images
import ManImg from "../img/home/home.png";
// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
// import transtion
import { transition1 } from "../transitions";
const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section sm:overflow-y-scroll lg:overflow-hidden overflow-y-scroll"
    >
      <div className="container mx-auto h-full">
        {/* text and image */}
        <div className="flex flex-col justify-center">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "50%" }}
            transition={transition1}
            className="w-full pt-14 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1 sm:mt-[100px] lg:mt-0 mt-[50px]">
              <span style={{color: "#e14615"}}>Mahasiswa</span> <br />kupu-kupu
            </h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              Bogor, Indonesia
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
              <Link to={"/about"} className="font-primary">
                Kenalan dulu ngab
              </Link>
            </motion.div>
          </motion.div>
          {/* images */}
          <div className="flex justify-end max-h-96 lg:max-h-max">
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={transition1}
              className="relative lg:-right-40 overflow-hidden"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={ManImg}
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;

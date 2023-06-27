import React, { useRef, useState, useEffect  } from "react";
import emailjs from "@emailjs/browser";
// import images
import ContactMe from "../img/contact/contact.png";
// import motion
import { motion } from "framer-motion";
// import transtion
import { transition1 } from "../transitions";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [pesan, setPesan] = useState("");
  const [showSentMessage, setShowSentMessage] = useState(false);
  const resetForm = () => {
    setName("");
    setWhatsapp("");
    setPesan("");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2l1dwr7",
        "template_f10cqyf",
        form.current,
        "tT8g1_E6pJZa7yWi8"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true); // Set isSent menjadi true setelah email terkirim
          resetForm();

          setTimeout(() => {
            setIsSent(false); // Setelah 0,1 detik, set isSent menjadi false kembali
          }, 400);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  
  // Efek setelah tombol diklik
  const sentButtonVariants = {
    initial: { opacity: 1 },
    sent: { opacity: 0 },
  };

  useEffect(() => {
    let timer;
    if (showSentMessage) {
      timer = setTimeout(() => {
        setShowSentMessage(false);
      }, 60000); // Set waktu delay menjadi 0.5 detik (500 milidetik)
    }
    return () => clearTimeout(timer);
  }, [showSentMessage]);
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
          {/* bg */}
          <div className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10"></div>
          {/* text & form */}
          <motion.div
            initial={{ opacity: 0, y: "50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "50%" }}
            transition={transition1}
            className="lg:flex-1 lg:pt-32 px-4"
          >
            <h1 className="h1">Hubungin gw brow</h1>
            <p className="mb-12">Lo orang asik bang</p>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-y-4"
            >
              <div className="flex gap-x-10">
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama lo siapa?"
                ></input>
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  name="whatsapp"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="Masukin whatsapp lo bang (+628xxx)"
                ></input>
              </div>
              <input
                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                type="text"
                name="pesan"
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                placeholder="Tulis pesan ke gw"
              ></input>

              <motion.button
                whileHover={{
                  borderColor: "black",
                  borderWidth: "2px",
                  color: "black",
                  background: "transparent",
                }}
                transition={transition1}
                className="btn mb-[30px] mx-auto lg:mx-0 slef-start"
                variants={sentButtonVariants}
                initial="initial"
                animate={isSent ? "Terkirim boss" : "initial"}
                onAnimationComplete={() => setShowSentMessage(isSent)}
              >
                {showSentMessage ? "Terkirim boss!" : "Kirim"}
                {/* {isSent ? "Terkirim boss!" : "Kirim"} */}
              </motion.button>
            </form>
          </motion.div>
          {/* image */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={transition1}
            className="lg:flex-1"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={transition1}
              src={ContactMe}
            ></motion.img>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

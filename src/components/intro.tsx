import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "../hooks/useSectionInView";
import portrait from "../assets/portrait.jpg";
import { MdEmail } from "react-icons/md";

export default function Intro() {
  const { ref } = useSectionInView("Home");

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 sm:mb-40 max-w-[50rem] text-center scroll-mt-[100rem] z-100"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <img
              src={portrait}
              alt="Akshit portrait"
              width={192}
              height={192}
              className="h-38 w-38 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-2 right-2 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.div
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4x text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="mb-1">
          Hello, my name is <span className="font-bold">Akshit.</span>
        </p>{" "}
        <p className="mb-2">
          I'm a recent <span className="font-bold">Software Engineering</span>{" "}
          Graduate from <span className="font-bold">McMaster University</span> (
          <span className="font-bold">Summa Cum Laude</span>) with experience in{" "}
          <span className="font-bold">frontend</span>,{" "}
          <span className="font-bold">backend</span>, and{" "}
          <span className="font-bold">business analysis</span>. I am currently
          looking for new grad software engineering roles.
        </p>
        <p>Please feel free to contact me via LinkedIn or Email</p>
        {/* <span className="underline">React (Next.js)</span>. */}
      </motion.div>

      <motion.div
        className="flex items-center justify-center gap-4 px-4 mb-5 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          href="https://www.linkedin.com/in/akshit-gulia"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
          href="https://github.com/akshitg3"
          target="_blank"
        >
          <FaGithubSquare />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
          href="mailto:akshit.gulia@outlook.com"
          target="_blank"
        >
          <MdEmail />
        </a>
      </motion.div>

      <motion.div
        className="flex items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          href="/resume.pdf"
          download
        >
          Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
      </motion.div>
    </section>
  );
}

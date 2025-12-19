import { Gamepad2 } from "lucide-react";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import styles from "./This.module.css";

function ContactMe() {
  return (
    <section className="w-full min-h-[40vh] flex flex-col items-center justify-center gap-6 
      bg-linear-to-b from-blue-500 to-green-400 text-center px-4">

      <h1 className={`text-4xl font-bold text-amber-100 ${styles.orbitron}`}>
        Ready to pass time?
      </h1>

      <h3 className="text-lg text-slate-900 max-w-xl">
        Bored? Waiting for someone? Pass the time with this fun, interactive website.
      </h3>

      <motion.button
        onClick={() => scroll.scrollToTop({ duration: 800, smooth: "easeInOutQuart" })}
        whileHover={{
          y: -4,
          boxShadow: "0 10px 18px -6px rgba(251,191,36,0.9), -6px 0 12px -6px rgba(251,191,36,0.45), 6px 0 12px -6px rgba(251,191,36,0.45)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`px-6 py-3 rounded-full bg-amber-300 text-slate-900 font-semibold flex items-center gap-2 ${styles.orbitron}`}
      >
        <Gamepad2 className="w-5 h-5" />
        Start having fun now
      </motion.button>

    </section>
  );
}

export default ContactMe;

import { useState } from "react";
import Drawer from "./Drawer";
import { SlideText } from "./SlideText";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Header Section */}
      <motion.header
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className=" w-full flex justify-between items-center bg-neutral-100 px-6 pt-5 md:px-12"
      >
        <div className="left">
          <h3 className="text-2xl font-bold tracking-tighter text-neutral-900">
            Zeaster
          </h3>
        </div>
        <div className="right">
          <button
            onClick={() => setOpen(true)}
            className="px-6 pt-2 pb-0.5 border border-neutral-800/50 rounded-xl hover:bg-neutral-800 hover:text-white transition-colors duration-300 font-medium"
          >
            <SlideText text={"Menu"} />
          </button>
        </div>
      </motion.header>

      {/* Drawer / Navigation Menu */}
      <Drawer
        className="bg-[#f5f3ed] dark:bg-[#f5f3ed]"
        open={open}
        onClose={() => setOpen(false)}
        placement="right"
        size={100}
      >
        <div className="h-full w-full flex flex-col p-8 md:p-16">
          {/* Top Close Bar */}
          <div className="flex justify-end w-full">
            <button
              onClick={() => setOpen(false)}
              className="px-5 pt-2 pb-1 bg-red-500 text-white rounded-2xl hover:bg-red-600 transition-all shadow-md active:scale-95 font-medium"
            >
              <SlideText text={"Close"} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col mt-12 md:mt-20 gap-4 md:gap-6">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Blogs", path: "/blog" },
              { name: "Contact", path: "/contact" },
              { name: "News Letter", path: "/newslatter" },
            ].map((link, idx) => (
              <NavLink
                key={idx}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `
              text-4xl md:text-7xl font-semibold tracking-tight transition-all duration-300
              ${isActive ? "text-red-500 underline" : "text-neutral-800 hover:translate-x-4 hover:text-neutral-500"}
            `}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Bottom Footer Info (Optional but adds "pro" feel) */}
          <div className="mt-auto border-t border-neutral-300 pt-8 flex flex-col md:flex-row justify-between text-neutral-500 text-sm uppercase tracking-widest">
            <p>© 2026 Zeaster Studio</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="https://www.linkedin.com/in/paul-debajoyti/">
                <span>LinkedIn</span>
              </a>
              <a href="https://x.com/pauldebajoyti">
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navigation;

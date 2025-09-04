import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-gray-900" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-pink-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10"
                whileHover={{ scale: 1.05, rotateY: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gray-800/50 flex items-center justify-center">
                  <span className="text-6xl">🎨</span>
                </div>
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full blur-lg opacity-60"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Creative Vision Meets Technical Excellence
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              With 1 year of hands-on experience as a freelance video editor and graphic designer, I have helped clients bring their ideas to life through visually engaging designs and compelling video content. My work focuses on crafting unique brand visuals, creating smooth and impactful edits, and delivering projects that resonate with audiences. Being self-taught and driven, I take pride in blending creativity with precision, ensuring every project reflects the client&apos;s vision while maintaining professional quality.
            </p>
           

            {/* <motion.div
              className="grid grid-cols-2 gap-4 pt-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold text-pink-400 mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  50+
                </motion.div>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold text-cyan-400 mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  5+
                </motion.div>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

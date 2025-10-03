import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { name: "Video Editing", level: 90, color: "from-pink-500 to-pink-700" },
    { name: "Motion Graphics", level: 85, color: "from-purple-500 to-purple-700" },
    { name: "Graphic Design", level: 88, color: "from-cyan-500 to-cyan-700" },
    { name: "Color Grading", level: 82, color: "from-blue-500 to-blue-700" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative group">
              {/* Main card */}
              <motion.div
                className="relative bg-gray-800/40 backdrop-blur-lg rounded-3xl border border-white/10 p-8 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl rotate-12 opacity-80"
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [12, 15, 12]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl -rotate-12 opacity-80"
                  animate={{ 
                    y: [0, 20, 0],
                    rotate: [-12, -15, -12]
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                />

                {/* Content */}
                <div className="relative z-10 text-center">
                  <motion.div
                    className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-cyan-400 p-1"
                    animate={{ 
                      rotateY: [0, 180, 360],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                  >
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                      <span className="text-4xl">🎬</span>
                    </div>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Visual Storyteller</h3>
                  <p className="text-gray-300 mb-6">
                    Transforming ideas into compelling visual narratives
                  </p>
                  
                  <motion.div 
                    className="flex justify-center space-x-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                  >
                    {["🎨", "✨", "🎥", "⚡"].map((emoji, index) => (
                      <motion.span
                        key={index}
                        className="text-2xl"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: index * 0.5 
                        }}
                      >
                        {emoji}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Where <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">Creativity</span> Meets{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Precision</span>
              </h3>
              
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  With <span className="text-pink-400 font-semibold">1 year</span> of dedicated freelance experience, I specialize in transforming raw concepts into visually stunning narratives that captivate audiences and elevate brands.
                </p>
                
                <p>
                  My journey in video editing and graphic design is driven by a passion for visual storytelling and a commitment to technical excellence. I believe every frame matters and every design element should serve a purpose.
                </p>
                
                <p>
                  What sets me apart is my ability to blend <span className="text-cyan-400">artistic vision</span> with <span className="text-purple-400">technical precision</span>, ensuring that each project not only looks beautiful but also communicates effectively and resonates deeply.
                </p>
              </div>
            </div>

            {/* Skills Progress */}
            <motion.div
              className="space-y-6 pt-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h4 className="text-xl font-bold text-white mb-4">Core Skills</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: 1 + index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6 pt-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                <motion.div
                  className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
                >
                  50+
                </motion.div>
                <p className="text-gray-400 text-sm">Projects Delivered</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                <motion.div
                  className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
                >
                  100%
                </motion.div>
                <p className="text-gray-400 text-sm">Client Satisfaction</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React, { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    { name: "Photoshop", level: 95, icon: "🎨", category: "Design" },
    { name: "CorelDraw", level: 90, icon: "✏️", category: "Design" },
    { name: "Illustrator", level: 88, icon: "🖌️", category: "Design" },
    { name: "After Effects", level: 92, icon: "🎬", category: "Video" },
    { name: "Premiere Pro", level: 94, icon: "🎞️", category: "Video" },
    { name: "InDesign", level: 85, icon: "📄", category: "Design" },
  ];

  // ✅ Explicitly type these as Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gray-900 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mastering industry-leading tools to bring creative visions to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={skill.name} variants={itemVariants} className="group relative">
              <motion.div
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-pink-500/50 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    className="text-3xl mr-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    {skill.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <span
                      className={`text-sm px-2 py-1 rounded-full ${
                        skill.category === "Design"
                          ? "bg-pink-500/20 text-pink-400"
                          : "bg-cyan-500/20 text-cyan-400"
                      }`}
                    >
                      {skill.category}
                    </span>
                  </div>
                </div>

                {/* Skill Progress Bar */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 text-sm">Proficiency</span>
                    <span className="text-white font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${
                        skill.category === "Design"
                          ? "from-pink-500 to-purple-600"
                          : "from-cyan-500 to-blue-600"
                      }`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </div>

                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
                    skill.category === "Design"
                      ? "bg-pink-500/10 shadow-lg shadow-pink-500/20"
                      : "bg-cyan-500/10 shadow-lg shadow-cyan-500/20"
                  }`}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Constantly evolving and learning new techniques to stay ahead of industry trends and deliver cutting-edge creative solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

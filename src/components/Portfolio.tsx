import React, { useRef, useState } from "react";
import { motion, type Variants, type Transition } from "framer-motion";
import { useInView } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import PortfolioModal from "./PortfolioModal";

interface PortfolioItem {
  id: number;
  title: string;
  type: string;
  image: string;
  description: string;
  category: "design" | "video";
  samples: Array<{
    type: "image" | "video";
    url: string;
    caption?: string;
  }>;
}

const Portfolio: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Number of projects to show initially
  const [visibleCount, setVisibleCount] = useState(6);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Punjabi Chulha Chaunka",
      type: "Graphic Design",
      image: "/punjabi/21.jpeg",
      description: "Complete branding package for a restraunt",
      category: "design",
      samples: [
        {
          type: "image",
          url: "/punjabi/1.jpeg",
          caption: "Logo design and brand guidelines",
        },
        {
          type: "image",
          url: "/punjabi/2.jpeg",
          caption: "Business card and stationery design",
        },
        {
          type: "image",
          url: "/punjabi/3.jpeg",
          caption: "Brand application mockups",
        },
        {
          type: "image",
          url: "/punjabi/4.jpeg",
          caption: "Brand application mockups",
        },
        {
          type: "image",
          url: "/punjabi/5.jpeg",
          caption: "Brand application mockups",
        },
      ],
    },
    {
      id: 2,
      title: "Product Commercial",
      type: "Video Editing",
      image: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg",
      description: "Product showcase video",
      category: "video",
      samples: [
        {
          type: "video",
          url: "/video1.mp4",
          caption: "Main product commercial - 30 seconds",
        },
        {
          type: "image",
          url: "/video2.mp4",
          caption: "Behind the scenes storyboard",
        },
        {
          type: "video",
          url: "/video3.mp4",
          caption: "Extended director's cut version",
        },
        {
          type: "video",
          url: "/video4.mp4",
          caption: "Extended director's cut version",
        },
        {
          type: "video",
          url: "/video5.mp4",
          caption: "Extended director's cut version",
        },
      ],
    },
    {
      id: 3,
      title: "Meghna Designer",
      type: "Graphic Design",
      image: "/meghna/1.jpeg",
      description: "Modern editorial design for fashion magazine",
      category: "design",
      samples: [
        {
          type: "image",
          url: "/meghna/1.jpeg",
          caption: "Cover design and typography",
        },
        {
          type: "image",
          url:  "/meghna/2.jpeg",
          caption: "Interior spread layouts",
        },
        
      ],
    },
    {
      id: 4,
      title: "Yogmaa",
      type: "Graphic Design",
      image: "/yogma/1.jpeg",
      description: "Dynamic motion graphics compilation",
      category: "video",
      samples: [
        {
          type: "image",
          url: "/yogma/1.jpeg",
          caption: "Motion graphics showreel - 2 minutes",
        },
        {
          type: "image",
          url: "/yogma/2.jpeg",
          caption: "Style frames and concept art",
        },
        {
          type: "image",
          url: "/yogma/3.jpeg",
          caption: "Individual motion graphics elements",
        },
      ],
    },
    {
      id: 5,
      title: "CarePlus Multispeciality Clinic",
      type: "Graphic Design",
      image: "/clinic.jpeg",
      description: "Clinic poster",
      category: "design",
      samples: [
        {
          type: "image",
          url: "/clinic.jpeg",
          caption: "Main concert poster design",
        },
        
      ],
    },
    // {
    //   id: 6,
    //   title: "Documentary Edit",
    //   type: "Video Editing",
    //   image: "https://images.pexels.com/photos/7991608/pexels-photo-7991608.jpeg",
    //   description: "Feature-length documentary editing",
    //   category: "video",
    //   samples: [
    //     {
    //       type: "video",
    //       url: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    //       caption: "Documentary trailer - 90 seconds",
    //     },
    //     {
    //       type: "image",
    //       url: "https://images.pexels.com/photos/7991608/pexels-photo-7991608.jpeg",
    //       caption: "Editing timeline and workflow",
    //     },
    //     {
    //       type: "video",
    //       url: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    //       caption: "Selected scenes compilation",
    //     },
    //   ],
    // },
    // ✅ Add more dummy projects if needed
    // {
    //   id: 7,
    //   title: "Social Media Graphics",
    //   type: "Graphic Design",
    //   image: "https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg",
    //   description: "Creative posts for campaigns",
    //   category: "design",
    //   samples: [
    //     {
    //       type: "image",
    //       url: "https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg",
    //     },
    //   ],
    // },
    // {
    //   id: 8,
    //   title: "Short Film Edit",
    //   type: "Video Editing",
    //   image: "https://images.pexels.com/photos/7235672/pexels-photo-7235672.jpeg",
    //   description: "Narrative short film with cinematic editing",
    //   category: "video",
    //   samples: [
    //     {
    //       type: "video",
    //       url: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    //     },
    //   ],
    // },
  ];

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut" as Transition["ease"],
      },
    },
  };

  return (
    <section id="portfolio" className="py-20 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Work
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my latest projects spanning graphic design and video
            editing
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {portfolioItems.slice(0, visibleCount).map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-gray-800 cursor-pointer"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              onClick={() => openModal(item)}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <motion.div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Play Icon */}
                {item.category === "video" && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-7 h-7 text-white ml-1" />
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      item.category === "video"
                        ? "bg-cyan-500/20 text-cyan-400"
                        : "bg-pink-500/20 text-pink-400"
                    }`}
                  >
                    {item.type}
                  </span>
                  <div className="text-gray-400 group-hover:text-white transition-colors duration-200">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {visibleCount < portfolioItems.length && (
          <div className="flex justify-center mt-12">
            <motion.button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
            >
              Load More Projects
            </motion.button>
          </div>
        )}

        <PortfolioModal
          item={selectedItem}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </section>
  );
};

export default Portfolio;

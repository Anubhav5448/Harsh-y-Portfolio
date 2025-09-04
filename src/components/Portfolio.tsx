import React, { useRef, useState } from 'react';
import { motion, type Variants, type Transition } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';
import PortfolioModal from './PortfolioModal';

interface PortfolioItem {
  id: number;
  title: string;
  type: string;
  image: string;
  description: string;
  category: 'design' | 'video';
  samples: Array<{
    type: 'image' | 'video';
    url: string;
    caption?: string;
  }>;
}

const Portfolio: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Brand Identity Design',
      type: 'Graphic Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      description: 'Complete branding package for tech startup',
      category: 'design',
      samples: [
        { type: 'image', url: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg', caption: 'Logo design and brand guidelines' },
        { type: 'image', url: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg', caption: 'Business card and stationery design' },
        { type: 'image', url: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg', caption: 'Brand application mockups' }
      ]
    },
    {
      id: 2,
      title: 'Product Commercial',
      type: 'Video Editing',
      image: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg',
      description: 'Cinematic product showcase video',
      category: 'video',
      samples: [
        { type: 'video', url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4', caption: 'Main product commercial - 30 seconds' },
        { type: 'image', url: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg', caption: 'Behind the scenes storyboard' },
        { type: 'video', url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4', caption: 'Extended director\'s cut version' }
      ]
    },
    {
      id: 3,
      title: 'Digital Magazine Layout',
      type: 'Graphic Design',
      image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg',
      description: 'Modern editorial design for fashion magazine',
      category: 'design',
      samples: [
        { type: 'image', url: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg', caption: 'Cover design and typography' },
        { type: 'image', url: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg', caption: 'Interior spread layouts' },
        { type: 'image', url: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg', caption: 'Digital version mockups' }
      ]
    },
    {
      id: 4,
      title: 'Motion Graphics Reel',
      type: 'Video Editing',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
      description: 'Dynamic motion graphics compilation',
      category: 'video',
      samples: [
        { type: 'video', url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4', caption: 'Motion graphics showreel - 2 minutes' },
        { type: 'image', url: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg', caption: 'Style frames and concept art' },
        { type: 'video', url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4', caption: 'Individual motion graphics elements' }
      ]
    },
    {
      id: 5,
      title: 'Event Poster Series',
      type: 'Graphic Design',
      image: 'https://images.pexels.com/photos/1619654/pexels-photo-1619654.jpeg',
      description: 'Concert poster design series',
      category: 'design',
      samples: [
        { type: 'image', url: 'https://images.pexels.com/photos/1619654/pexels-photo-1619654.jpeg', caption: 'Main concert poster design' },
        { type: 'image', url: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg', caption: 'Alternative poster variations' },
        { type: 'image', url: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg', caption: 'Social media adaptations' }
      ]
    },
    {
      id: 6,
      title: 'Documentary Edit',
      type: 'Video Editing',
      image: 'https://images.pexels.com/photos/7991608/pexels-photo-7991608.jpeg',
      description: 'Feature-length documentary editing',
      category: 'video',
      samples: [
        { type: 'video', url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4', caption: 'Documentary trailer - 90 seconds' },
        { type: 'image', url: 'https://images.pexels.com/photos/7991608/pexels-photo-7991608.jpeg', caption: 'Editing timeline and workflow' },
        { type: 'video', url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4', caption: 'Selected scenes compilation' }
      ]
    }
  ];

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // ✅ Use Variants for type safety
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut" as Transition["ease"] // ✅ type-safe fix
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
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
            A showcase of my latest projects spanning graphic design and video editing
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioItems.map((item) => (
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
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <motion.div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Play Icon for Videos */}
                {item.category === 'video' && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      item.category === 'video'
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'bg-pink-500/20 text-pink-400'
                    }`}
                  >
                    {item.type}
                  </span>
                  <div className="text-gray-400 group-hover:text-white transition-colors duration-200">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
                <p className="text-gray-500 text-xs mt-2">
                  {item.samples.length} sample{item.samples.length !== 1 ? 's' : ''}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <PortfolioModal item={selectedItem} isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </section>
  );
};

export default Portfolio;

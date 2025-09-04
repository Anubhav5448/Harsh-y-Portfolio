import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  type: string;
  description: string;
  category: "design" | "video";
  samples: Array<{
    type: "image" | "video";
    url: string;
    caption?: string;
  }>;
}

interface PortfolioModalProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({
  item,
  isOpen,
  onClose,
}) => {
  const [currentSampleIndex, setCurrentSampleIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setCurrentSampleIndex(0);
      setIsVideoPlaying(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !item) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, item, currentSampleIndex]);

  const goToNext = () => {
    if (!item) return;
    setCurrentSampleIndex((prev) => (prev + 1) % item.samples.length);
    setIsVideoPlaying(true);
  };

  const goToPrevious = () => {
    if (!item) return;
    setCurrentSampleIndex(
      (prev) => (prev - 1 + item.samples.length) % item.samples.length
    );
    setIsVideoPlaying(true);
  };

  const toggleVideoPlayback = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  if (!item) return null;

  const currentSample = item.samples[currentSampleIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-6xl mx-4 bg-gray-900/95 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-700/50">
              <div>
                <h2 className="text-2xl font-bold text-white">{item.title}</h2>
                <p className="text-gray-400 mt-1">{item.type}</p>
              </div>
              <motion.button
                onClick={onClose}
                className="w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row">
              {/* Media Viewer */}
              <div className="flex-1 relative">
                <div className="aspect-video bg-gray-800 relative overflow-hidden">
                  {currentSample.type === "image" ? (
                    <motion.img
                      key={currentSampleIndex}
                      src={currentSample.url}
                      alt={`${item.title} sample ${currentSampleIndex + 1}`}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <video
                        key={currentSampleIndex}
                        src={currentSample.url}
                        className="w-full h-full object-cover"
                        autoPlay={isVideoPlaying}
                        muted
                        loop
                        controls={false}
                      />
                      <motion.button
                        onClick={toggleVideoPlayback}
                        className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-all duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="w-16 h-16 bg-pink-500/80 rounded-full flex items-center justify-center">
                          {isVideoPlaying ? (
                            <Pause className="w-8 h-8 text-white" />
                          ) : (
                            <Play className="w-8 h-8 text-white ml-1" />
                          )}
                        </div>
                      </motion.button>
                    </div>
                  )}

                  {/* Navigation Arrows */}
                  {item.samples.length > 1 && (
                    <>
                      <motion.button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-900/80 hover:bg-gray-800/80 rounded-full flex items-center justify-center text-white transition-all duration-200"
                        whileHover={{ scale: 1.1, x: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </motion.button>
                      <motion.button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-900/80 hover:bg-gray-800/80 rounded-full flex items-center justify-center text-white transition-all duration-200"
                        whileHover={{ scale: 1.1, x: 2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ChevronRight className="w-6 h-6" />
                      </motion.button>
                    </>
                  )}

                  {/* Sample Counter */}
                  {item.samples.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900/80 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="text-white text-sm">
                        {currentSampleIndex + 1} / {item.samples.length}
                      </span>
                    </div>
                  )}
                </div>

                {/* Thumbnail Navigation */}
                {item.samples.length > 1 && (
                  <div className="p-4 bg-gray-800/50">
                    <div className="flex space-x-3 overflow-x-auto">
                      {item.samples.map((sample, index) => (
                        <motion.button
                          key={index}
                          onClick={() => {
                            setCurrentSampleIndex(index);
                            setIsVideoPlaying(true);
                          }}
                          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                            index === currentSampleIndex
                              ? "border-pink-400 shadow-lg shadow-pink-400/25"
                              : "border-gray-600 hover:border-gray-500"
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {sample.type === "image" ? (
                            <img
                              src={sample.url}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                              <Play className="w-4 h-4 text-gray-400" />
                            </div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="lg:w-80 p-6 bg-gray-800/30">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="mb-6">
                    <span
                      className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${
                        item.category === "video"
                          ? "bg-cyan-500/20 text-cyan-400"
                          : "bg-pink-500/20 text-pink-400"
                      }`}
                    >
                      {item.type}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {currentSample.caption && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">
                        Current Sample
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {currentSample.caption}
                      </p>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">
                        Project Details
                      </h4>
                      <div className="space-y-2 text-sm text-gray-300">
                        <p>
                          <span className="text-gray-400">Category:</span>{" "}
                          {item.category === "video"
                            ? "Video Editing"
                            : "Graphic Design"}
                        </p>
                        <p>
                          <span className="text-gray-400">Samples:</span>{" "}
                          {item.samples.length} items
                        </p>
                        <p>
                          <span className="text-gray-400">Type:</span>{" "}
                          {item.type}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PortfolioModal;

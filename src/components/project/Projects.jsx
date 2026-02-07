import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Projects = ({ data, onSeeMoreClick }) => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const openImageModal = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  const closeImageModal = () => {
    setEnlargedImage(null);
  };

  return (
    <>
      <div className="rounded-lg border border-gray-200 shadow-gray-300 hover:shadow-2xl transition-all duration-300">
        <img
          src={data.image}
          alt={data.title}
          className="w-full object-cover rounded-t-lg cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => openImageModal(data.image)}
        />

        <div className="p-6">
          <p className="text-gray-400 text-xs font-medium">
            {data.category}
          </p>

          <p className="text-gray-900 text-lg font-semibold mt-1 mb-3">
            {data.title}
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            {data.description}
          </p>

          <button
            onClick={onSeeMoreClick}
            className="btn bg-white text-sm font-semibold mt-5 w-full hover:border-picto-primary hover:text-picto-primary transition-all"
          >
            See More
            <span className="ms-2">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
        </div>
      </div>

      {/* Image enlargement modal */}
      {enlargedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
            onClick={closeImageModal} 
          />
          <div 
            className="relative max-w-4xl max-h-[90vh] z-10" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeImageModal}
              className="absolute -top-10 -right-0 text-white text-3xl font-bold z-20 hover:text-gray-300"
            >
              &times;
            </button>
            <img 
              src={enlargedImage} 
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
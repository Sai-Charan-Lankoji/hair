import { useState } from 'react';
import { Play } from 'lucide-react';

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full h-screen">
      {!isPlaying ? (
        <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
          <img
            src="https://www.hairoriginals.com/cdn/shop/files/banner-video.png?v=1717651917&width=1500"
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center hover:bg-opacity-40 transition-all">
            <div className="w-20 h-20 rounded-full bg-white bg-opacity-80 flex items-center justify-center hover:scale-110 transition-transform">
              <Play className="w-10 h-10 text-gray-800 ml-1" />
            </div>
          </div>
        </div>
      ) : (
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/SN-vg3d3AU4?autoplay=1"
          title="बाल Hua चांदी se Mehenga! | Shark Tank India | Hair Originals | Full Pitch"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default VideoPlayer;
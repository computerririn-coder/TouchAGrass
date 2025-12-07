import { useRef, useEffect } from "react";

interface BackgroundVideoProps {
  background: string;
}

function BackgroundVideo({ background }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Restore previous playback time on mount
  useEffect(() => {
    const savedTime = localStorage.getItem("bgVideoTime");
    if (videoRef.current && savedTime) {
      videoRef.current.currentTime = Number(savedTime);
    }

    const handleTimeUpdate = () => {
      if (videoRef.current) {
        localStorage.setItem("bgVideoTime", videoRef.current.currentTime.toString());
      }
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("timeupdate", handleTimeUpdate);
    }

    // Clean up listener on unmount
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={background}
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
    />
  );
}

export default BackgroundVideo;

function BackgroundVideo({background}) {
    return ( 
              <video
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
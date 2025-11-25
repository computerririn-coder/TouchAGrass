import Marquee from "react-fast-marquee";

function Instructioncarousel() {
    return ( 
            <Marquee gradient={false} speed={50} loop={0}>
          <span className="mx-4">0 - placeholder:1</span>
          <span className="mx-4">1 - placeholder:2</span>
          <span className="mx-4">2 - placeholder:3</span>
          <span className="mx-4">3 - placeholder:5</span>
          <span className="mx-4">4 - placeholder:5</span>
          <span className="mx-4">5 - placeholder:6</span>
          <span className="mx-4">6 - placeholder:6</span>
          <span className="mx-4">7 - placeholder:6</span>
        </Marquee>
     );
}

export default Instructioncarousel;
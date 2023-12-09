import { useEffect, useState } from "react"
import { ArrowUpIcon } from "../assets/allIcons";


const BackToTop = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        // Check if the user has scrolled beyond a certain threshold (e.g., 70 pixels)
        const isScrolling = window.scrollY > 70;
        setScrolling(isScrolling);
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    };

  return (
    
    <div>
        {scrolling && ( 
            <button 
                className="bg-coral-red rounded-full p-1"
                onClick={scrollToTop}
            >
                <ArrowUpIcon className={"w-8 h-8 text-coral-red fill-white"}/>
            </button>
        )}
    </div>
  )
}

export default BackToTop
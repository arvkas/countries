import { useEffect, useState } from "react";

export function useWindowSize() {   //getWindowSize if you want to say this  hook need to write fun with use
    const [windowSize, setWindowSize] = useState({width:window.innerWidth, height:window.innerHeight});
    // console.log(ThemeContext)
    // //To use context we use useContext hook
    // const a = useContext(ThemeContext)

    useEffect(() => {
      window.addEventListener('resize', () => {
        setWindowSize({width:window.innerWidth, height:window.innerHeight})
      })
      return () => {
        console.log('Home component unmounted or about to update');
      };
    }, []);

    return windowSize;

}
import { useEffect } from "react";
import Introduction from "../components/Introduction";
import MenuSection from "../components/MenuSection";
import { useScreenSize } from "../context/ScreenSizeContext";
const Homepage = () => {
    const { setPage } = useScreenSize();
    useEffect(() => {
        setPage('homepage');
        window.scrollTo(0, 0);
    }, []);

    return(
        <div>
            <Introduction />
            <MenuSection />
        </div>
    );
};

export default Homepage;
import { useEffect } from "react";
import Introduction from "../components/Introduction";
import MenuSection from "../components/MenuSection";
import { useScreenSize } from "../context/ScreenSizeContext";
const Homepage = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const { setPage } = useScreenSize();
    useEffect(() => {
        setPage('homepage');
        const scrollToTopTimeout = setTimeout(handleScrollToTop, 300);
        return () => clearTimeout(scrollToTopTimeout);
    }, []);

    return(
        <div>
            <Introduction />
            <MenuSection />
        </div>
    );
};

export default Homepage;
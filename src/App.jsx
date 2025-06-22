import { Suspense, lazy, useEffect } from "react";
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const AppRoutes = lazy(() => import("./routes/AppRoutes"));
const Alert = lazy(() => import("./components/Alert"));
const Loading = lazy(() => import("./pages/Loading"));
import { AlertProvider } from "./context/alertContext";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Lenis from '@studio-freight/lenis';//smooth scrolling

const App=()=> {
  useEffect(() => {
    const lenis = new Lenis({
        duration: 0.55, // Set smooth scroll duration to 0.3 seconds
    });// Initialize Lenis for smooth scrolling
    function raf(time) {
      lenis.raf(time);// Update Lenis with the current frame time
      requestAnimationFrame(raf);// Request the next animation frame
    }
    requestAnimationFrame(raf);
    // Cleanup function
    return () => {
      lenis.destroy();
    };
  }, []);//runs once on mount
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: '#ffffff', // Set the background color to white
          color: '#333333', // Optional: Set the text color to black for contrast
        },
      },
    },
  });
  return(
    <ChakraProvider theme={theme}>
      <Suspense fallback={<Loading />}>
        <AlertProvider>
          <Header />
          <AppRoutes />
          <Footer />
          <Alert />
        </AlertProvider>
      </Suspense>
    </ChakraProvider>
  );
}

export default App;

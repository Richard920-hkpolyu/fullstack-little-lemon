import { VStack } from "@chakra-ui/react";

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
    return (
       <VStack
        backgroundColor={boxProps.backgroundColor}
        color={isDarkBackground ? "white" : "black"}
        padding="10px"
       >
           <VStack maxWidth={{base: "100vw" , md: "90vw" }} minHeight="80vh" {...boxProps}>
               {children}
           </VStack>
       </VStack>
    );
   };
export default FullScreenSection;
import {
  createContext,
  useContext,
  useState,
  useMemo,
} from "react";
import useConfetti from "../hooks/Confetti";
const ScreenSizeContext = createContext();

const ScreenSizeProvider = ({ children }) => {
  const fireConfetti = useConfetti();

  const [page, setPage] = useState('');

  const contextValue = useMemo(
    () => ({
      fireConfetti,
      page,
      setPage,
    }),
    [
      fireConfetti,
      page,
      setPage,
    ]
  );
  return (
    <ScreenSizeContext.Provider value={contextValue}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useScreenSize = () => useContext(ScreenSizeContext);

export default ScreenSizeProvider;

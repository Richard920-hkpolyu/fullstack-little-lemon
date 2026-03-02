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
  const [place, setPlace] = useState(0);
  const contextValue = useMemo(
    () => ({
      fireConfetti,
      page,
      setPage,
      place,
      setPlace,
    }),
    [
      fireConfetti,
      page,
      setPage,
      place,
      setPlace,
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

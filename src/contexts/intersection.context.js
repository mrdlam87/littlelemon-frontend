import { createContext, useState } from "react";

export const IntersectionContext = createContext({
  heroInView: false,
  setHeroInView: () => {},
});

export const IntersectionProvider = ({ children }) => {
  const [heroInView, setHeroInView] = useState(false);

  const value = {
    heroInView,
    setHeroInView,
  };

  return (
    <IntersectionContext.Provider value={value}>
      {children}
    </IntersectionContext.Provider>
  );
};

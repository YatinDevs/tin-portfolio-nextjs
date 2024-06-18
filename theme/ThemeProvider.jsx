// "use client";

// import React from "react";
// import  useModalStore  from "../store/themeStore";

// const ThemeProvider = ({ children }) => {
//   const { darkMode } = useModalStore();
//  console.log(darkMode);

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       {children}
//     </div>
//   );
// };

// export default ThemeProvider;
"use client";
import { ThemeProvider } from "next-themes";

import React from "react";

function ThemeinProvider({ children }) {
  return (
    <>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </>
  );
}

export default ThemeinProvider;

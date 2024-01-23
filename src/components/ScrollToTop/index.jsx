import { useHistoryState } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever a new page is navigated
    const element = document.getElementById("top"); // Add an id="top" to an element at the top of your page
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;

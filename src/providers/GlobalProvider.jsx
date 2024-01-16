import AppLayout from "@/layouts/AppLayout";
import routers from "@/routers/routers";
import { useRoutes } from "react-router-dom";

const GlobalProvider = () => {
  const RouterComponent = () => useRoutes(routers);
  return (
    <>
      <RouterComponent />
    </>
  );
};

export default GlobalProvider;

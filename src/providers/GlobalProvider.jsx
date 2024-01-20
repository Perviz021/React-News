import AppLayout from "@/layouts/AppLayout";
import routers from "@/routers/routers";
import { useRoutes } from "react-router-dom";

const GlobalProvider = () => {
  const routersArr = routers.map((router) => {
    if (router.layout === "AppLayout") {
      router.element = <AppLayout>{router.element}</AppLayout>;
      return router;
    }
  });

  const RouterComponent = () => useRoutes(routersArr);

  return (
    <>
      <RouterComponent />
    </>
  );
};

export default GlobalProvider;

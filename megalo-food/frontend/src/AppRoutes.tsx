import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout>HomePage</Layout>} />
      <Route path="/UserProfile" element={<span>Pagina de usuario</span>} />
    </Routes>
  );
};
export default AppRoutes;

import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout/Layout";

import MainPage from "../components/MainPage/MainPage";
import Main from "../pages/Main/Main";
import RealEstatePage from "../pages/realEstatePage/realEstatePage";
import Appartment from "../pages/Appartments/Appartments";
import Cars from "../pages/Cars/Cars";
import Jobs from "../pages/Jobs/Jobs";
import JobsPage from "../pages/JobsPage/JobsPage";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="apartments" element={<Appartment />} />
          <Route path="cars" element={<Cars />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path=":id/:title" element={<Main />} />
          <Route path=":id/:title/jobs" element={<JobsPage/>}/>
          <Route path="house" element={<RealEstatePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;

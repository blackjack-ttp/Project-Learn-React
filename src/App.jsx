/* eslint-disable no-unused-vars */
import { Route, Routes, useRoutes } from 'react-router-dom';
import './App.scss';
// --------------------- Navbar ---------------------
// import Navbar from '@/components/Navbar';
// --------------------- Pages ---------------------
// import Home from "@/pages/home/Home";
// import ProjectLayout from "@/pages/project/ProjectLayout";
// import UseStateLayout from "@/pages/useState/UseStateLayout";
// import UseEffectLayout from "@/pages/useEffect/UseEffectLayout";
// --------------------- Projects ---------------------
// import Project1 from "@/components/Projects/Project1";

// --------------------- UseState ---------------------
// import Count from "@/components/UseState/Exercise0";
// import FlagImage from "@/components/UseState/Exercise1";
// import ChangeStyleColor from "@/components/UseState/Exercise2";
// import FormRegister from "@/components/UseState/Exercise3";
// import Category from "@/components/UseState/Exercise4";
// --------------------- UseEffects ---------------------
// import Slide from "@/components/UseEffect/Exercise0";
// import Exercise1 from "@/components/UseEffect/Exercise1";
// import Exercise2 from "@/components/UseEffect/Exercise2";
// import NotFound from "@/pages/notFound";

import Routers from '@/routers';

function App() {
  return (
    <>
      <div className="App">
        {/* ----------- Navbar ------------ */}
        {/* <Navbar /> */}

        {/* Routers Main */}
        {/* <div className="App__main-page-content"> */}
        {/* <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/projects">
              <Route index element={<Projects />} />
              <Route path="project1" element={<Project1 />} />
            </Route>
            <Route path="/usestates">
              <Route index element={<UseStateLayout />} />
              <Route path="exercise0" element={<Count />} />
              <Route path="exercise1" element={<FlagImage />} />
              <Route path="exercise2" element={<ChangeStyleColor />} />
              <Route path="exercise3" element={<FormRegister />} />
              <Route path="exercise4" element={<Category />} />
            </Route>
            <Route path="/useeffects">
              <Route index element={<UseEffectLayout />} />
              <Route path="exercise0" element={<Slide />} />
              <Route path="exercise1" element={<Exercise1 />} />
              <Route path="exercise2" element={<Exercise2 />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes> */}
        <Routers />
        {/* </div> */}
      </div>
    </>
  );
}

export default App;

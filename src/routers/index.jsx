/* eslint-disable no-unused-vars */
import React from 'react';
import { useRoutes } from 'react-router-dom';

import Navbar from '@/components/Navbar';

// --------------------- Pages ---------------------
import Home from '@/pages/home/Home';
import ProjectLayout from '@/pages/projectPage/ProjectLayout';
import UseStateLayout from '@/pages/useStatePage/UseStateLayout';
import UseEffectLayout from '@/pages/UseEffectPage/UseEffectLayout';
// --------------------- Projects ---------------------
import Project1 from '@/components/Projects/Project1';

// --------------------- UseState ---------------------
import Count from '@/components/UseState/Exercise0';
import FlagImage from '@/components/UseState/Exercise1';
import ChangeStyleColor from '@/components/UseState/Exercise2';
import FormRegister from '@/components/UseState/Exercise3';
import Category from '@/components/UseState/Exercise4';
// --------------------- UseEffects ---------------------
import Slide from '@/components/UseEffect/Exercise0';
import Exercise1 from '@/components/UseEffect/Exercise1';
import Exercise2 from '@/components/UseEffect/Exercise2';
import NotFound from '@/pages/notFound';

const Routers = () => {
  let routes = useRoutes([
    {
      element: <Navbar />,
      children: [
        {
          path: '/',
          element: <Home />,
          index: true,
        },
        {
          path: 'projects',
          children: [
            {
              element: <ProjectLayout />,
              index: true,
            },
            {
              path: 'project1',
              element: <Project1 />,
            },
          ],
        },
        {
          path: 'usestates',
          children: [
            {
              index: true,
              element: <UseStateLayout />,
            },
            {
              path: 'exercise0',
              element: <Count />,
            },
            {
              path: 'exercise1',
              element: <FlagImage />,
            },
            {
              path: 'exercise2',
              element: <ChangeStyleColor />,
            },
            {
              path: 'exercise3',
              element: <FormRegister />,
            },
            {
              path: 'exercise4',
              element: <Category />,
            },
          ],
        },
        {
          path: 'useeffects',
          children: [
            {
              index: true,
              element: <UseEffectLayout />,
            },
            {
              path: 'exercise0',
              element: <Slide />,
            },
            {
              path: 'exercise1',
              element: <Exercise1 />,
            },
            {
              path: 'exercise2',
              element: <Exercise2 />,
            },
          ],
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ]);
  return routes;
};
export default Routers;

//* LIB
import { useRoutes } from 'react-router-dom';

//* ROUTER
import OutletRouter from './OutletRouter';

//* IMPORT
import {
  NavbarComponent,
  ProjectEx0Component,
  UseContextComponent,
  UseEffectEx0Component,
  UseEffectEx1Component,
  UseEffectEx2Component,
  UseStateEx0Component,
  UseStateEx1Component,
  UseStateEx2Component,
  UseStateEx3Component,
  UseStateEx4Component,
} from '@/imports/components';
import { HomePage, NotFoundPage, ProjectPage, UseEffectPage, UseStatePage } from '@/imports/pages';

const Routers = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: (
        <OutletRouter>
          <NavbarComponent />
        </OutletRouter>
      ),
      children: [
        {
          element: <HomePage />,
          index: true,
        },
        {
          path: 'projects',
          children: [
            {
              element: <ProjectPage />,
              index: true,
            },
            {
              path: 'project1',
              element: <ProjectEx0Component />,
            },
          ],
        },
        {
          path: 'usestates',
          children: [
            {
              index: true,
              element: <UseStatePage />,
            },
            {
              path: 'exercise0',
              element: <UseStateEx0Component />,
            },
            {
              path: 'exercise1',
              element: <UseStateEx1Component />,
            },
            {
              path: 'exercise2',
              element: <UseStateEx2Component />,
            },
            {
              path: 'exercise3',
              element: <UseStateEx3Component />,
            },
            {
              path: 'exercise4',
              element: <UseStateEx4Component />,
            },
          ],
        },
        {
          path: 'useeffects',
          children: [
            {
              index: true,
              element: <UseEffectPage />,
            },
            {
              path: 'exercise0',
              element: <UseEffectEx0Component />,
            },
            {
              path: 'exercise1',
              element: <UseEffectEx1Component />,
            },
            {
              path: 'exercise2',
              element: <UseEffectEx2Component />,
            },
          ],
        },
        {
          path: 'usecontext/*',
          element: <UseContextComponent />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);
  return routes;
};
export default Routers;

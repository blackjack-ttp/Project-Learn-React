//* LIB
import { useRoutes } from 'react-router-dom';
//* ROUTER CONTEXT
import OutletRouterContext from './OutletRouterContext';
//* IMPORT
import { NavbarComponentContext } from '../imports/component';
import {
  AboutPageContext,
  ContactPageContext,
  HomePageContext,
  LoginPageContext,
} from '../imports/page';

const RouterContext = () => {
  const element = useRoutes([
    {
      path: '/usecontext',
      element: (
        <OutletRouterContext>
          <NavbarComponentContext />
        </OutletRouterContext>
      ),
      children: [
        {
          index: true,
          element: <HomePageContext />,
        },
        {
          path: 'about',
          element: <AboutPageContext />,
        },
        {
          path: 'contact',
          element: <ContactPageContext />,
        },
        {
          path: 'login',
          element: <LoginPageContext />,
        },
      ],
    },
  ]);
  return element;
};

export default RouterContext;

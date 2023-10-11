//* LIB
import { Outlet } from 'react-router-dom';

const OutletRouterContext = ({ children }) => {
  return (
    <>
      {children}
      <Outlet />
    </>
  );
};

export default OutletRouterContext;

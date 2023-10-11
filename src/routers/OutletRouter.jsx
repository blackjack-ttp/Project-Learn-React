//* LIB
import { Outlet } from 'react-router-dom';

const OutletRouter = ({ children }) => {
  return (
    <>
      {children}
      <Outlet />
    </>
  );
};

export default OutletRouter;

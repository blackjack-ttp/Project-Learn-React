//* LIB
import { Suspense } from 'react';
//* ROUTER CONTEXT
import RouterContext from './routers';
//* STORE
import { AuthProvider } from './store';
//* IMPORT
import { LoadingComponentContext } from './imports/component';

const UserContext = () => {
  return (
    <>
      <Suspense fallback={<LoadingComponentContext />}>
        <AuthProvider>
          <RouterContext />
        </AuthProvider>
      </Suspense>
    </>
  );
};

export default UserContext;

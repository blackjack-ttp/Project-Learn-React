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
      <AuthProvider>
        <Suspense fallback={<LoadingComponentContext />}>
          <div className="app-context-wrapper">
            <RouterContext />
          </div>
        </Suspense>
      </AuthProvider>
    </>
  );
};

export default UserContext;

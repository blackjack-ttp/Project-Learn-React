//* HOOKS
import useAuth from '../../hooks/useAuth';

const LoginContext = () => {
  const { handleChangeUser } = useAuth();
  return (
    <>
      <h1>Login Context</h1>
      <button onChange={handleChangeUser}>Submit</button>
    </>
  );
};

export default LoginContext;

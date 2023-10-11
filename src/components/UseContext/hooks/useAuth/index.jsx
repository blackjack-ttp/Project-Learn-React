//* LIB
import { useContext } from 'react';

//* STORE
import { authContext } from '../../store';

export default function useAuth() {
  return useContext(authContext);
}

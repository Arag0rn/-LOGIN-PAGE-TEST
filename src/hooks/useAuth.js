import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn
} from '../Redux/Auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);


  return {
    isLoggedIn
  };
};

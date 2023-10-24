import { Link } from "react-router-dom";
 
import {  UserMenuWrapper, WelTxt } from './UserMenu.styled';

export const UserMenu = () => {


  return (
    <UserMenuWrapper >
      <WelTxt >Welcome, User</WelTxt>
    </UserMenuWrapper>
  );
};
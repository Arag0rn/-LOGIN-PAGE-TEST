
import {  Routes, Route} from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "pages/HomePage";
import { LogPage } from "pages/LogPage";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { TablePage } from "pages/TablePage";



export const App =()=>{
  return(
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />} /> 
        <Route path="/login"  element={
          <RestrictedRoute redirectTo="/table-page" component={<LogPage />} />} />
        <Route path="/table-page" element={
          <PrivateRoute redirectTo="/login" component={<TablePage />} />} />
      </Route>
    </Routes> 
 )

}


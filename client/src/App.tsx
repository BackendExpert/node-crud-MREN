import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Users/Users";
import CreateUser from "./Users/CreateUser";
import UpdateUser from "./Users/UpdateUser";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Users" element={<Users />} ></Route>
        <Route path="/Users/Create" element={<CreateUser />} ></Route>
        <Route path="/Users/Update" element={<UpdateUser />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Users/Users";
import CreateUser from "./Users/CreateUser";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Users" element={<Users />} ></Route>
        <Route path="/Users/Create" element={<CreateUser />} ></Route>
        
      </Routes>
    </BrowserRouter>
  )
}
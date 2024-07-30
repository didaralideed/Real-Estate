import { BrowserRouter, Routes,Route } from "react-router-dom"
import SignUp from "./pages/SignUp"
import Sigin from "./pages/SignIn"
import About from "./pages/About"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"

export default function App() {
  return <BrowserRouter>
  <div>Home</div>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/gign-up" element={<SignUp/>}/>
   <Route path="/sign-in" element={<SignIn/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/profile" element={<Profile/>}/>
  </Routes>
  </BrowserRouter>
}

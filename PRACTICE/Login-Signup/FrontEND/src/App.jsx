import { BrowserRouter , Route , Routes } from "react-router-dom"
import Body from "./Components/Body"
import Login from "./Components/login";
import Signup from "./Components/signup"
import Profile from "./Components/profile"
function App() {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element = {<Profile/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/signup" element = {<Signup/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App

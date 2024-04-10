import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInpage from "./Signin/SignInpage";
import Signuppage from "./SignUp/Signuppage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/SignInpage" element={<SignInpage />} />
          <Route path="/Signuppage" element={<Signuppage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

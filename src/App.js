import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInpage from "./Signin/SignInpage";
import Signuppage from "./SignUp/Signuppage";
import { useEffect, useState } from "react";
import Homepage from "./User-Side/Homepage";
// import { auth } from "./Firebaseconfig";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import Dashboard from "./Admin-side/pages/Dashboard";
import Addcategory from "./Admin-side/pages/Addcategory";
function App() {
  const auth = getAuth();
  const [isLoading, setIsloading] = useState(false);
  const [UserName, setUserName] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(`${user?.displayName}`);
      } else {
        setUserName(null);
      }
    });
  }, [auth, auth.currentUser]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                setIsloading={setIsloading}
                isLoading={isLoading}
                UserName={UserName}
              />
            }
          />
          <Route
            path="/SignInpage"
            element={
              <SignInpage setIsloading={setIsloading} isLoading={isLoading} />
            }
          />
          <Route
            path="/Signuppage"
            element={
              <Signuppage setIsloading={setIsloading} isLoading={isLoading} />
            }
          />
          <Route
            path="/Admin/Dashboard"
            element={
              <Dashboard setIsloading={setIsloading} isLoading={isLoading} />
            }
          />
          <Route
            path="/Admin/Addcategory"
            element={
              <Addcategory setIsloading={setIsloading} isLoading={isLoading} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

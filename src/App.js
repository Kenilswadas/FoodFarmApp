import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInpage from "./Signin/SignInpage";
import Signuppage from "./SignUp/Signuppage";
import { useEffect, useState } from "react";
import Homepage from "./User-Side/Homepage";
import { auth } from "./Firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
function App() {
  const [isLoading, setIsloading] = useState(false);
  const [UserName, setUserName] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.displayName);
        setUserName(user?.displayName);
      } else {
        setUserName(null);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth?.currentUser]);
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

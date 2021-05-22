import React, { useEffect } from "react";
import Login from "./Login";

import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "./userSlice";
import { auth } from "./Firebase";
import Home from "./Home";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        // the user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        // the user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <header className="app__header">{user ? <Home /> : <Login />}</header>
    </div>
  );
}

export default App;

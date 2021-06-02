import { auth, provider } from "./Firebase";

import React from "react";

function Login() {
  const loginUser = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  const loginGuest = () => {
    auth
      .signInAnonymously()
      .then()
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <button onClick={loginUser}>Login with Google</button>
      <button onClick={loginGuest}>Login as a Guest</button>
    </div>
  );
}

export default Login;

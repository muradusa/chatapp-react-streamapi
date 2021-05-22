import { auth, provider } from "./Firebase";

import React from "react";

function Login() {
  const loginUser = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div>
      <button onClick={loginUser}>Login with Google</button>
    </div>
  );
}

export default Login;

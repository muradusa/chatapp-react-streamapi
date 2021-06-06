import { auth, provider } from "./Firebase";

import React from "react";

export default function Login() {
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
    // <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"> */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-md mb-10">
          <img
            className="mx-auto h-12 w-auto mb-10"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-6">
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div>
              <a
                onClick={loginUser}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Sign in with Google</span>
                <p className="flex w-15 h-5">Google Login</p>
              </a>
            </div>

            <div>
              <a
                onClick={loginGuest}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Sign in as a Guest</span>
                <p className="w-15 h-5">Guest Login</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

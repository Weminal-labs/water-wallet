import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

export const AddAccountPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    chrome.runtime.sendMessage({
      type: "GET_ACCESS_TOKEN"
    }, (response) => {
      console.log('response', response)
    })
  }

  // const handleGetUserInfo = () => {
  //   chrome.runtime.sendMessage({
  //     type: "GET_USER_INFO"
  //   }, (response) => {
  //     console.log('response', response)
  //   })
  // }

  // const handleSignOut = () => {
  //   chrome.runtime.sendMessage({
  //     type: "SIGN_OUT"
  //   }, (response) => {
  //     console.log('response', response)
  //   })
  // }

  return (
    <div className="h-full fixed inset-0 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-full max-w-md h-screen flex flex-col">
        <div className="bg-gray-100 bg-opacity-90 py-4 rounded-t-lg relative">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Add Account</h2>
        </div>

        <div className="p-3 overflow-y-auto flex-grow">
          <Button onClick={handleLogin} variant="outline" className="w-full mb-2 flex items-center">
            <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
            Sign in with Google
          </Button>

          {/* <Button onClick={handleGetUserInfo} variant="outline" className="w-full mb-2 flex items-center">
            <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
            Get User Info
          </Button>

          <Button onClick={handleSignOut} variant="outline" className="w-full mb-2 flex items-center">
            <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
            Sign Out
          </Button> */}

          <Button variant="outline" className="w-full mb-4 flex items-center">
            <img src="/ledger-icon.png" alt="Ledger" className="w-5 h-5 mr-2" />
            Set up Ledger
          </Button>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-sm text-gray-500">CREATE NEW</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <Button variant="outline" className="w-full mb-2" onClick={() => { navigate('/create-account-success') }}>
            Create a new Passphrase Account
          </Button>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-sm text-gray-500">IMPORT EXISTING ACCOUNTS</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <Button variant="outline" className="w-full mb-2">
            Import Passphrase
          </Button>

          <Button variant="outline" className="w-full">
            Import Private Key
          </Button>


        </div>
        <Button
          className="w-full"
          onClick={() => { navigate('/') }}
        >
          X
        </Button>
      </div>
    </div>
  );
};

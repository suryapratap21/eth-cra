import { useEffect } from "react";

import "./App.css";

function App() {
  useEffect(() => {
    console.log(window.web3);
  }, []);

  return (
    <div className="h-full flex justify-center items-center">
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-700 sm:text-4xl dark:text-white">
            Join us and get the update <br /> from anywhere
          </h2>

          <div className="mt-6 sm:-mx-2">
            <div className="inline-flex w-full sm:w-auto sm:mx-2">
              <div
              onClick={async () => {
                const accounts = await window.ethereum.request({method: "eth_requestAccounts"})
                console.log("accounts: ", accounts)
              }}
              className="cursor-pointer inline-flex items-center justify-center w-full px-5 py-2 text-gray-700 transition-colors duration-150 transform bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:text-white sm:w-auto dark:hover:bg-gray-800 dark:ring-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                Connect Account
              </div>
            </div>

            <div className="inline-flex w-full sm:w-auto sm:mx-2">
              <div className="cursor-pointer inline-flex items-center justify-center w-full px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Deposit
              </div>
            </div>

            <div className="inline-flex w-full mt-4 sm:w-auto sm:mx-2 sm:mt-0">
              <div className="cursor-pointer inline-flex items-center justify-center w-full px-5 py-2 text-gray-700 transition-colors duration-150 transform bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:text-white sm:w-auto dark:hover:bg-gray-800 dark:ring-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                Withdraw
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

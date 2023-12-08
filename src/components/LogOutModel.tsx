import React from 'react';
import { Link } from 'react-router-dom';

const Model = ({openLogoutModel}:any) => {
  return (
    <div className="error-modal fixed inset-0 overflow-hidden bg-black bg-opacity-50 z-50">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p className="text-red-500">You are logout from your investment broker account, please login again.</p>
          <a href={'https://www.interactivebrokers.co.in/sso/Login?RL=1'}
            onClick={openLogoutModel}
            className="mt-4 bg-red-500 hover:bg-red-700 text-[#7262c5] font-bold py-2 px-4 rounded"
          >
            Login Again
          </a>
        </div>
      </div>
    </div>
  );
};

export default Model;

import React from 'react';
import Navbar from '../Navbar';
import Navtop from '../Navtop';

function Commodity() {
  return (
    <div className="flex h-screen">
      <div className="p-4 navbar_css border-r">
        <Navbar />
      </div>
      <div className="main-body_css">
        <div className="nav-top_css border-b flex justify-end">
          <Navtop />
        </div>
        <div className="main-content_css">
          <div className="flex flex-col items-center">
            {/* Your commodity content goes here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commodity;

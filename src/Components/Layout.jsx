import React from 'react';
import './Layout.css';
export const Layout = () => {
  return (
    <div className="flex flex-0">
      <div className="flex-1 p-1">
        <div className="flex flex-2 img-1">
          <img src="images/logo192.png" alt="logo"></img>
          <div className="mg-1 h-1 bg-orange"></div>
          <div className="mg-1 h-1 bg-orange"></div>
          <div className="mg-1 h-1 bg-orange"></div>
          <div className="mg-1 h-1 bg-orange"></div>
        </div>
        <div className="h-1 mg-1 bg-red flex-3"></div>
      </div>
      <div className="flex-4">
        <div className="topbar">
          <div className="topbar-box"></div>
          <img classname="top-image" src="images/user--v3.png" alt="user" />
        </div>
        <div className="bottombar">
          <div className="boxes">
            <div className="box-1">
              <div className="box-3">
                <div className="innerboxes-3"></div>
                <div className="innerboxes-3"></div>
                <div className="innerboxes-3"></div>
              </div>
              <div className="box-4"></div>
            </div>
            <div className="box-1">
              <div className="box-3">
                <div className="innerboxes-3"></div>
                <div className="innerboxes-3"></div>
                <div className="innerboxes-3"></div>
              </div>
              <div className="box-4"></div>
            </div>
          </div>
          <div className="grid-bottom">
            <div className="grid-box"></div>
            <div className="grid-box"></div>
            <div className="grid-box"></div>
            <div className="grid-box"></div>
          </div>
          {/* <div className="froggy">
            <div className="froggy-box"></div>
            <div className="froggy-box"></div>
            <div className="froggy-box"></div>
            <div className="froggy-box"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

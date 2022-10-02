import { useState, useEffect } from "react";
import "./landing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from 'react';
import { useNavigate } from "react-router-dom";

const Landing = () => {
    let navigate = useNavigate();
  return (
    <div className="row">
      <div className="col-6 landing-main2">
        <div className="col-6 landing-image2">
          <img
            className=""
            style={{marginTop:"100px"}}
            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221002T050205Z&X-Amz-Expires=86400&X-Amz-Signature=11a1f3544d169d1fe543538c8b229fb0af4b44f5471a61eb63168428cf10a1ae&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
          />
        </div>
      </div>

      <div className="col-6 text-main">
        <div className="text-main-2">
          <div className="imagine">Imagine if</div>
          <div className="snapchat">Snapchat</div>
          <div className="events">had events.</div>
          <div className="text-sub">
            Easily host and share events with your friends
          </div>
          <div className="text-sub">across any social media.</div>
          <div>
            <button className="button-create form-control" onClick={()=>{
                navigate("create");
            }}>
            <div>
            🎉 Create my event
            
            </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

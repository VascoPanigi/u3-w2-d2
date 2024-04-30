import React from "react";

const MyHero = () => {
  return (
    <div style={{ paddingLeft: 0 }}>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1510218830377-2e994ea9087d?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          height: 400,
        }}
      >
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3 mt-5">Fantasy</h1>
              <h4 className="mb-3">Our collection</h4>
              <a className="btn btn-outline-light btn-lg" href="#!" role="button">
                Shop Now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyHero;

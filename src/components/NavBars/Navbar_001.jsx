import React from "react";
import '../../css/NavBars/Navbar_001.css'

export const Navbar_001 = ({iconNavBar, openNavBar}) => {
  return (
    <header className="header1 dflex">
        <div className="contentNav dflex daling-center djustify-spacebetween">
            <i className={`bx ${iconNavBar}`} onClick={openNavBar}></i>
            <h1>DAMARSHA</h1>
            <section className="actionsLinks dflex">
                <i className='bx bx-cart'></i>
                <i className='bx bx-heart' ></i>
            </section>
        </div>
    </header>
  );
};

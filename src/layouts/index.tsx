import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/swlogo.svg";
import styles from "./index.module.scss";

class MainLayout extends Component {
  render() {
    return (
      <>
        <div className={styles.main}>
          <header className="flex justify-around items-center">
            <div className={styles.logo}>
              <img src={logo} alt="Star Wars" />
            </div>
            <div>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/favourites" className="ml-2">Favourites</NavLink>
            </div>
          </header>
          <section className={styles.main_wrapper}>
            {this.props.children}
          </section>
        </div>
      </>
    );
  }
}

export default MainLayout;

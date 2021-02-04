import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Loading from "./Loading";

const Menu = () => {
  const { menu, loading, error } = useGlobalContext();

  if (menu.length < 1) {
    return <h1 className="no">no meal found</h1>;
  }
  if (loading) {
    return <Loading />;
  }

  if (error) throw error;

  return (
    <div>
      <div className="menu-container">
        {menu.map((item) => {
          return (
            <div key={item.id} className="menu">
              <div className="img-container">
                <img src={item.image} alt={item.meal} />
              </div>
              <div className="menu-content">
                <h2>{item.meal}</h2>
                <p> {item.origin} </p>
                <Link className="menu-links" to={`/${item.id}`}>
                  Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;

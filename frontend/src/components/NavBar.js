import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

<<<<<<< HEAD
=======
import publicCss from "../public.module.css";
>>>>>>> a8a068809179321f989551c6dbdef68b17559fa9
const API_URL = process.env.REACT_APP_API_URL;

export default function NavBar() {
  const [CategoryData, setCategoryData] = useState([]);
  const [isError, setError] = useState(false);
  useEffect(() => {
    axios
      .get(`${API_URL}/api/category`)
      .then(({ data }) => {
        setCategoryData(data.CategoryData);
      })
      .catch((err) => {
        setError(true);
        console.log(`Error in getting category from Server ${err}`);
      });
  }, []);

  return (
<<<<<<< HEAD
    <nav className="row">
      {isError && <Redirect to="/signin"></Redirect>}
      <div>
        {CategoryData.map((category) => (
          <div className="dropdown">
            <Link to={`/products/${category._id}`}>
              {category.categoryName} <i className="fa fa-caret-down"></i>
            </Link>
            <ul className="dropdown-content">
=======
    <nav className={`${publicCss.nav} row`}>
      {isError && <Redirect to="/signin"></Redirect>}
      <div>
        {CategoryData.map((category) => (
          <div className={publicCss.dropdown}>
            <Link to={`/products/${category._id}`}>
              {category.categoryName} <i className="fa fa-caret-down"></i>
            </Link>
            <ul className={publicCss.dropdownContent}>
>>>>>>> a8a068809179321f989551c6dbdef68b17559fa9
              {category.subcategories.map((subCat) => (
                <li key={subCat.id}>
                  <Link to={`/products/${category._id}/${subCat._id}`}>
                    {subCat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}

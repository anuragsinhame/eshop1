import React, { useState } from "react";

import adminCss from "../admin.module.css";
import Categories from "../components/Categories";
import Products from "../components/Products";
import SubCategories from "../components/SubCategories";

export default function ManageProdsDataScreen() {
  const [activeModule, setActiveModule] = useState("");
  // setActiveModule(props.DefaultModule);
  return (
    <>
      <div className={adminCss.mainComponentHeader}>
        <button
          className={adminCss.cardSimple_a}
          onClick={() => {
            setActiveModule("cat");
          }}
        >
          <div className={adminCss.cardSimple}>Manage Categories</div>
        </button>
        <button
          className={adminCss.cardSimple_a}
          onClick={() => {
            setActiveModule("subCat");
          }}
        >
          Manage Sub Categories
        </button>
        <button
          className={adminCss.cardSimple_a}
          onClick={() => {
            setActiveModule("products");
          }}
        >
          <div className={adminCss.cardSimple}>Manage Products</div>
        </button>
      </div>

      {activeModule === "cat" && <Categories />}
      {activeModule === "subCat" && <SubCategories />}
      {activeModule === "products" && <Products />}
    </>
  );
}

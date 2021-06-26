import React, { useEffect, useState } from "react";
import axios from "axios";

import adminCss from "../admin.module.css";

// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import ProductCard from "../components/ProductCard";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";
import Modal from "../../components/Modal";
import { uploadUnsignedImage } from "../../utilities/ImageUpload";
// import { listProducts } from "../actions/productActions";
// import data from "../data";  //local import commented

// import { StoreConstants } from "../storeData";
const API_URL = process.env.REACT_APP_API_URL;
const STATIC_HOST = process.env.REACT_APP_STATIC_HOST_URL;

export default function Products() {
  const [newProduct, setNewProduct] = useState({
    name: null,
    image: null,
    brand: null,
    description: null,
    price: null,
    countInStock: null,
    discount: null,
  });
  let updated = 0;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isProdEditModal, setIsProdEditModal] = useState(false);
  const [isProdAddModal, setIsProdAddModal] = useState(false);
  // const [editing, setEditing] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("1");
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [productToEdit, setProductToEdit] = useState({
    _id: null,
    name: null,
    image: null,
    brand: null,
    description: null,
    price: null,
    countInStock: null,
    discount: null,
  });
  const [products, setProducts] = useState([]);
  const [prodImage, setProdImage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      let dbCategoriesRes = await axios.get(`${API_URL}/api/category`);
      setCategories(dbCategoriesRes.data.CategoryData);
      let dbSubCategories = dbCategoriesRes.data.CategoryData.find(
        (category) => category._id === +selectedCategory
      );
      // console.log("dbsffgw", dbSubCategories);
      setSubCategories(dbSubCategories.subCategories);
      if (!selectedSubCategory) {
        setSelectedSubCategory(dbSubCategories.subCategories[0]._id);
      }
      console.log("CategorySe", selectedSubCategory);
      try {
        setError("");
        let dbProductsRes = await axios(
          `${API_URL}/api/products/category/${selectedCategory}/subCategory/${selectedSubCategory}`
        );
        const { data } = dbProductsRes;
        setProducts(data.products);
      } catch (error) {
        console.log("Error");
        setError("No Products to display");
        // setProducts([]);
      }
      setLoading(false);
    }
    fetchData();
    console.log(updated);
    // console.log("Categories", categories);
    // console.log("CategoriesField", categoryFieldState);
  }, [selectedCategory, selectedSubCategory, updated]);

  const editProduct = (prodId) => {
    setIsProdEditModal(true);
    let editedProd = products.find((product) => product._id === prodId);
    // console.log("EDIFEKGK", editedProd);
    setProductToEdit(editedProd);
  };

  const updateProduct = async () => {
    console.log("Product updated in DB", productToEdit.name);
    setLoading(true);
    try {
      const uploadImgData = await uploadUnsignedImage(prodImage, "e6zcsf21");
      console.log("uploadImgData", uploadImgData);

      console.log("Update Product", uploadImgData.url);
      const productToUpdate = { ...productToEdit, image: uploadImgData.url };
      await axios.put(`${API_URL}/api/products/updateProduct`, {
        ...productToUpdate,
      });
      updated += 1;
    } catch (error) {
      console.log("Error in uploading image", error);
    }
    setLoading(false);
    alert("Product Added");
    setIsProdEditModal(false);
  };

  const addProduct = async () => {
    console.log("Product added in DB", newProduct.name);
    setLoading(true);
    try {
      const uploadImgData = await uploadUnsignedImage(prodImage, "e6zcsf21");
      console.log("uploadImgData", uploadImgData);

      console.log("Update Product", uploadImgData.url);
      const productToAdd = {
        ...newProduct,
        image: uploadImgData.url,
        category: selectedCategory,
        subCategory: selectedSubCategory,
        rating: 5,
        numReviews: 0,
      };
      await axios.post(`${API_URL}/api/products/addProduct`, {
        ...productToAdd,
      });
      updated += 1;
    } catch (error) {
      console.log("Error in uploading image", error);
    }
    setLoading(false);
    alert("Product Added");
    setIsProdAddModal(false);
  };

  const deleteProduct = async (prodId) => {
    setLoading(true);
    await axios.delete(`${API_URL}/api/products/deleteProduct`, {
      data: { prodId },
    });
    setLoading(false);
    alert("Product Deleted");
  };

  return (
    <div className={adminCss.mainComponent}>
      <div>
        <h3>Manage Products</h3>
        <div className={adminCss.selectDiv}>
          <label htmlFor="category">Select Category</label>
          <select
            name="category"
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.categoryName}
              </option>
            ))}
          </select>
        </div>
        <div className={adminCss.selectDiv}>
          <label htmlFor="subCategory">Select Sub Category</label>
          <select
            name="subCategory"
            id="subCategory"
            value={selectedSubCategory}
            onChange={(e) => setSelectedSubCategory(e.target.value)}
          >
            {subCategories.map((subCat) => (
              <option key={subCat._id} value={subCat._id}>
                {subCat.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button type="button" onClick={() => setIsProdAddModal(true)}>
            Add New Product
          </button>
        </div>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className={adminCss.prods}>
            <div className="prods-header">
              {/* <div>Prod Id</div>
              <div>Category Id</div> */}
              <div>Product Image</div>
              <div>Product Name</div>
              <div>Brand</div>
              <div>Stock</div>
              <div>Edit Product</div>
              <div>Delete Product</div>
            </div>
            {products.map((product) => (
              <div className="prods-data" key={product._id}>
                <div className="prodImg">
                  <img
                    className={adminCss.adminImg}
                    src={STATIC_HOST + product.image}
                    alt={product.name}
                  />
                </div>
                <div className="prodName">
                  <input
                    className="w100"
                    type="text"
                    name="prodName1"
                    placeholder="Product Name"
                    value={product.name}
                    disabled
                  />
                </div>
                <div className="brandText">
                  <input
                    className="w100"
                    type="text"
                    name="brand"
                    placeholder="Brand"
                    value={product.brand}
                    disabled
                  />
                </div>
                <div className="stockText">
                  <input
                    className="w100"
                    type="text"
                    name="stock1"
                    placeholder="Stock"
                    value={product.countInStock}
                    disabled
                  />
                </div>
                <div className="catEdit">
                  <button
                    className="w100"
                    type="button"
                    onClick={(e) => editProduct(product._id)}
                  >
                    Edit
                  </button>
                </div>
                <div className="catDelete">
                  <button
                    className="w100"
                    type="button"
                    onClick={(e) => deleteProduct(product._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <Modal
          title="Edit Products"
          onClose={(e) => setIsProdEditModal(false)}
          show={isProdEditModal}
        >
          <div className={adminCss.prodModal}>
            <div>
              <label htmlFor="prodId">Image</label>
              <input
                type="file"
                name="prodImage"
                id="prodImage"
                onChange={(e) => setProdImage(e.target.files[0])}
              />
            </div>
            <div>
              <label htmlFor="prodId">Name</label>
              <input
                type="text"
                value={productToEdit.name}
                onChange={(e) =>
                  setProductToEdit({ ...productToEdit, name: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="prodId">Brand</label>
              <input
                type="text"
                value={productToEdit.brand}
                onChange={(e) =>
                  setProductToEdit({ ...productToEdit, brand: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="prodId">Description</label>
              <input
                type="text"
                value={productToEdit.description}
                onChange={(e) =>
                  setProductToEdit({
                    ...productToEdit,
                    description: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="prodId">Price</label>
              <input
                type="text"
                value={productToEdit.price}
                onChange={(e) =>
                  setProductToEdit({ ...productToEdit, price: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="prodId">Discount</label>
              <input
                type="text"
                value={productToEdit.discount}
                onChange={(e) =>
                  setProductToEdit({
                    ...productToEdit,
                    discount: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="prodId">Stock</label>
              <input
                type="text"
                value={productToEdit.countInStock}
                onChange={(e) =>
                  setProductToEdit({
                    ...productToEdit,
                    countInStock: e.target.value,
                  })
                }
              />
            </div>
            <button type="button" onClick={(e) => updateProduct()}>
              Update
            </button>
          </div>
        </Modal>

        {/* Add New Product */}
        <Modal
          title="Add Products"
          onClose={(e) => {
            setIsProdAddModal(false);
            // setNewProduct({
            //   name: null,
            //   image: null,
            //   brand: null,
            //   description: null,
            //   price: null,
            //   countInStock: null,
            //   discount: null,
            // });
          }}
          show={isProdAddModal}
        >
          <div className={adminCss.prodModal}>
            <div>
              <label htmlFor="prodId">Image</label>
              <input
                type="file"
                name="prodImage"
                id="prodImage"
                onChange={(e) => setProdImage(e.target.files[0])}
              />
            </div>
            <div>
              <label htmlFor="prodId">Name</label>
              <input
                type="text"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="prodId">Brand</label>
              <input
                type="text"
                value={newProduct.brand}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, brand: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="prodId">Description</label>
              <input
                type="text"
                value={newProduct.description}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    description: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="prodId">Price</label>
              <input
                type="text"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="prodId">Discount</label>
              <input
                type="text"
                value={newProduct.discount}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    discount: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="prodId">Stock</label>
              <input
                type="text"
                value={newProduct.countInStock}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    countInStock: e.target.value,
                  })
                }
              />
            </div>
            <button type="button" onClick={(e) => addProduct()}>
              Add Product
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

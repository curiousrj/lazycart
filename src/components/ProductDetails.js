import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { addCart } from "../redux/actions";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);
  const Loading = () => {
    return (
      <React.Fragment>
        <div className="col-md-6 mt-4">
          <Skeleton height="400px" />
        </div>

        <div className="col-md-6 mt-4" style={{lineHeight:2}} >
          <Skeleton height={50} width="300px" />
          <Skeleton height={75} />
          <Skeleton height={25} width={300} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <div className="d-flex">
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{marginLeft:6}}/>
          </div>
        </div>
      </React.Fragment>
    );
  };

  const ShowProduct = () => {
    return (
      <React.Fragment>
        <div className="col-md-6 mt-4">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          ></img>
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark px-4 py2" onClick={()=> dispatch(addCart(product))}>Add To Cart</button>
          <NavLink to="/cart" className="btn btn-dark ms-2 px-2">
            Go To Cart
          </NavLink>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className="container py-5">
      <div className="row py-4">{loading ? <Loading /> : <ShowProduct />}</div>
    </div>
  );
};

export default ProductDetails;

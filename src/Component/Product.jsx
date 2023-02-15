import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  const filterProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList);
  };

  const ShowProduct = () => {
    const location = useNavigate();

    return (
      <>
        <div className="buttons d-flex justify-content-center p-0 mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            ALL
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Section
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Wonen's Section
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
        <div className="d-flex flex-wrap flex-grow-1 gap-2 justify-content-evenly">
          {filter.map((product) => {
            return (
              <div
                class="card mb-3 text-center col-sm-5 col-lg-3"
                key={product.id}
              >
                <div class="">
                  <div class="">
                    <p class="card-body">
                      <img
                        onClick={() => {
                          location(`/product/${product.id}`);
                        }}
                        src={product.image}
                        class="img-fluid rounded-start"
                        alt={product.title}
                        height="170px"
                        width="170px"
                      />
                      <h5 class="card-title mb-0">
                        {product.title.substring(0, 12)}
                      </h5>
                      <p class="card-text lead fw-bold">${product.price}</p>
                      <p class="card-text">
                        <small class="text-muted">
                          YOU CAN CLICK TO BUY NOW AND ADDED YOUR PRODUCT AND
                          YOU CAN RAATING IT TOO
                        </small>
                      </p>
                      <NavLink
                        to={"/cart"}
                        className="btn btn-outline-dark"
                        onClick={() => dispatch(addCart(product))}
                      >
                        buy now
                      </NavLink>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="m-3">
        <div className="row">
          <div className="col-12 mb=5">
            <h1 className="display-6 fw-bolder text-center">
              {" "}
              Latest Products{" "}
            </h1>
            <hr />
          </div>
        </div>
        <div className="justify-content-center">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;

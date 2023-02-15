import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
const Productss = () => {
  const { id } = useParams();
  const [productss, setProductss] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductss = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProductss(await response.json());
      setLoading(false);
    }
    getProductss();
  }, []);
console.log(loading)
  const Loading = () => {
    return <>Loading..........</>;
  };

  const ShowProductss = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={productss.image}
            alt={productss.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{productss.category}</h4>
          <h1 className="display-5">{productss.title}</h1>
          <p className="lead">
            Rating {productss.rating && productss.rating.rate}
            {[1, 1, 3, 4, 5].map((x) => (
              <i className={`fa fa-star ${x <= productss.rating.rate ? "text-warning" : ""} `}></i>
            ))}
          </p>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProductss />}</div>
      </div>
    </>
  );
};
export default Productss;

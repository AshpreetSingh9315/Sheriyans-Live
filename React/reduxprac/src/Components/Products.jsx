/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from '../store/reducers/ProductReducer';
import { getAsyncApiResponse } from "../store/actions/ProductsActions";

const Products = () => {
  const { products } = useSelector((state) => state.products);
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getProducts())
    dispatch(getAsyncApiResponse());
  }, [products]);

  return (
    <>
     <div className="cards m-10 flex text-white flex-wrap gap-8">
      {products && products.length > 0
        ? products.map((data, idx) => (
           
              <div key={idx} className="card w-60 bg-zinc-700 rounded-lg p-2">
                <div className="w-full h-40 bg-zinc-300 rounded-lg">
                    <img src={data.image} className="w-full h-full object-cover rounded-lg" alt="" />
                </div>
                <div className="card-data p-4">
                  <h1 className="text-2xl">{data.brand}</h1>
                  <p>{(data.description).slice(0,10)}</p>
                  <button className="text-sm bg-white px-4 py-1 rounded-lg text-black font-medium my-2">
                    Click
                  </button>
                </div>
              </div>
          ))
        : "Loading.."}
            </div>

    </>
  );
};

export default Products;

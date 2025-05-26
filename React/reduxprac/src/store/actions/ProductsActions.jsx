import axios from "axios";
import { getProducts } from "../reducers/ProductReducer";

export const getAsyncApiResponse = () => async (disptach, getState) => {
  console.log(getState());
  try {
    axios.get("https://fakestoreapi.in/api/products").then((res) => {
      disptach(getProducts(res.data.products));
    //   console.log(res.data.products);
    });
  } catch (error) {
    console.log(error);
  }
};

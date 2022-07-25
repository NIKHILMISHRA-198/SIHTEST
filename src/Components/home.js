import React, { useEffect, useState } from "react";
const axios = require("axios");

function Home() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/v1/products").then((res) => {
      setProduct(res.data.product);
    });
  }, []);

  return <div>{product[0].name}</div>;
}

export default Home;

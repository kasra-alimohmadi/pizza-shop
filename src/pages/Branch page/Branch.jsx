import Navar from "../../component/navar/Navar";
import { useEffect, useState } from "react";
import Product_card from "../../component/Product card/Product_card";
import Footer from "../../component/footer/Footer";
import PizzaLoader from "../../component/PizzaLoader/PizzaLoader";
import axios from "axios";

const API_URL = "http://localhost:3001";

function Branch() {
  const [footerData, setFooterData] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadPage() {
      try {
        const [productsResponse, footerResponse] = await Promise.all([
          axios.get(`${API_URL}/products`),
          axios.get(`${API_URL}/footer`),
        ]);

        setProducts(productsResponse.data);
        setFooterData(
          Array.isArray(footerResponse.data)
            ? footerResponse.data[0]
            : footerResponse.data
        );
      } catch (error) {
        console.error("Failed to load branch page:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadPage();
  }, []);
  return (
    <>
      <Navar />
      {isLoading ? <PizzaLoader /> : <Product_card products={products} />}
      <Footer data={footerData} />
    </>
  );
}
export default Branch;

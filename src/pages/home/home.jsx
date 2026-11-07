import Navar from "../../component/navar/Navar";
import { useEffect, useState } from "react";
import Slider from "../../component/slider/Slider";
import Product_card from "../../component/Product card/Product_card";
import Footer from "../../component/footer/Footer";
import PizzaLoader from "../../component/PizzaLoader/PizzaLoader";
import axios from "axios";

const API_URL = "http://localhost:3001";

function Home() {
  const [products, setProducts] = useState([]);
  const [slides, setSlides] = useState([]);
  const [footerData, setFooterData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadPage() {
      try {
        const [productsResponse, slidesResponse, footerResponse] = await Promise.all([
          axios.get(`${API_URL}/products`),
          axios.get(`${API_URL}/sliders`),
          axios.get(`${API_URL}/footer`),
        ]);

        setProducts(productsResponse.data);
        setSlides(slidesResponse.data);
        setFooterData(footerResponse.data[0] || null);
      } catch (error) {
        console.error("Failed to load home page:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadPage();
  }, []);

  return (
    <>
      <Navar />
      {isLoading ? (
        <PizzaLoader />
      ) : (
        <>
          <Slider slides={slides} />
          <Product_card products={products} />
        </>
      )}
      <Footer data={footerData} />
    </>
  );
}

export default Home;

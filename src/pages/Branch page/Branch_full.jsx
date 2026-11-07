
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Navar from "../../component/navar/Navar";
import Footer from "../../component/footer/Footer";
import PizzaLoader from "../../component/PizzaLoader/PizzaLoader";
import styles from "./branch_full.module.css";

const API_URL = "http://localhost:3001";

function Branch_full() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [footerData, setFooterData] = useState(null);
  const [isLoding, setisLoding] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      setisLoding(true);

      try {
        const response = await axios.get(
          `${API_URL}/products/${id}`
        );

        setProduct(response.data);
      } catch (fetchError) {
        console.error("Failed to load product:", fetchError);
      } finally {
        setisLoding(false);
      }
    }

    async function loadFooter() {
      try {
        const response = await axios.get(
          `${API_URL}/footer`
        );

        setFooterData(
          Array.isArray(response.data)
            ? response.data[0]
            : response.data
        );
      } catch (fetchError) {
        console.error("Failed to load footer:", fetchError);
      }
    }
;
loadProduct();
    loadFooter();

  }, [id]);

  return (
    <>
      <Navar />

      {isLoding ? (
        <PizzaLoader />
      ): product ? (
        <main className={styles.page}>
          <article className={styles.product}>

            <img
              className={styles.image}
              src={product?.image}
              alt={product?.title}
            />

            <div className={styles.details}>

              <h1 className={styles.title}>
                {product.title}
              </h1>

              <p className={styles.rating}>
                امتیاز {product.star?.toLocaleString("fa-IR")} از ۵

                {product.product_card_rate != null &&
                  ` (${product.product_card_rate.toLocaleString("fa-IR")} امتیاز)`
                }
              </p>

              {product.product_card_discant != null && (
                <p className={styles.discount}>
                  تخفیف {product.product_card_percent?.toLocaleString("fa-IR")}٪
                </p>
              )}

              <p className={styles.price}>
                {product.price?.toLocaleString("fa-IR")} تومان
              </p>

            </div>
          </article>
        </main>
      ) : (
        <p className={styles.message}>محصول مورد نظر پیدا نشد.</p>
      )}

      <Footer data={footerData} />
    </>
  );
}

export default Branch_full;

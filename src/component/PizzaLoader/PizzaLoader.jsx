import styles from "./PizzaLoader.module.css";

function PizzaLoader() {
  return (
    <div className={styles.loader} role="status" aria-label="در حال بارگذاری">
      <div className={styles.pizza} aria-hidden="true">
        <span className={styles.slice} />
      </div>
    </div>
  );
}

export default PizzaLoader;

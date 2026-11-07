import styles from "./Button.module.css";

function Button({
  children,
  className = "",
  variant = "primary",
  size = 40,
  type = "button",
  ...props
}) {
  const variantClass = styles[variant] ?? styles.primary;
  const sizeClass = styles[`size${size}`] ?? styles.size40;

  return (
    <button
      className={`${styles.button} ${variantClass} ${sizeClass} ${className}`.trim()}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
}) {
  const className =
    variant === "danger" ? "btn btn-danger" : "btn btn-primary";

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}

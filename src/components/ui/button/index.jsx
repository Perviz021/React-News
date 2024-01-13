import classNames from "classnames";

function Button({
  children,
  property = "primary",
  rounded = false,
  size = "md",
  block = false,
  handleClick,
}) {
  return (
    <button
      onClick={(e) => handleClick(e)}
      className={classNames([
        "btn",
        property ? `btn--${property}` : "",
        `btn--${size}`,
        {
          "btn--rounded": rounded,
          "btn--block": block,
        },
      ])}
    >
      {children}
    </button>
  );
}

export default Button;

import PropTypes from "prop-types";

/**
 * Skeleton — placeholder shown while content loads.
 *
 * @example
 * <Skeleton variant="text" count={3} />
 * <Skeleton variant="circle" width={48} height={48} />
 * <Skeleton variant="rect" height={160} animation="wave" />
 */
export const Skeleton = ({
  variant = "text",
  width,
  height,
  count = 1,
  radius,
  animation = "pulse",
  className = "",
  style = {},
  ...rest
}) => {
  const base = [
    "st-skeleton",
    `st-skeleton--${variant}`,
    animation !== "none" && `st-skeleton--${animation}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const makeStyle = (i, total) => {
    const s = { ...style };
    if (width != null) s.width = typeof width === "number" ? `${width}px` : width;
    if (height != null) s.height = typeof height === "number" ? `${height}px` : height;
    if (radius != null) s.borderRadius = typeof radius === "number" ? `${radius}px` : radius;
    if (variant === "circle" && width != null && height == null) s.height = s.width;
    // last line of a multi-line text block is shorter
    if (variant === "text" && total > 1 && i === total - 1 && width == null) s.width = "60%";
    return s;
  };

  if (count > 1) {
    return (
      <span className="st-skeleton-group" aria-hidden="true">
        {Array.from({ length: count }).map((_, i) => (
          <span key={i} className={base} style={makeStyle(i, count)} {...rest} />
        ))}
      </span>
    );
  }

  return <span className={base} style={makeStyle(0, 1)} aria-hidden="true" {...rest} />;
};

Skeleton.propTypes = {
  variant: PropTypes.oneOf(["text", "rect", "circle"]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  count: PropTypes.number,
  radius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  animation: PropTypes.oneOf(["pulse", "wave", "none"]),
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Skeleton;

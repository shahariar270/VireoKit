import PropTypes from "prop-types";

/**
 * Badge — compact status/label pill.
 *
 * @example
 * <Badge variant="success">Paid</Badge>
 * <Badge variant="error" solid dot>Failed</Badge>
 */
export const Badge = ({
  children,
  variant = "default",
  solid = false,
  dot = false,
  className = "",
  ...rest
}) => {
  const classes = [
    "st-badge",
    `st-badge--${variant}`,
    solid && "st-badge--solid",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...rest}>
      {dot && <span className="st-badge__dot" aria-hidden="true" />}
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(["default", "primary", "success", "warning", "error", "info"]),
  solid: PropTypes.bool,
  dot: PropTypes.bool,
  className: PropTypes.string,
};

export default Badge;

import PropTypes from "prop-types";

/**
 * Loading — spinner with optional label; can cover the viewport.
 *
 * @example
 * <Loading size="lg" label="Loading…" fullscreen />
 */
export const Loading = ({ size = "md", label, fullscreen = false, className = "" }) => {
  const classes = [
    "st-loading",
    `st-loading--${size}`,
    fullscreen && "st-loading--fullscreen",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} role="status" aria-live="polite">
      <div className="st-loading__spinner" aria-hidden="true" />
      {label && <span className="st-loading__label">{label}</span>}
      <span className="st-sr-only" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
        {label || "Loading"}
      </span>
    </div>
  );
};

Loading.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  label: PropTypes.node,
  fullscreen: PropTypes.bool,
  className: PropTypes.string,
};

export default Loading;

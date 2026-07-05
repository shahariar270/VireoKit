import PropTypes from "prop-types";
import { ICONS, ICON_NAMES } from "./icons";

/**
 * Icon — renders an inline SVG from the built-in registry.
 * Uses `currentColor`, so it inherits text color. Size is in px.
 *
 * @example
 * <Icon name="check" size={20} />
 * <Icon name="trash" className="st-btn__icon" />
 */
export const Icon = ({
  name,
  size = 20,
  strokeWidth = 2,
  className = "",
  title,
  ...rest
}) => {
  const paths = ICONS[name];
  if (!paths) {
    if (typeof console !== "undefined") {
      console.warn(`<Icon>: unknown name "${name}". Available: ${ICON_NAMES.join(", ")}`);
    }
    return null;
  }

  return (
    <svg
      className={["st-icon", className].filter(Boolean).join(" ")}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      dangerouslySetInnerHTML={{
        __html: (title ? `<title>${title}</title>` : "") + paths,
      }}
      {...rest}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf(ICON_NAMES).isRequired,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.number,
  className: PropTypes.string,
  title: PropTypes.string,
};

export default Icon;

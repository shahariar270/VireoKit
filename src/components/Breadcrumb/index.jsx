import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

/**
 * Breadcrumb — trail of links to the current route.
 * Auto-derives from the URL, or pass explicit `items`.
 *
 * @example
 * <Breadcrumb />
 * <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Orders" }]} />
 */
export const Breadcrumb = ({ items, homeLabel = "Home", separator = "/" }) => {
  const location = useLocation();

  const trail =
    items ||
    [{ label: homeLabel, to: "/" }].concat(
      location.pathname
        .split("/")
        .filter(Boolean)
        .map((name, index, arr) => ({
          label: name,
          to: "/" + arr.slice(0, index + 1).join("/"),
        }))
    );

  return (
    <nav className="st-breadcrumb" aria-label="Breadcrumb">
      {trail.map((item, index) => {
        const isLast = index === trail.length - 1;
        return (
          <span key={index} style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
            {index > 0 && (
              <span className="st-breadcrumb__separator" aria-hidden="true">
                {separator}
              </span>
            )}
            {isLast || !item.to ? (
              <span className="st-breadcrumb__current" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link className="st-breadcrumb__link" to={item.to}>
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      to: PropTypes.string,
    })
  ),
  homeLabel: PropTypes.string,
  separator: PropTypes.node,
};

export default Breadcrumb;

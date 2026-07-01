import PropTypes from "prop-types";
import Table from ".";

const TableContainer = ({
  title,
  description,
  children,
  className = "",
  ...props
}) => {
  return (
    <div className={`st-table-container ${className}`}>
      {(title || description) && (
        <div className="st-table-container__header">
          {title && <h3 className="st-table-container__title">{title}</h3>}
          {description && (
            <p className="st-table-container__description">{description}</p>
          )}
        </div>
      )}
      {children || <Table {...props} />}
    </div>
  );
};

TableContainer.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default TableContainer;

import PropTypes from "prop-types";

/** Renders a component's prop API as a table. */
export const PropsTable = ({ rows = [] }) => (
  <div className="doc-props">
    <table className="doc-props__table">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.name}>
            <td>
              <code>{r.name}</code>
            </td>
            <td>
              <code className="doc-props__type">{r.type}</code>
            </td>
            <td>{r.default ? <code>{r.default}</code> : <span className="doc-props__muted">—</span>}</td>
            <td>{r.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

PropsTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string,
      default: PropTypes.string,
      description: PropTypes.node,
    })
  ),
};

export default PropsTable;

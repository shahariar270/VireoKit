import PropTypes from "prop-types";

/** Standard docs page header + content wrapper. */
export const Page = ({ title, lead, children }) => (
  <article className="doc-page">
    <header className="doc-page__head">
      <h1 className="doc-page__title">{title}</h1>
      {lead && <p className="doc-page__lead">{lead}</p>}
    </header>
    {children}
  </article>
);

Page.propTypes = {
  title: PropTypes.node,
  lead: PropTypes.node,
  children: PropTypes.node,
};

export default Page;

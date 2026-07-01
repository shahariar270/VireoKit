import PropTypes from "prop-types";

/**
 * Layout — app shell that places a fixed sidebar beside a scrollable main
 * column (topbar + content). Compose with <Sidebar> and <Topbar>.
 *
 * @example
 * <Layout sidebar={<Sidebar … />} topbar={<Topbar … />}>
 *   <PageContent />
 * </Layout>
 */
export const Layout = ({ sidebar, topbar, children }) => {
  return (
    <div className="st-layout">
      {sidebar}
      <div className="st-layout__main">
        {topbar}
        <main className="st-layout__content">{children}</main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  sidebar: PropTypes.node,
  topbar: PropTypes.node,
  children: PropTypes.node,
};

export default Layout;

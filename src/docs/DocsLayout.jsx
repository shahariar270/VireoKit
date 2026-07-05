import { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { NAV_GROUPS } from "./registry";
import { Icon } from "../components/Icon";
import { Button } from "../index";
import { useTheme } from "../theme/ThemeProvider";

export const DocsLayout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="doc-shell">
      <header className="doc-topbar">
        <button
          type="button"
          className="doc-topbar__menu"
          onClick={() => setNavOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <Icon name="menu" size={22} />
        </button>
        <NavLink to="/" className="doc-topbar__brand">
          <Icon name="plus" size={18} /> shahariar-design-system
        </NavLink>
        <div className="doc-topbar__right">
          <Button size="sm" variant="secondary" onClick={toggleTheme}>
            <Icon name={theme === "dark" ? "success" : "info"} size={16} />
            {theme === "dark" ? "Light" : "Dark"}
          </Button>
        </div>
      </header>

      <div className="doc-body">
        <aside className={`doc-nav ${navOpen ? "doc-nav--open" : ""}`}>
          {NAV_GROUPS.map((group) => (
            <div key={group.title} className="doc-nav__group">
              <div className="doc-nav__group-title">{group.title}</div>
              <ul className="doc-nav__list">
                {group.items.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      end={item.path === "/"}
                      className={({ isActive }) =>
                        `doc-nav__link ${isActive ? "doc-nav__link--active" : ""}`
                      }
                      onClick={() => setNavOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        <main className="doc-content">{children}</main>
      </div>
    </div>
  );
};

DocsLayout.propTypes = {
  children: PropTypes.node,
};

export default DocsLayout;

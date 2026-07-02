import { useState } from "react";
import PropTypes from "prop-types";
import { CodeBlock } from "./CodeBlock";

/**
 * A documented use case: title/description, a live preview surface, and the
 * source code (toggleable + copyable). Pass the live JSX as children and the
 * matching source as `code`.
 */
export const Example = ({ title, description, code, children, padded = true }) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <section className="doc-example">
      {title && <h3 className="doc-example__title">{title}</h3>}
      {description && <p className="doc-example__desc">{description}</p>}

      <div className="doc-example__card">
        <div className={`doc-example__preview ${padded ? "" : "doc-example__preview--flush"}`}>
          {children}
        </div>
        {code && (
          <div className="doc-example__actions">
            <button
              type="button"
              className="doc-example__toggle"
              onClick={() => setShowCode((v) => !v)}
            >
              {showCode ? "Hide code" : "Show code"}
            </button>
          </div>
        )}
        {code && showCode && <CodeBlock code={code} />}
      </div>
    </section>
  );
};

Example.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  code: PropTypes.string,
  children: PropTypes.node,
  padded: PropTypes.bool,
};

export default Example;

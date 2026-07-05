import { useState } from "react";
import PropTypes from "prop-types";

/** Code snippet with a copy-to-clipboard button. */
export const CodeBlock = ({ code, language = "jsx" }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="doc-code">
      <div className="doc-code__bar">
        <span className="doc-code__lang">{language}</span>
        <button type="button" className="doc-code__copy" onClick={copy}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="doc-code__pre">
        <code>{code}</code>
      </pre>
    </div>
  );
};

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string,
};

export default CodeBlock;

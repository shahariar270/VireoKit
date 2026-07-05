import { Link } from "react-router-dom";
import App from "../../App";

/** Full-screen dashboard demo with a floating link back to the docs. */
export default function Demo() {
  return (
    <>
      <Link to="/" className="doc-demo-back">← Back to docs</Link>
      <App />
    </>
  );
}

import PropTypes from "prop-types";

/** VireoKit logo: gradient bird mark + wordmark. */
export const Logo = ({ size = 28, showText = true }) => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="VireoKit">
      <defs>
        <linearGradient id="vk-logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#14b8a6" />
          <stop offset="1" stopColor="#2988ee" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#vk-logo-grad)" />
      <path fill="#ffffff" d="M25 43 L11 49 L23 38 Z" />
      <path fill="#ffffff" d="M22 45c-5-6-4-17 4-22 7-4 17-3 21 4 3 6 2 13-4 17-6 4-15 5-21 1z" />
      <path fill="#bfeee7" d="M27 33c6 0 12 3 15 8-7 1-13-1-16-5z" />
      <path fill="#fbbf24" d="M47 28 L58 30 L47 33 Z" />
      <circle cx="43" cy="29" r="2.4" fill="#0f172a" />
    </svg>
    {showText && (
      <span style={{ fontWeight: 800, fontSize: "1.05rem", letterSpacing: "-0.01em" }}>
        Vireo<span style={{ color: "var(--color-primary)" }}>Kit</span>
      </span>
    )}
  </span>
);

Logo.propTypes = {
  size: PropTypes.number,
  showText: PropTypes.bool,
};

export default Logo;

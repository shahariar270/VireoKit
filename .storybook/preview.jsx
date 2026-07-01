import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "../src/assets/styles/global.scss";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: { light: "light", dark: "dark" },
      defaultTheme: "light",
      attributeName: "data-theme",
    }),
    (Story) => (
      <div style={{ padding: "1.5rem", background: "var(--bg-body)", minHeight: "100vh" }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;

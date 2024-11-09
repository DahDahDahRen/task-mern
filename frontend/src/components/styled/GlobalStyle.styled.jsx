import { Global, css } from "@emotion/react";

export default function GlobalStyled() {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :root {
          font-size: 16px;
        }

        body {
          height: 100vh;
          font-family: "Inter", serif;
        }

        button {
          font-family: inherit;
        }

        ul,
        ol {
          list-style: none;
        }
      `}
    />
  );
}

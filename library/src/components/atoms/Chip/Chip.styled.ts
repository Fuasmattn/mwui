import { createStitches } from "@stitches/react";

// TODO: centralize createStitches call
export const { styled } = createStitches({
  theme: {
    colors: {
      chipBackground: "#6750A4", // token
      chipLabelColor: "white", // token
    },
    radii: {
      radiusChip: "99999px", // token
    },
  },
});

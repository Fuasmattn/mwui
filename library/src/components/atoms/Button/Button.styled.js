import { createStitches } from '@stitches/react';
import {
  buttonButtonFilledDefaultBgColor,
  buttonButtonFilledDefaultBorderColor,
  buttonButtonFilledDefaultBorderRadius,
  buttonButtonFilledDefaultTextColor,
  buttonButtonFilledFocusedBgColor,
  buttonButtonFilledFocusedTextColor,
  buttonButtonFilledHoverBgColor,
  buttonButtonFilledHoverTextColor,
  buttonButtonOutlineDefaultBgColor,
  buttonButtonOutlineDefaultBorderColor,
  buttonButtonOutlineDefaultTextColor,
  buttonButtonOutlineFocusedBgColor,
  buttonButtonOutlineFocusedTextColor,
  buttonButtonOutlineHoverBgColor,
  buttonButtonOutlineHoverTextColor,
  fontFamiliesDefault
} from '../../../../../token-farm/dist/token-farm.esm.min.js';
// } from '@mwui/token-farm';

const { styled } = createStitches({
  theme: {
    space: {
      xxs: '0.25rem',
      xs: '0.5rem',
      s: '1rem',
      m: '1.5rem',
      l: '2rem',
      xl: '2.5rem',
      xxl: '3rem',
      xxxl: '4rem'
    },
    fonts: {
      default: fontFamiliesDefault
    },
    colors: {
      primary: buttonButtonFilledDefaultBgColor,
      'primary-hover': buttonButtonFilledHoverBgColor,
      'primary-active': buttonButtonFilledFocusedBgColor,

      'primary-border': buttonButtonFilledDefaultBorderColor,
      'primary-border-hover': buttonButtonFilledDefaultBorderColor,
      'primary-border-active': buttonButtonFilledDefaultBorderColor,

      'primary-text': buttonButtonFilledDefaultTextColor,
      'primary-text-hover': buttonButtonFilledHoverTextColor,
      'primary-text-active': buttonButtonFilledFocusedTextColor,

      'primary-border-radius': buttonButtonFilledDefaultBorderRadius,

      secondary: buttonButtonOutlineDefaultBgColor,
      'secondary-hover': buttonButtonOutlineHoverBgColor,

      'secondary-active': buttonButtonOutlineFocusedBgColor,

      'secondary-border': buttonButtonOutlineDefaultBorderColor,
      'secondary-border-hover': buttonButtonOutlineDefaultBorderColor,
      'secondary-border-active': buttonButtonOutlineDefaultBorderColor,

      'secondary-text': buttonButtonOutlineDefaultTextColor,
      'secondary-text-hover': buttonButtonOutlineHoverTextColor,
      'secondary-text-active': buttonButtonOutlineFocusedTextColor,

      'secondary-border-radius': buttonButtonFilledDefaultBorderRadius
    }
  }
});

export default styled;

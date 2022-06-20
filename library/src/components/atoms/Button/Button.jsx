import React from 'react';
import PropTypes from 'prop-types';
import styled from './Button.styled';

const StyledButton = styled('button', {
  backgroundColor: 'transparent',
  fontFamily: '$default',
  padding: '$xs $m',
  border: 'none',
  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary',
        color: '$primary-text',
        borderRadius: '$primary-border-radius',
        '&:hover': {
          backgroundColor: '$primary-hover',
          color: '$primary-text-hover'
        },
        '&:active': {
          backgroundColor: '$primary-active',
          color: '$primary-text-hover'
        }
      },
      secondary: {
        backgroundColor: '$secondary',
        color: '$secondary-text',
        borderRadius: '$secondary-border-radius',
        '&:hover': {
          backgroundColor: '$secondary-hover',
          color: '$secondary-text-hover'
        },
        '&:active': {
          backgroundColor: '$secondary-active',
          color: '$secondary-text-active'
        }
      }
    },
    outlined: {
      true: {
        $$shadowColor: 'transparent',
        backgroundColor: 'transparent',
        boxShadow: '0 0 0 1px $$shadowColor'
      }
    }
  },
  defaultVariants: {
    variant: 'primary'
  },
  // TODO: discuss if outline and variants could be separated in DS
  compoundVariants: [
    {
      variant: 'primary',
      outlined: true,
      css: {
        backgroundColor: 'transparent',
        $$shadowColor: 'black',
        color: 'black'
      }
    }
  ]
});

const Button = ({ variant, label, disabled, outlined, onClick }) => {
  return (
    <StyledButton
      type="button"
      variant={ variant }
      disabled={ disabled }
      onClick={ onClick }
      outlined={ outlined }
    >
      { label }
    </StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  outlined: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  variant: 'primary',
  disabled: false,
  outlined: false,
  onClick: undefined
};

export default Button;
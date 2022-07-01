import PropTypes from 'prop-types';

declare type CheckboxProps = {
    label?: string;
    checked?: boolean;
    onChange: () => void;
};
declare const Checkbox: {
    ({ label, checked, onChange }: CheckboxProps): JSX.Element;
    propTypes: {
        label: PropTypes.Requireable<string>;
        checked: PropTypes.Requireable<boolean>;
        onChange: PropTypes.Validator<(...args: any[]) => any>;
    };
    defaultProps: {
        label: string;
    };
};

declare type ButtonVariant = "primary";
declare type ButtonProps = {
    variant?: ButtonVariant;
    label: string;
    disabled?: boolean;
    outlined?: boolean;
    onClick: () => void;
    className?: string;
};
declare const Button: ({ variant, label, disabled, outlined, onClick, className, }: ButtonProps) => JSX.Element;

declare type Variant = "body" | "display" | "headline" | "label" | "title" | "overline" | "body-light" | "body-light-italic" | "body-italic";
declare type Component = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "label";
declare type Size = "large" | "medium" | "small";

declare type TypographyProps = {
    variant?: Variant;
    component?: Component;
    size?: Size;
    text: string;
    className?: string;
};
declare const Typography: ({ variant, component, size, text, className, }: TypographyProps) => JSX.Element;

declare type ChipProps = {
    label: string;
};
declare const Chip: {
    ({ label }: ChipProps): JSX.Element;
    propTypes: {
        label: PropTypes.Validator<string>;
    };
};

declare type CardProps = {
    imageSrc?: string;
    imageAlt?: string;
    title: string;
    confirmLabel?: string;
    body?: string;
    cancelLabel?: string;
    additionalText?: string;
    badges?: string[];
    onConfirm?: () => void;
    onCancel?: () => void;
};
declare const Card: {
    ({ imageSrc, title, body, confirmLabel, cancelLabel, imageAlt, additionalText, badges, onConfirm, onCancel, }: CardProps): JSX.Element;
    propTypes: {
        confirmLabel: PropTypes.Requireable<string>;
        onConfirm: PropTypes.Requireable<(...args: any[]) => any>;
        title: PropTypes.Validator<string>;
        imageSrc: PropTypes.Requireable<string>;
        imageAlt: PropTypes.Requireable<string>;
        body: PropTypes.Requireable<string>;
        additionalText: PropTypes.Requireable<string>;
        badges: PropTypes.Requireable<any[]>;
        cancelLabel: PropTypes.Requireable<string>;
        onCancel: PropTypes.Requireable<(...args: any[]) => any>;
    };
};

declare const injectGlobalStyles: () => string;

export { Button, Card, Checkbox, Chip, Typography, injectGlobalStyles };

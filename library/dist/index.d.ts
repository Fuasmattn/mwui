import { FC } from 'react';

declare type CheckboxProps = {
    label?: string;
    checked?: boolean;
    onChange: () => void;
};
declare const Checkbox: FC<CheckboxProps>;

declare type ButtonVariant = "primary" | "secondary";
declare type ButtonProps = {
    variant?: ButtonVariant;
    label: string;
    disabled?: boolean;
    outlined?: boolean;
    onClick: () => void;
    className?: string;
};
declare const Button: FC<ButtonProps>;

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
declare const Typography: FC<TypographyProps>;

declare type ChipProps = {
    label: string;
};
declare const Chip: FC<ChipProps>;

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
declare const Card: FC<CardProps>;

declare const injectGlobalStyles: () => string;

export { Button, Card, Checkbox, Chip, Typography, injectGlobalStyles };

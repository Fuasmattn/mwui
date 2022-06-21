import { FC } from 'react';

declare type Props$4 = {
    label?: string;
    checked?: boolean;
    onChange: () => void;
};
declare const Checkbox: FC<Props$4>;

declare type Props$3 = {
    variant?: "primary" | "secondary";
    label: string;
    disabled?: boolean;
    outlined?: boolean;
    onClick: () => void;
};
declare const Button: FC<Props$3>;

declare type Variant = "body" | "display" | "headline" | "label" | "title" | "overline" | "body-light" | "body-light-italic" | "body-italic";
declare type Component = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "label";
declare type Size = "large" | "medium" | "small";

declare type Props$2 = {
    variant?: Variant;
    component?: Component;
    size?: Size;
    text: string;
};
declare const Typography: FC<Props$2>;

declare type Props$1 = {
    label: string;
};
declare const Chip: FC<Props$1>;

declare type Props = {};
declare const Card: FC<Props>;

export { Button, Card, Checkbox, Chip, Typography };

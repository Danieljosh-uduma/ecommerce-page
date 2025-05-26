/**
 * Renders a customizable button component with loading and variant support.
 *
 * @param props - The properties for the Button component.
 * @param props.children - The content to be displayed inside the button.
 * @param props.variant - The visual style of the button, either 'fill' or 'empty'.
 * @param props.IsLoading - If true, the button is disabled and displays a loading state.
 * @param props.onclick - Optional click event handler for the button.
 *
 * @returns A styled button element that can show a loading state.
 */

import { type ReactNode } from 'react';
import './button.css';

interface ButtonPropI {
    children: ReactNode;
    variant: 'fill' | 'empty';
    IsLoading: boolean;
    onclick?(): void;
}

export default function Button(props: ButtonPropI) {
    const { children, variant, onclick, IsLoading } = props;
    const variantClass =
        variant === 'fill' ? 'button--fill button' : 'button--empty button';

    return (
        <button
            type="button"
            className={variantClass}
            disabled={IsLoading}
            onClick={onclick}
        >
            {IsLoading ? 'LOADING...' : children}
        </button>
    );
}

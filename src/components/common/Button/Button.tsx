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
    const variantClass = variant === 'fill' ? 'button--fill' : 'button--empty';

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

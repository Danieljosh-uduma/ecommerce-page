import { type ReactNode } from 'react';

interface ButtonPropI {
    children: ReactNode;
    className: string;
    disabled: boolean;
    variant: 'fill' | 'empty';
    onclick(): void;
}

export default function Button(props: ButtonPropI) {
    const { children } = props;

    return (
        <button type="button" className="" disabled={false} onClick={() => {}}>
            {children}
        </button>
    );
}

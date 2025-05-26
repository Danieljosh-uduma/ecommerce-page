import type { ReactNode } from 'react';
import './flex.css';

export default function FlexContainer({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    const containerClass = className
        ? `flex-container ${className}`
        : 'flex-container';
    return <div className={containerClass}>{children}</div>;
}

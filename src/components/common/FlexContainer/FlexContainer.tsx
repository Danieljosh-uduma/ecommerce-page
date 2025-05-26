/**
 * A reusable flexbox container component that wraps its children with a div
 * using the "flex-container" CSS class and any additional classes provided.
 *
 * @param children - The content to be rendered inside the flex container.
 * @param className - Optional additional CSS class names to apply to the container.
 * @returns A div element with flex styling containing the provided children.
 */

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

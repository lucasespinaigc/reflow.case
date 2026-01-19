import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface CardProps {
    children: ReactNode;
    className?: string;
    contentClassName?: string;
    headerClassName?: string;
    headerContentClassName?: string;
    title?: string;
    description?: string;
    titleSize?: 'sm' | 'md' | 'lg';
    onClick?: React.ComponentProps<'div'>['onClick'];
    contentStyle?: React.CSSProperties;
    header?: ReactNode;
}

export const CARD_CONTAINER_CLASSNAME = 'h-fit w-fit bg-card border border-t-light-10 rounded-lg p-3 shadow-sm gap-3';

export function Card({ children, className, description, title, onClick, titleSize = 'md', header, contentClassName, contentStyle, ...props }: CardProps) {
    const titleSizeClassname = {
        sm: 'text-sm font-light opacity-50 leading-[0.75rem]',

        md: 'font-medium leading-[0.95rem]',
        lg: 'text-lg font-medium leading-[0.95rem]',
    };

    return (
        <div className={twMerge([CARD_CONTAINER_CLASSNAME, 'flex flex-col', className])} onClick={onClick}>
            {(title || header || description) && (
                <header className={twMerge(['relative flex justify-between p-0.5', props.headerClassName])}>
                    {(title || description) && (
                        <div className="flex flex-col">
                            {title && <h1 className={twMerge([titleSizeClassname[titleSize]])}>{title}</h1>}

                            {description && <p className="text-detail mt-0.5 text-sm">{description}</p>}
                        </div>
                    )}

                    <div className={twMerge('relative -right-1 -top-1 ml-4 w-fit', props.headerContentClassName)}>{header}</div>
                </header>
            )}

            <div className={twMerge(['flex flex-col gap-2', contentClassName])} style={contentStyle}>
                {children}
            </div>
        </div>
    );
}

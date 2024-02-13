import React from 'react';
import styles from '@/styles/components/base/Box.module.css';

type BoxProps = {
    children: React.ReactNode,
    className?: string,
}
export const Box: React.FC<BoxProps> = (props: React.PropsWithChildren<BoxProps>) => {
    return (
        <div className={styles.box}>
            {props.children}
        </div>
    )
}
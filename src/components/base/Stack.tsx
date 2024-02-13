import React from 'react';
import styles from '@/styles/components/base/Stack.module.css'

type StackProps = {
    children: React.ReactNode,
    className?: string,
    
    recursive?: Boolean,
    margin?: number,
}
export const Stack: React.FC<StackProps> = (props: React.PropsWithChildren<StackProps>) => {
    const isRecursive = props.recursive === undefined ? false: props.recursive;
    return (
        <div className={styles.stack} data-recursive={isRecursive!.toString()}>
            {props.children}    
        </div>
    )
}
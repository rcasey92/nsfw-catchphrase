/**
 * @file TreeForeground.tsx
 * @description This component renders decorative trees in the foreground of the screen at various positions.
 * 
 * @module TreeForeground
 */

import Image from "next/image"
import classNames from "classnames";
import { ReactNode, useMemo, JSX } from "react";

import styles from "./TreeForeground.module.css";

import trees from '../../../../public/title_screen_trees.png';

/**
 * Enum representing the possible positions of the trees in the foreground.
 * @enum {string}
 */
enum TreePosition {
    LEFT = 'left',
    CENTER_LEFT = 'centerLeft',
    CENTER_RIGHT = 'centerRight',
    RIGHT = 'right'
}

/**
 * TreeForeground component that renders decorative trees at specified positions.
 * 
 * @component
 * @returns {JSX.Element} A section containing the tree images.
 */
const TreeForeground = (): JSX.Element => {    
    const treeContent = useMemo<JSX.Element[]>(() => Object.values(TreePosition).map(
        (position: string): JSX.Element => (
            <Image
                key={`foreground_${position}_trees`}
                className={classNames(styles.trees, styles[position])}
                src={trees}
                alt={`Decorative trees in the bottom ${position} of the screen`}
            />
        )
    ), [])

    return <section>
        {treeContent}
    </section>
}

export default TreeForeground;
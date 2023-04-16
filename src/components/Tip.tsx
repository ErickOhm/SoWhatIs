import type React from "react";
import type { ReactNode } from "react";

export interface Props {
    type: String;
    children: ReactNode
}

export default function Tip({type, children}: Props) {
    return (
        <aside className={`aside ${type}`}>
            {children}
        </aside>
    )
}
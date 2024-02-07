import React from "react";

type ItemMenuProps = {
    label: string,
    className: string,
}

export default ({ label, className }: ItemMenuProps) => {
    return (
        <li className={className}>
            <button className="flex items-center gap-3">
                <span className=" font-bold">{label}</span>
            </button>
        </li>
    )
}
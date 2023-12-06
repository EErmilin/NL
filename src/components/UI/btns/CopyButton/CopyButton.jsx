
import classes from "./CopyButton.module.scss";
import React from 'react'
import ButtonDefault from "../Button/Button";
import { useState } from "react";
import { useEffect } from "react";
import { Tooltip } from 'react-tooltip';
import './CopyButton.css'



function CopyButton({ title, copyString, className }) {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        if (!isOpen) return
        // Hide the tooltip after 5 seconds
        const timeoutId = setTimeout(() => {
            setIsOpen(false)
        }, 2000);

        // Clear the timeout when the component is unmounted
        return () => clearTimeout(timeoutId);
    }, [isOpen]);


    return (
        <div className="example-container">
            <a data-tooltip-id="my-tooltip-click">
                <ButtonDefault
                    className={className}
                    title={title}
                    onClick={() => {
                        setIsOpen(true)
                        navigator.clipboard.writeText(copyString)
                    }} />
            </a>
            <Tooltip
                className={classes.hint}
                id="my-tooltip-click"
                content="Copied"
                events={['click']}
                isOpen={isOpen}
                place={'bottom'}
                style={{
                    background: '#FFF',
                    display: 'flex',
                    alignItems: 'center',
                    padding: 20,
                    gap: 10,
                    fontSize: 20,
                    fontWeight: 400,
                    color: '#000',
                    boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.10)'
                }}
            />

        </div>

    )
}

export default CopyButton
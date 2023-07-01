import React from "react";

type ButtonNameType = {
    name: string
    callback: () => void
}

export const Button = (props: ButtonNameType) => {

    const OnClickHandler = () => {
        props.callback()
    }

    return <button onClick={OnClickHandler}>{props.name}</button>
}
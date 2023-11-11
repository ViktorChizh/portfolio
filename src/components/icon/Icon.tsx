import React from "react"
import spriteSvgIcon from "../../assets/spriteSvgIcon.svg"

type iconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewport?: string 
    fill?: string
    stroke?: string
}

export const Icon = (props: iconPropsType) => {
    return (
        <svg width={props.width || "112"} 
            height={props.height || "112"} 
            viewBox={props.viewport || "0 0 112 112"} 
            fill={props.fill || 'none'}
            stroke={props.stroke}        
            xmlns="http://www.w3.org/2000/svg"
        >
            <use xlinkHref={`${spriteSvgIcon}#${props.iconId}`} />
        </svg>
    )
}
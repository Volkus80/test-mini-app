import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react"
import { TypeTheme } from "../../../types"

export interface TypeButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    $theme: TypeTheme
    $title: string
    $round?: boolean
    $text?: string
    $textColor?: string
    $borderColor?: string
    $width?: string
    children?: ReactNode

}
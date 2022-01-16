import Link from 'next/link'
import { MouseEventHandler } from 'react'

interface IProps {
    children: string
    onClick?: MouseEventHandler<HTMLButtonElement>
    className?: string
}
interface IPropsLink {
    href: string
}

export const Button = ({ children, onClick, className }: IProps) => {
    return (
        <button
            className={`py-2 px-3 bg-green-200 rounded-md rounded-bl-xl rounded-tr-xl hover:rounded-bl-3xl hover:rounded-tr-3xl
        hover:bg-green-400 hover:scale-105 hover:shadow-xl transition-all duration-500 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export const ButtonLink = ({ children, href, className }: IProps & IPropsLink) => {
    return (
        <Link href={href}>
            <a
                className={`py-2 px-3 bg-green-200 rounded-md rounded-bl-xl rounded-tr-xl hover:rounded-bl-3xl hover:rounded-tr-3xl
                            hover:bg-green-400 hover:scale-105 hover:shadow-xl transition-all duration-500 ${className}`}>
                {children}
            </a>
        </Link>
    )
}

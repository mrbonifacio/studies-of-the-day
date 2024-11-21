import style from "./Button.module.scss"

interface Props {
    title: string
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

export default function Button({ onClick, type, title }: Props) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={style.button}
        >
            {title}
        </button>
    );
};
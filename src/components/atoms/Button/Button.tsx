import clsx from "clsx";

type Props = {
    children: React.ReactNode;
    type?: "default" | "primary" | "ghost";
    className?: string;
};

const Button = ({ children, type = "default", className = "" }: Props) => {
    const style = {
        default: "bg-white text-black",
        primary: "bg-primaryColor text-white",
        ghost: "bg-transparent text-black",
    };

    return (
        <button
            className={clsx(
                "rounded-md p-2 hover:opacity-80 duration-150",
                style[type],
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;

import clsx from "clsx";

type Props = {
    fullRounded?: boolean;
    placeHolder?: string;
    type?: "default" | "ghost";
    className?: string;
};

const InputText = ({
    fullRounded = false,
    placeHolder,
    type = "default",
    className = "",
}: Props) => {
    return (
        <input
            type="text"
            className={clsx(
                "w-full h-[40px] focus:outline-none px-5",
                fullRounded ? "rounded-full" : "rounded-lg",
                type === "ghost" ? "bg-transparent" : "bg-white",
                className
            )}
            placeholder={placeHolder}
        />
    );
};

export default InputText;

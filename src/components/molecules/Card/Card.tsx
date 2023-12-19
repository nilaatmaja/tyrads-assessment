import Image from "next/image";
import visaIcon from "@/assets/icons/visa.svg";

type CardType = {
    children: React.ReactNode;
    className?: string;
    type?: "default" | "visa";
};

const cardStyle = {
    default: "bg-white",
    visa: "bg-primaryColor text-white w-full max-w-[400px] flex flex-col justify-between",
};

const Card = ({ children, className, type = "default" }: CardType) => {
    return (
        <div className={`${cardStyle[type]} rounded-xl p-5 ${className ?? ""}`}>
            {type === "visa" && (
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">S.</h1>
                    <Image
                        src={visaIcon}
                        alt="visa"
                        className="h-[20px] w-auto"
                    />
                </div>
            )}
            {children}
        </div>
    );
};

export default Card;

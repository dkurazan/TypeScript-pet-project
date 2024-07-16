import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link } from "react-router-dom";

type BaseProps = {
    children: ReactNode;
    textOnly?: boolean;
};

interface AnchorProps extends ComponentPropsWithoutRef<"a"> {
    to: string;
}

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    to?: never;
    onClick?: () => void;
}

function isAnchorProps(props: AnchorProps | ButtonProps): props is AnchorProps {
    return "to" in props;
}

export default function Button(
    props: (ButtonProps | AnchorProps) & BaseProps
) {
    if (isAnchorProps(props)) {
        return (
            <Link
                className={`button ${
                    "textOnly" in props ? "button--text-only" : undefined
                }`}
                {...props}
            >
                {props.children}
            </Link>
        );
    } else {
        return (
            <button
                className={`button ${
                    "textOnly" in props ? "button--text-only" : undefined
                }`}
                {...props}
                onClick={props.onClick}
            >
                {props.children}
            </button>
        );
    }
}

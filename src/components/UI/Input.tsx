import { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<'input'> {
    id: string;
    title: string;
}

export default function Input({id, title, ...props}: InputProps) {

    return (
        <div className="control">
            <label htmlFor={id}>{title}</label>
            <input {...props} />
        </div>
    );
}

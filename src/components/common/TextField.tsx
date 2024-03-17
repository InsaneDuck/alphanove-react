import React from "react";

type TextFieldProps = {} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
export const TextField: React.FC<TextFieldProps> = (props) => {
  return (
    <input
      {...props}
      className={`p-3 
             block 
             w-full 
             rounded-md 
             border-0 
             py-1.5 
             text-gray-900 
             shadow-sm 
             ring-1 
             ring-inset 
             ring-gray-300 
             placeholder:text-gray-400 
             focus:ring-2 
             focus:ring-inset 
             focus:ring-indigo-600 
             sm:text-sm 
             sm:leading-6`}
    />
  );
};

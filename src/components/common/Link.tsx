import React from "react";

type LinkProps = {} & React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
export const Link: React.FC<LinkProps> = (props) => {
  return <a {...props} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"/>
};

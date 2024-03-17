import React from "react";
import {Link} from "../components/common/Link";

export const Home: React.FC = () => {
  return (
    <div>
      <a href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
        Sign up
      </a>
      <Link href={"/login"}>Login</Link>
    </div>
  );
};

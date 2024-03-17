import {SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";
import {UserCredentials} from "../../types/UserCredentials";

import Cookies from 'js-cookie';
import axios from "axios";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors}
  } = useForm<UserCredentials>();

  const [login, setLogin] = useState<UserCredentials | undefined>(undefined)

  const onSubmit: SubmitHandler<UserCredentials> = (data) => {
    console.log(data)
    const getJwtToken = async () => {
      const response = await axios.request({
        url: 'http://localhost:8080/auth',
        method: 'post',
        data: {
          username: 'satya',
          password: 'password'
        }

      });
      const json = await response.data;


      Cookies.set('token', json.token, {secure: true});
    }

    getJwtToken();
    console.log(Cookies.get("token"))
  }

  const onInvalid = (errors: any) => console.error(errors, "Here")

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit, onInvalid)}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input placeholder={"username"}  {...register("username",)}/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
              <div className="mt-2">
                <input placeholder={"password"} {...register("password")}/>
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>

  );
};

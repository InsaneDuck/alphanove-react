import {SubmitHandler, useForm} from "react-hook-form";
import {TextField} from "../common/TextField";
import {SignUpUserCredentials} from "../../types/SignUpUserCredentials";
import axios from "axios";
import {useState} from "react";
import {Link} from "react-router-dom";

type SignUpResponse = {
  success: boolean,
  userNameConflict: boolean,
  emailConflict: boolean,
  message: string
}


export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<SignUpUserCredentials>();
  const [signUpResponse, setSignUpResponse] = useState<SignUpResponse>();

  const onSubmit: SubmitHandler<SignUpUserCredentials> = (data) => {


    console.log(data)
    const userSignUp = async () => {
      const response = await axios.request({
        url: 'http://localhost:8080/auth/register',
        method: 'post',
        data: {
          "userName": data.username,
          "password": data.password,
          "email": data.email,
          "firstName": data.firstName,
          "lastName": data.lastName
        }

      });
      return await response.data;
    }

    userSignUp().then(data => alert(JSON.stringify(data))).catch(errors => alert(JSON.stringify(errors.response.data)));
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up form
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <TextField placeholder={"username"} {...register("username", {required: true})} required/>
                {errors.username && <p>{errors.username.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <TextField placeholder={"email"} {...register("email", {required: true})} required/>
                {errors.email && <p>{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <TextField placeholder={"password"} {...register("password", {required: true})} required/>
                {errors.password && <p>{errors.password.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First Name
              </label>
              <div className="mt-2">
                <TextField placeholder={"first name"} {...register("firstName", {required: true})} required/>
                {errors.firstName && <p>{errors.firstName.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last Name
              </label>
              <div className="mt-2">
                <TextField placeholder={"last name"} {...register("lastName", {required: true})} required/>
                {errors.lastName && <p>{errors.lastName.message}</p>}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>


          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{' '}
            <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login
            </Link>
          </p>
        </div>
      </div>

    </>

  );
};

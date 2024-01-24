import type { FunctionComponent } from "../common/types";
import AkbayLogo from "../assets/logo/akbay-v2.svg";
import { Form, useForm } from "react-hook-form";
import FormInput from "../common/FormInput";
import Button from "../common/Button";
import FormPassword from "../common/FormPassword";

const SignIn = (): FunctionComponent => {
	const { control } = useForm();
	
	return (
		<div className="px-5 py-5">
			<img src={AkbayLogo} alt="Akbay Logo" className="w-[18%]" />
			<div className="px-5">
				<div className="my-8">
					<p className="font-bold text-4xl py-1">Sign In</p>
					<p className="py-1">Start your healing journey</p>
				</div>
				<Form control={control} className="flex flex-col">

					<label htmlFor="email" className="font-semibold mb-2">Email</label>
					<FormInput id="email" placeholder="email"/>

					<label htmlFor="password" className="font-semibold mt-5 mb-2">Password</label>
					<FormPassword id="password" placeholder="password"/>

					<div className="flex justify-between mt-8 mb-2">
                        <div className="flex">
                            <input type="checkbox" id="remember-me" className="w-4" />
                            <label htmlFor="remember-me" className="mx-2">Remember me</label>
                        </div>
                        <span className="text-[#2C9B54]">Forgot Password?</span>
                    </div>

					<Button variant="primary" className="mt-10 mb-8 p-3 w-full font-bold">Log In</Button>

                    <p className="mt-10 mb-5 text-center">Don't have an account yet? <span className="text-[#2C9B54]">Sign Up</span></p>
				</Form>
			</div>
		</div>
		
	);
};

export default SignIn;

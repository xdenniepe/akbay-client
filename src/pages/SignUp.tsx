import type { FunctionComponent } from "../common/types";
import AkbayLogo from "../assets/logo/akbay-v2.svg";
import { Form, useForm } from "react-hook-form";
import FormInput from "../common/FormInput";
import Button from "../common/Button";
import FormPassword from "../common/FormPassword";

const SignUp = (): FunctionComponent => {
	const { control } = useForm();
	
	return (
		<div className="px-5 py-5">
			<img src={AkbayLogo} alt="Akbay Logo" className="w-[18%]" />
			<div className="px-5">
				<div className="my-8">
					<p className="font-bold text-4xl py-1">Sign Up</p>
					<p className="py-1">Start your healing journey</p>
				</div>
				<Form control={control} className="flex flex-col">
					<label htmlFor="name" className="font-semibold mb-2">Name</label>
					<FormInput id="name" placeholder="enter name"/>

					<label htmlFor="email" className="font-semibold mt-5 mb-2">Email</label>
					<FormInput id="email" placeholder="email"/>

					<label htmlFor="password" className="font-semibold mt-5 mb-2">Password</label>
					<FormPassword id="password" placeholder="password"/>

					<label htmlFor="confirm-password" className="font-semibold mt-5 mb-2">Confirm Password</label>
					<FormPassword id="confirm-password" placeholder="confirm password"/>

					{/* ToDo: add terms and pivacy page; no design and content yet */}
					<div className="flex mt-8 mb-2">
						<input type="checkbox" id="terms-and-privacy" className="w-4" />
						<label htmlFor="terms-and-privacy" className="mx-2">I agree with <span className="text-[#2C9B54]">Terms</span> and <span className="text-[#2C9B54]">Privacy</span></label>
					</div>
					
					{/* ToDo: add form validation and integrate API */}
					<Button variant="primary" className="mt-16 mb-8 p-3 w-full font-bold">Get Started</Button>
				</Form>
			</div>
		</div>
		
	);
};

export default SignUp;

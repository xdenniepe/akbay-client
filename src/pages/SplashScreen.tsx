import type { FunctionComponent } from "../common/types";
import AkbayLogo from "../assets/logo/akbay.svg";
import Button from "../common/Button";

const SplashScreen = (): FunctionComponent => {
	return (
		<div className="bg-[#2C9B54] font-bold flex flex-col items-center justify-between h-screen p-[15%]">
            <div className="flex flex-col justify-center items-center w-full">
				<img src={AkbayLogo} alt="Akbay Logo" className="w-[60%]" />
				<p className="text-white text-center text-4xl font-normal p-2">AKBAY</p>
			</div>
			{/* ToDo: add navigation to sign in page */}
            <Button variant="white" className="p-3 w-full">Let's Get Started</Button>
		</div>
	);
};

export default SplashScreen;

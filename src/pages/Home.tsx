import type { FunctionComponent } from "../common/types";
import PlaceholderImage from "../assets/image/placeholder-profile-image.png";
import { BookOpenIcon, ClipboardDocumentIcon, LockClosedIcon } from "@heroicons/react/24/outline";

const Home = (): FunctionComponent => {
	return (
		<div className="px-8 py-5">
			{/* ToDo: make image and name dynamic */}
			<img
				src={PlaceholderImage}
				alt="Akbay Logo"
				className="w-8 h-8 border border-black rounded-full"
			/>

			<div className="my-8">
				<p className="font-bold text-2xl py-1">Hi, John!</p>
				<p className="py-1">Welcome to Akbay App</p>
			</div>

			{/* ToDo: add progress bar */}
			<div className="my-5">
				<span className="text-[#2C9B54] font-semibold">Current Progress</span>
				<div className="bg-[#F1F1F1] rounded-3xl px-8 py-6 mt-4">
					<span className="font-bold">Get Started</span>
					<div className="flex items-center text-[#9E9E9E] my-3">
						<BookOpenIcon className="h-5 w-5" />
						<span className="text-sm mx-3">5 mins reading</span>
					</div>
					<div className="flex items-center text-[#9E9E9E] my-3">
						<ClipboardDocumentIcon className="h-5 w-5" />
						<span className="text-sm mx-3">5 mins activity</span>
					</div>
				</div>
			</div>

			{/* ToDo: add navigation to every module; add lock unlock condition */}
			<div className="mt-10">
				<span className="text-[#2C9B54] font-semibold">Unlock Next Phase</span>
				<div className="bg-[#2C9B54]/[38%] flex justify-between rounded-3xl p-6 mt-4">
					<span className="font-bold">Module 1: Explore your emotions</span>
					<LockClosedIcon className="h-6 w-6 text-[#2C9B54]" />
				</div>
				<div className="bg-[#D4D4D4] flex justify-between rounded-3xl p-6 mt-4">
					<span className="font-bold">Module 2: Text here</span>
					<LockClosedIcon className="h-6 w-6 text-[#2C9B54]" />
				</div>
				<div className="bg-[#2C9B54]/[38%] flex justify-between rounded-3xl p-6 mt-4">
					<span className="font-bold">Module 3: Text here</span>
					<LockClosedIcon className="h-6 w-6 text-[#2C9B54]" />
				</div>
				<div className="bg-[#D4D4D4] flex justify-between rounded-3xl p-6 mt-4">
					<span className="font-bold">Module 4: Text here</span>
					<LockClosedIcon className="h-6 w-6 text-[#2C9B54]" />
				</div>
			</div>
		</div>
	);
};

export default Home;

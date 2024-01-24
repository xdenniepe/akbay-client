import type { FunctionComponent } from "react";
import { TETabs, TETabsItem } from "tw-elements-react";
import { HomeIcon, ChatBubbleLeftRightIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

interface Props {
    setActiveNav: React.Dispatch<React.SetStateAction<string>>
    activeNav: string;
}

const Navbar: FunctionComponent<Props> = ({ setActiveNav, activeNav }) => {

	return (
		<div className="">
			<TETabs justify>
				<TETabsItem
					onClick={() => { setActiveNav("home"); }}
					active={activeNav === "home"}
                    color="success"
				>
                    <div className="flex flex-col justify-center items-center">
                        <HomeIcon className="h-6 w-6" />
                        <span className="capitalize mt-1 font-semibold">Home</span>
                    </div>
				</TETabsItem>
				<TETabsItem
					onClick={() => { setActiveNav("community"); }}
					active={activeNav === "community"}
                    color="success"
				>
                    <div className="flex flex-col justify-center items-center">
                        <ChatBubbleLeftRightIcon className="h-6 w-6" />
                        <span className="capitalize mt-1 font-semibold">Community</span>
                    </div>
				</TETabsItem>
				<TETabsItem
					onClick={() => { setActiveNav("settings"); }}
					active={activeNav === "settings"}
                    color="success"
				>
                    <div className="flex flex-col justify-center items-center ">
                        <Cog6ToothIcon className="h-6 w-6 " />
                        <span className="capitalize mt-1 font-semibold">Settings</span>
                    </div>
				</TETabsItem>
			</TETabs>
		</div>
	);
}

export default Navbar;
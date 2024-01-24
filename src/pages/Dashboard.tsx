import { useState } from "react";
import Navbar from "../common/Navbar";
import type { FunctionComponent } from "../common/types";
import { TETabsContent, TETabsPane } from "tw-elements-react";
import Home from "./Home";

const Dashboard = (): FunctionComponent => {
    
    const [activeNav, setActiveNav] = useState("home");

	return (
		<div className="">
			<TETabsContent>
				<TETabsPane show={activeNav === "home"}><Home /></TETabsPane>
				<TETabsPane show={activeNav === "community"}>Tab 2 content</TETabsPane>
				<TETabsPane show={activeNav === "settings"}>Tab 3 content</TETabsPane>
			</TETabsContent>
            <Navbar setActiveNav={setActiveNav} activeNav={activeNav}/>
		</div>
	);
};

export default Dashboard;

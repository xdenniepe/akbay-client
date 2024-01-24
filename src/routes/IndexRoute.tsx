import { Route } from "@tanstack/router";
import { rootRoute } from "./RootRoute";
import SplashScreen from "../pages/SplashScreen";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";

export const IndexRoute = new Route({
	getParentRoute: (): typeof rootRoute => rootRoute,
	path: "/",
	component: SplashScreen,
});

export const SignUpRoute = new Route({
	getParentRoute: (): typeof rootRoute => rootRoute,
	path: "/signUp",
	component: SignUp,
});

export const SignInRoute = new Route({
	getParentRoute: (): typeof rootRoute => rootRoute,
	path: "/signIn",
	component: SignIn,
});

export const DashboardRoute = new Route({
	getParentRoute: (): typeof rootRoute => rootRoute,
	path: "/dashboard",
	component: Dashboard,
});

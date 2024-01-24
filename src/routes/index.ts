import { Router } from "@tanstack/router";
import { DashboardRoute, IndexRoute, SignInRoute, SignUpRoute } from "./IndexRoute";
import { rootRoute } from "./RootRoute";

const routeTree = rootRoute.addChildren([IndexRoute, SignUpRoute, SignInRoute, DashboardRoute]);

const router = new Router({ routeTree });

declare module "@tanstack/router" {
	interface Register {
		// This infers the type of our router and registers it across your entire project
		router: typeof router;
	}
}

export { router };

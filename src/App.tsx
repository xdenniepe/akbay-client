import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "@tanstack/router";
import type { FunctionComponent } from "./common/types";
// import { TanStackRouterDevelopmentTools } from "./components/utils/development-tools/TanStackRouterDevelopmentTools";
import { router } from "./routes";

const queryClient = new QueryClient();

const App = (): FunctionComponent => {
	return (
		<QueryClientProvider client={queryClient}>
			<div className='flex items-center justify-center min-h-screen bg-gray-200'>
				<div className='max-w-lg w-full border border-y-0 border-x-gray-200 bg-white min-h-screen'>
					<RouterProvider router={router} />
					{/* <TanStackRouterDevelopmentTools
						router={router}
						initialIsOpen={false}
						position="bottom-right"
					/>
					<ReactQueryDevtools initialIsOpen={false} /> */}
				</div>
			</div>
		</QueryClientProvider>
	);
};

export default App;

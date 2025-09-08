import type { LoaderFunctionArgs } from "react-router";
import type { Route } from "./+types/_index";

export function meta(_metaArgs: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export const loader = (args: LoaderFunctionArgs) => {
	const extra = args.context.extra;
	const url = args.context.url;
	return { extra, url };
};

export default function Index({ loaderData }: Route.ComponentProps) {
	const { extra, url } = loaderData;
	return (
		<div>
			<h1 className="text-2xl">React Router and Hono</h1>
			<h2>URL is {url}</h2>
			<h3>Extra is {extra}</h3>
		</div>
	);
}

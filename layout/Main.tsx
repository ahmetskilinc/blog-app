import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const Main = ({ children }: Props) => {
	return (
		<main>
			<div className="max-w-[800px] mx-auto px-4 lg:px-0">{children}</div>
		</main>
	);
};

export default Main;

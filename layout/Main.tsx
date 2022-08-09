import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const Main = ({ children }: Props) => {
	return (
		<main>
			<div className="max-w-[960px] mx-auto lg:mx-4 my-0">{children}</div>
		</main>
	);
};

export default Main;

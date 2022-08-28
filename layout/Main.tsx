import { ReactNode } from "react";
import MailChimp from "../components/MailChimp";

type Props = {
	children: ReactNode;
};

const Main = ({ children }: Props) => {
	return (
		<main>
			<div className="max-w-[860px] mx-auto px-4 lg:px-0">{children}</div>
		</main>
	);
};

export default Main;

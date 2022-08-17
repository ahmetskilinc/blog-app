import { FunctionComponent, ReactNode } from "react";
import OtherRandomPosts from "../components/OtherRandomPosts";

type Props = {
	children: ReactNode;
};

const PostWrapper: FunctionComponent<Props> = ({ children }) => {
	return (
		<>
			<article className="mt-6 max-w-none prose prose-stone prose-md dark:prose-invert">
				{children}
			</article>
			{/* <OtherRandomPosts /> */}
		</>
	);
};

export default PostWrapper;

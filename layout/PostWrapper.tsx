import { FunctionComponent, ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const PostWrapper: FunctionComponent<Props> = ({ children }) => {
	return (
		<article className="max-w-none prose prose-stone prose-md dark:prose-invert">
			{children}
		</article>
	);
};

export default PostWrapper;

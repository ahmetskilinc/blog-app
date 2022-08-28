import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";

const EditThisPage = () => {
	const router = useRouter();
	return router.pathname.includes("/p/") ? (
		<Link
			href={`https://github.com/ahmetskilinc/blog-app/blob/main/pages${router.pathname}.mdx`}
		>
			<a className="hover:underline flex items-center" target="_blank">
				Edit this page{" "}
				<FontAwesomeIcon icon={faUpRightFromSquare} size="1x" className="ml-1 h-4" />
			</a>
		</Link>
	) : null;
};

export default EditThisPage;

import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Top10LinkTitle = ({ link, title }: { link: string; title: string }) => {
	return (
		<Link href={link}>
			<a className="hover:underline flex items-center" target="_blank">
				{title}
				<FontAwesomeIcon icon={faUpRightFromSquare} size="xs" className="ml-2 h-5" />
			</a>
		</Link>
	);
};

export default Top10LinkTitle;

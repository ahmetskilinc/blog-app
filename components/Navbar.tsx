import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	return (
		<nav className="py-4">
			<div className="max-w-[960px] mx-auto px-4 lg:px-0 flex justify-between align-middle">
				<Link href="/">
					<a className="hover:underline">
						<p className="text-2xl">Ahmet</p>
					</a>
				</Link>
				<div className="flex flex-row gap-4">
					{/* <Link href="/">
						<a className="hover:underline">Blog</a>
					</Link> */}
					<Link href="https://ahmetk.dev">
						<a className="hover:underline" target="_blank">
							Portfolio{" "}
							<FontAwesomeIcon
								icon={faUpRightFromSquare}
								size="1x"
								className="ml-1"
							/>
						</a>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

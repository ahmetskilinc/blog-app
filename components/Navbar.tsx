import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import EditThisPage from "./EditThisPage";

const Navbar = () => {
	return (
		<>
			<nav className="text-neutral-600 dark:text-neutral-300 h-28 flex items-center w-full">
				<div className="max-w-[800px] w-full mx-auto px-4 lg:px-0 flex justify-between items-center">
					<div className="flex items-center gap-3">
						<img
							src="/memoji.png"
							alt="My memoji"
							className="bg-blue-400 rounded-full object-contain h-[32px] w-[32px] lg:h-[44px] lg:w-[44px] p-1"
						/>
						<Link href="/">
							<a className="hover:underline">
								<p className="text-lg lg:text-2xl">Ahmet&apos;s Blog</p>
							</a>
						</Link>
					</div>
					<div className="flex flex-col lg:flex-row items-end gap-y-1 gap-x-6">
						<EditThisPage />
						<Link href="https://ahmetk.dev">
							<a className="hover:underline flex items-center" target="_blank">
								Portfolio{" "}
								<FontAwesomeIcon
									icon={faUpRightFromSquare}
									size="1x"
									className="ml-1 h-4"
								/>
							</a>
						</Link>
					</div>
				</div>
			</nav>
			<hr className="border-neutral-300 dark:border-neutral-600" />
		</>
	);
};

export default Navbar;

import Link from "next/link";

const Footer = () => {
	return (
		<footer className="py-4">
			<div className="max-w-[960px] mx-auto px-4 lg:px-0 text-center">
				<p className="my-6">
					Developer and designed by{" "}
					<Link href="https://ahmetk.dev">
						<a target="_blank" className="hover:underline">
							Ahmet
						</a>
					</Link>
				</p>
			</div>
		</footer>
	);
};

export default Footer;

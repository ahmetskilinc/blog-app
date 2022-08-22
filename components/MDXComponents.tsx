import { AnchorHTMLAttributes, ClassAttributes, HTMLAttributes, LiHTMLAttributes } from "react";

const MDXComponents = {
	p: (
		props: JSX.IntrinsicAttributes &
			ClassAttributes<HTMLParagraphElement> &
			HTMLAttributes<HTMLParagraphElement>
	) => <p {...props} className="text-neutral-700 dark:text-neutral-300" />,
	a: (
		props: JSX.IntrinsicAttributes &
			ClassAttributes<HTMLAnchorElement> &
			AnchorHTMLAttributes<HTMLAnchorElement>
	) => (
		<a
			className="hover:underline font-normal text-neutral-700 dark:text-neutral-300"
			{...props}
		/>
	),
	pre: (
		props: JSX.IntrinsicAttributes &
			ClassAttributes<HTMLPreElement> &
			HTMLAttributes<HTMLPreElement>
	) => (
		<div className="w-full transition-colors ease-linear shadow-lg">
			<div className="w-full h-8 rounded-t-lg bg-gray-300 dark:bg-slate-900 flex justify-start items-center space-x-1.5 px-4 mb-0">
				<span className="w-3 h-3 border-2 border-transparent rounded-full bg-red-500"></span>
				<span className="w-3 h-3 border-2 border-transparent rounded-full bg-yellow-500"></span>
				<span className="w-3 h-3 border-2 border-transparent rounded-full bg-green-500"></span>
			</div>
			<div className="bg-gray-100 dark:bg-zinc-700 border-t-0 w-full rounded-b-lg mt-0">
				<pre
					{...props}
					className={`m-0 my-0 mt-0 rounded-none rounded-b-lg ${props.className}`}
				/>
			</div>
		</div>
	),
	h1: (
		props: JSX.IntrinsicAttributes &
			ClassAttributes<HTMLHeadingElement> &
			HTMLAttributes<HTMLHeadingElement>
	) => <h1 {...props} className="text-neutral-700 dark:text-neutral-300" />,
	h2: (
		props: JSX.IntrinsicAttributes &
			ClassAttributes<HTMLHeadingElement> &
			HTMLAttributes<HTMLHeadingElement>
	) => <h2 {...props} className="text-neutral-700 dark:text-neutral-300" />,
	li: (
		props: JSX.IntrinsicAttributes &
			ClassAttributes<HTMLLIElement> &
			LiHTMLAttributes<HTMLLIElement>
	) => <li className="not-prose" {...props} />,
	ul: (
		props: JSX.IntrinsicAttributes &
			ClassAttributes<HTMLUListElement> &
			HTMLAttributes<HTMLUListElement>
	) => <ul className="list-disc not-prose" {...props} />,
	ol: (
		props: JSX.IntrinsicAttributes &
			ClassAttributes<HTMLOListElement> &
			HTMLAttributes<HTMLOListElement>
	) => <ol className="list-decimal not-prose" {...props} />,
	code: (
		props: JSX.IntrinsicAttributes & ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement>
	) => <code className="rounded p-[3px] bg-zinc-300 dark:bg-zinc-700" {...props} />,
	img: (
		props: JSX.IntrinsicAttributes &
			ClassAttributes<HTMLImageElement> &
			HTMLAttributes<HTMLImageElement>
	) => <img {...props} className="w-full object-cover aspect-auto" />,
};

export default MDXComponents;

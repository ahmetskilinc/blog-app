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

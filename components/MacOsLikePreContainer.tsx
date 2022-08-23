import React from "react";

const MacOsLikePreContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="w-full transition-colors ease-linear shadow-2xl">
			<div className="w-full h-8 rounded-t-lg bg-gray-300 dark:bg-slate-900 flex justify-start items-center space-x-1.5 px-4 mb-0">
				<span className="w-3 h-3 border-2 border-transparent rounded-full bg-red-500"></span>
				<span className="w-3 h-3 border-2 border-transparent rounded-full bg-yellow-500"></span>
				<span className="w-3 h-3 border-2 border-transparent rounded-full bg-green-500"></span>
			</div>
			<div className="bg-gray-100 dark:bg-zinc-700 border-t-0 w-full rounded-b-lg mt-0">
				{children}
			</div>
		</div>
	);
};

export default MacOsLikePreContainer;

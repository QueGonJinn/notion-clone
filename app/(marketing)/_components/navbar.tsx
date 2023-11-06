'use client';

import { useScrollTop } from '@/hooks/use-scroll-top';
import { ModeToggle } from '@/components/mode-toggle';
import { cn } from '@/lib/utils';
import { Logo } from './logo';

export const Navbar = () => {
	const scrolled = useScrollTop();

	return (
		<div
			className={cn(
				'z-50 top-0 fixed bg-background flex items-center w-full p-6',
				scrolled && 'border-b shadow-sm',
			)}
		>
			<Logo />
			<div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
				<ModeToggle />
			</div>
		</div>
	);
};

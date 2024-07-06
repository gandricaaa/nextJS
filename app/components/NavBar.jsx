import { nanoid } from 'nanoid';
import Link from 'next/link';
const links = [
	{
		href: '/about',
		label: 'About',
	},
	{
		href: '/contact',
		label: 'Contact',
	},
	{
		href: '/info',
		label: 'Info',
	},
	{
		href: '/products',
		label: 'Recepies',
	},
];
const NavBar = () => {
	return (
		<nav className='navbar bg-base-300'>
			<Link className='btn btn-primary' href='/'>
				Home
			</Link>
			<ul className='menu menu-horizontal'>
				{links.map((link) => {
					return (
						<li key={nanoid()}>
							<Link href={link.href}>{link.label}</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default NavBar;

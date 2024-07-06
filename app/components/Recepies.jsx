import Image from 'next/image';
import Link from 'next/link';

const Recepies = ({ recipes }) => {
	return (
		<div className='grid grid-cols-2 gap-2'>
			{recipes.map((recipe) => {
				return (
					<div className='card bg-base-100 w-96 shadow-xl'>
						<div className='card-body'>
							<h2 className='card-title'>{recipe.name}</h2>
							<p>{recipe.instructions}</p>
							<div className='card-actions justify-end'>
								<button className='btn btn-primary'>
									<Link href={`/products/${recipe.id}`}>
										Coock Now
									</Link>
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Recepies;

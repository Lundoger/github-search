import { useAppSelector } from "../hooks/hooks"

const FavoritesPage = () => {
	const { reposFav } = useAppSelector(state => state.userReducer)


	return (
		<section className="repos page__repos">
			<div className="repos__container">
				<ul style={{marginTop: 50}} className="repos__list list-repos">
					{reposFav.length === 0 && <p className="">Favorite list is empty...</p>}
					{reposFav?.map((link ,i) => (
						<a key={i} href={link} target="_blank" rel="noreferrer">{link}</a>
					))} 
				</ul>
			</div>
		</section>
	)
}

export default FavoritesPage
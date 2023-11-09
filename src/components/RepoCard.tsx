import { useAppDispatch, useAppSelector } from "../hooks/hooks"
import { IRepo } from "../models/models"
import { githubSlice } from "../store/reducers/githubSlice"

const RepoCard = ({ repo }: { repo: IRepo }) => {
	const {reposFav} = useAppSelector(state => state.userReducer)
	const {addReposToFav, removeRepos} = githubSlice.actions
	const dispatch = useAppDispatch()

	const toggleFavorite = (link: string) => {
		if(reposFav.includes(link)) dispatch(removeRepos(link))
		else dispatch(addReposToFav(link))
	}

	const btnClass = reposFav.includes(repo.html_url) ? 'repo-item__favorite repo-item__favorite--active' : 'repo-item__favorite'
	
	return (
		<li className="list-repos__item repo-item">
			<div className="repo-item__row">
				<div className="repo-item__info">
					<h2 className="repo-item__title"><a href={repo.html_url} target="_blank" rel="noreferrer">{repo.full_name}</a></h2>
					<p className="repo-item__visitors">
						Forks: <span style={{marginRight: 7}}>{repo.forks}</span>
						Watchers: <span>{repo.watchers}</span>
					</p>
					<p className="repo-item__desc">
						{repo?.description}
					</p>
				</div>
				<button 
					className={btnClass} 
					type="button"
					onClick={() => toggleFavorite(repo.html_url)}
				>
					<svg viewBox="0 0  21.5 21.5" fill="none" xmlns="http://www.w3.org/2000/svg"  transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)">
						<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
						<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.144"></g>
						<g id="SVGRepo_iconCarrier">
							<path d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z"  strokeWidth="1.104" strokeLinejoin="round"></path>
						</g>
					</svg>
				</button>
			</div>
		</li>
	)
}

export default RepoCard
import { useState, useEffect } from 'react'
import { useSearchUsersQuery, useLazyGetUsersReposQuery } from '../api/github.api'
import Spinner from '../components/Spinner'
import { useDebounce } from '../hooks/hooks'
import RepoCard from '../components/RepoCard'

const HomePage = () => {
	const [search, setSearch] = useState('')
	const [dropdown, setDropdown] = useState(false)
	const debounced = useDebounce(search)
	const {isFetching, isError, data: users} = useSearchUsersQuery(debounced, {
		skip: debounced.length < 3,
		refetchOnFocus: true,
	})
	const [fetchRepos, {isFetching: areReposLoading, isError: isRepoError, data: repos}] = useLazyGetUsersReposQuery()

	useEffect(() => {
		setDropdown(debounced.length >= 3 && users?.length! > 0)
	}, [debounced, users])

	const ClickHandler = (username: string) => {
		fetchRepos(username)
		setSearch('')
		setDropdown(false)
	}

	return (
		<>
			<section className="page__search search">
				<div className="search__container">
				{isError && <p className='error-message'>Something went wrong...</p>}
				{!isError && (
					<div className="search__content">
						<input 
							placeholder="Search for Github username..." 
							type="text" 
							className="search__input"
							value={search}
							onChange={e => setSearch(e.target.value)}
						/>
						{isFetching && <Spinner />}
						{dropdown && (
							<ul className="search__dropdown dropdown">
								{users?.map(user => (
									<li 
										key={user.id}
										className="dropdown__item"
										onClick={() => ClickHandler(user.login)}
									>{user.login}</li>
								))}
							</ul>
						)}
					</div>
				)}
				</div>
			</section>
			<section className="repos page__repos">
				<div className="repos__container">
					{!isRepoError && (	
						<ul className="repos__list list-repos">
							{areReposLoading && <Spinner/>}
							{repos?.map(repo => (
								<RepoCard 
									key={repo.id}
									repo={repo}
								/>
							))}
						</ul>
					)}
				</div>
			</section>
		</>
	)
}

export default HomePage
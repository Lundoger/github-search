import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IRepo, IUser, ServerResponse } from '../models/models'

export const githubApi = createApi({
	reducerPath: 'github/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.github.com/'
	}),
	refetchOnFocus: true,
	endpoints: build => ({
		searchUsers: build.query<IUser[], string>({
			query: (search: string, limit:number = 10) => ({
				url: `search/users`,
				params: {
					q: search,
					per_page: limit
				}
			}),
			transformResponse: (response: ServerResponse) => response.items
		}),
		getUsersRepos: build.query<IRepo[], string>({
			query: (username:string) => ({
				url: `users/${username}/repos`,
			})
		})
	})
})

export const {useSearchUsersQuery, useLazyGetUsersReposQuery} = githubApi
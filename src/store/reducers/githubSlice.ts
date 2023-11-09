import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface githubState {
	reposFav: string[],
}

const LS_FAV_KEY = 'rfk'

const initialState: githubState = {
	reposFav: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
}

export const githubSlice = createSlice({
	name: 'github',
	initialState,
	reducers: {
		addReposToFav(state, action: PayloadAction<string>) {
			state.reposFav.push(action.payload)
			localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.reposFav))
		},
		removeRepos(state, action: PayloadAction<string>) {
			state.reposFav = state.reposFav.filter(link => link !== action.payload)
			localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.reposFav))
		}
	}
})

export default githubSlice.reducer
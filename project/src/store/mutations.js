export const setLoading = (state, payload) => {
    state.loading = payload
}

export const setError = (state, payload) => {
    state.error = payload
}

export const clearError = state => {
    state.error = null
}

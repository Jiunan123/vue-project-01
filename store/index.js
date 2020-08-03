
export const state = () => ({
  activePageIndex: 0
})

export const mutations = {
  setActivePage (state, data) {
    state.activePageIndex = data
  }
}

// export const strict = false


export const state = () => ({
  activeNavId: 0,
  navInfos: {}
})

export const mutations = {
  setactiveNavId (state, data) {
    state.activeNavId = data
  },
  setNavInfos (state, data) {
    state.navInfos = data
  }
}

export const getters = {
  activeNavId (state) {
    return state.activeNavId
  },
  navList (state) {
    const list = []
    for (const name in state.navInfos) {
      list.push(state.navInfos[name])
    }
    return list.sort((a, b) => { return a.id > b.id })
  },
  getNavInfo: state => name => (state.navInfos[name])
}
// export const strict = false

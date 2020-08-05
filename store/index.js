
export const state = () => ({
  activeNavId: 0,
  navInfos: {}
})

export const mutations = {
  setActiveNavId (state, id) {
    if (id >= state.navInfos.length || id < 0) { return }
    state.activeNavId = +id
  },
  setActiveNav (state, name) {
    if (!state.navInfos[name]) { return }
    state.activeNavId = state.navInfos[name].id
  },
  setNavInfos (state, navInfos) {
    state.navInfos = navInfos
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

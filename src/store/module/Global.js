const state = {
  isMobile: true,
  token: localStorage.getItem('token') || '',
  user: JSON.parse(localStorage.getItem('user')) || '',
  searchKeyLists: {},
  authMenu: [],
  applyList: JSON.parse(localStorage.getItem('ApplyList')) || [],
  manageList: JSON.parse(localStorage.getItem('ManageList')) || [],
  messageList: JSON.parse(localStorage.getItem('MessageList')) || [],
}
const mutations = {
  setToken: (state, token) => state.token = token,
  setUser: (state, user) => state.user = user,
  setSearchKeyLists: (state, searchKeyLists) => state.searchKeyLists = searchKeyLists,
  setAuthMenu: (state, authMenu) => state.authMenu = authMenu,
  setApplyList: (state, applyList) => state.applyList = applyList,
  setManageList: (state, manageList) => state.manageList = manageList,
  setMessageList: (state, MessageList) => state.messageList = MessageList,
  setIsMobile: (state, isMobile) => state.isMobile = isMobile,
};

const actions = {
  setToken: ({commit}, token) => commit('setToken', token),
  setUser: ({commit}, user) => commit('setUser', user),
  setSearchKeyLists: ({commit}, searchKeyLists) => commit('setSearchKeyLists', searchKeyLists),
  setAuthMenu: ({commit}, authMenu) => commit('setAuthMenu', authMenu),
  setApplyList: ({commit}, applyList) => commit('setApplyList', applyList),
  setManageList: ({commit}, manageList) => commit('setManageList', manageList),
  setMessageList: ({commit}, messageList) => commit('setMessageList', messageList),
  setIsMobile: ({commit}, isMobile) => commit('setIsMobile', isMobile),
  // setAuthMenu: (state, authMenu) => state.authMenu = authMenu
};

const getters = {
  getToken: state => state.token,
  getUser: state => state.user,
  getSearchKeyLists: state => state.searchKeyLists,
  getAuthMenu: state => state.authMenu,
  getApplyList: state => state.applyList,
  getManageList: state => state.manageList,
  getMessageList: state => state.messageList,
  getIsMobile: state => state.isMobile,
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}

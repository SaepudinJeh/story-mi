export default {
  namespaced: true,
  state: {
    base_url: import.meta.env.VITE_BASE_URL_PROD
  },
  getters: {
    getBaseUrl(state) {
      return import.meta.env.PROD ? state.base_url : import.meta.env.VITE_BASE_URL_LOCAL
    }
  }
}
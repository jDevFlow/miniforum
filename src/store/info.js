import firebase from 'firebase/app'
import Fingerprint2 from 'fingerprintjs2'
export default {
  state: {
    info: {}
  },
  mutations: {
    setInfo(state, info) {
      state.info = info
    },
    clearInfo(state) {
      state.info = {}
    }
  },
  actions: {
    async fetchInfo({dispatch, commit}) {
      try {
        const uid = await dispatch('getUid')
        const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
        commit('setInfo', info)
      } catch (e) {

      }
    },
    getName({state}){
      console.log(state.info.name);
      const name = state.info.name
      return name
    },

    async sendFPJS({dispatch, commit}){
      try {
        const fpjs = ''
        const fpOptions = {excludeAdBlock: true}
        Fingerprint2.getV18(fpOptions,(result, components) => {
         fpjs = result;
         const fbcomponents = components
         //console.log(components);
       })

        await firebase.database().ref('/hit-counter/bill/input').push({
          indate:firebase.database.ServerValue.TIMESTAMP,fpjs
        })
      } catch (e) {

      }
    }
  },
  getters: {
    info: s => s.info
  }
}

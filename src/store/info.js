import firebase from 'firebase/app'
import Fingerprint2 from 'fingerprintjs2'
export default {
  state: {
    info: {},
    fpjs:{}
  },
  mutations: {
    setInfo(state, info) {
      state.info = info
    },
    clearInfo(state) {
      state.info = {}
    },
    setFingerPrint(state, fpjs){
      state.fpjs = fpjs
    }
  },
  actions: {
    async fetchInfo({dispatch, commit}) {
      try {
        const uid = await dispatch('getUid')
        const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
        commit('setInfo', info)
      } catch (e) {
          commit('setError',e)
      }
    },
    getName({state}){
      const name = state.info.name
      return name
    },

    async sendFPJS({dispatch, commit},{state,fingerprint}){
      try {
       commit('setFingerPrint',fingerprint)
       var timestamp = (new Date()).getTime()
       const lastvisit = (await firebase.database().ref(`/hit-counter/bill/lastvisit/${fingerprint}`).once('value')).val() ||{}
       const nowDay = Math.floor((new Date().getTime())/86400000) * 86400000
       if(typeof lastvisit.indate !='undefined'){
         if(lastvisit.indate<nowDay){
           await dispatch('checkFgjs',{timestamp,fingerprint})
         }
       }else {
         await dispatch('checkFgjs',{timestamp,fingerprint})
       }
      } catch (e) {
        commit('setError',e)
      }
    },
    async checkFgjs({dispatch, commit},{timestamp,fingerprint}){
      try {
        await firebase.database().ref(`/hit-counter/bill/lastvisit/${fingerprint}/indate`).set(
          timestamp
        )
        await firebase.database().ref(`/hit-counter/bill/input`).push({
          fpjs: fingerprint,
          indate:timestamp
        })
      } catch (e) {
        commit('setError',e)
      }
    },
    async getCountToday({dispatch, commit}){
      const records = (await firebase.database().ref(`/hit-counter/bill/lastvisit/`).once('value')).val() ||{}
      const nowDay = Math.floor((new Date().getTime())/86400000)
      const startDay = nowDay*86400000
      const t = Object.keys(records).map(key =>({...records[key], id:key}))
                      .filter(r => r.indate > startDay)
                      .reduce((total,record)=>{
                        return total += +1
                      },0)
      return t
    },
    async getCountVisitorsAll({dispatch, commit}){
      const records = (await firebase.database().ref(`/hit-counter/bill/input`).once('value')).val() ||{}

      const t = Object.keys(records).map(key =>({...records[key], id:key}))
                      .reduce((total,record)=>{
                        return total += +1
                      },0)
      return t
    }

  },
  getters: {
    info: s => s.info,
    fpjs: s => s.fpjs
  }
}

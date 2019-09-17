import firebase from 'firebase/app'

export default {
  actions:{
    async sendVoting({dispatch, commit},{votlang}){
      try {
        const uid = await dispatch('getUid')
        const voting = await firebase.database().ref(`/votings/voting-1/records`).push({uid, votlang})
      } catch (e) {
        commit('setError',e)
        throw e
      }
    },
    async fetchLangs({dispatch,commit}){
      try {
        const langs = (await firebase.database().ref(`/votings/voting-1/base`).once('value')).val() ||{}
        return Object.keys(langs).map(key=>({...langs[key], id:key}) )
      } catch (e) {
        commit('setError',e)
        throw e
      }

    },
    async fetchRecords({dispatch, commit}){
      try {
        const records = (await firebase.database().ref(`/votings/voting-1/records`).once('value')).val() ||{}
        return Object.keys(records).map(key=>({...records[key], id:key}) )
      } catch (e) {
        commit('setError',e)
        throw e
      }

    }
  }

}

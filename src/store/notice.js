import firebase from 'firebase/app'

export default {
  state:{
    notices:[]
  },
  mutations: {
      addNotice(state, notice){
        state.notices.push(notice)
      },
      clearNotice(state){
        state.notices = []
      }
  },
  actions:{
    async sendNotice({commit,dispatch}, {newtextbody}){
      try {
        //const uid = await dispatch('getUid')
        const uid = await dispatch('getName')
        const datecreate = new Date().getTime()
        const notice = await firebase.database().ref(`/notices/home`).push({uid, newtextbody,datecreate })
      } catch (e) {
        commit('setError',e)
        throw e
      }
    },
    async fetchNotice({commit,dispatch}){
      try {
        const uid = await dispatch('getUid')
        const notices = (await firebase.database().ref(`/notices/home`).once('value')).val()
        const cats =[]
        Object.keys(notices).forEach(key =>{
          var date = new Date(notices[key].datecreate);
          cats.push({
            datecreate:date,
            textbody:notices[key].newtextbody,
            author:notices[key].uid,
            id:key
          })
        })
        return cats
      } catch (e) {
        commit('setError',e)
        throw e
      }


    }

  }

}

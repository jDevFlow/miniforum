import firebase from 'firebase/app'

export default {
  actions:{
    async sendVoting({votlang}){
      var noticeRef = await firebase.database().collection("/notice/home");
      console.log(noticeRef);
      var query = noticeRef.where("uid", "==", 'Figaro');
      console.log(query.length);
      console.log(votlang);


    }
  }

}

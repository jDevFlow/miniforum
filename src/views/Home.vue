<template lang="html">
<div>
    <div class="row">    
      <Notice v-for="item in items" :textbody="item.textbody" :datecreate="item.datecreate" :author="item.author"/>
    </div>
    <div class="fixed-action-btn" v-if="!isGuest">
      <!-- Modal Trigger -->
       <button class="waves-effect waves-light btn-floating modal-trigger" href="#modal">
         <i class="large material-icons">add</i>
       </button>
    </div>
     <!-- Modal Structure -->
     <div id="modal" ref="modal" class="modal bottom-sheet">
       <form class=""  @submit.prevent="sendText" >
         <div class="modal-content">
           <div class="input-field col s12">
             <i class="material-icons prefix">mode_edit</i>
             <textarea id="textarea1" v-model.text="newtextbody" class="materialize-textarea"></textarea>
             <label for="textarea1">Сообщение</label>
           </div>
         </div>
         <div class="modal-footer">
           <button class="modal-close waves-effect waves-green btn" >
             <i class="large material-icons">send</i>
             Отправить
           </button>
         </div>
       </form>
     </div>
</div>
</template>

<script>
import Notice from '@/components/app/Notice.vue'
export default {
  name: 'home',
  data: () => ({
    items: [],
  modal:null,
  newtextbody:'',
  isGuest:true
  }),
  async created() {
    this.items = await this.$store.dispatch('fetchNotice')
  },
  methods: {
    async sendText() {
      try {
        await this.$store.dispatch('sendNotice',{newtextbody:this.newtextbody})
        this.newtextbody = ''
        this.$message('Сообщение отправлено')
        this.items = await this.$store.dispatch('fetchNotice')
      } catch (e) {}
    }
  },
  async mounted() {

    var nametmp
    try {
      nametmp =  this.$store.getters.info.name
    } catch (e) {

    } finally {
      if(typeof nametmp != "undefined"){
        this.isGuest= false
      } else{

      }
      this.modal = M.Modal.init(this.$refs.modal,{})
      this.items = await this.$store.dispatch('fetchNotice')
    }
  },
  beforeDestroy() {
    //do something before destroying vue instance
    if (this.modal && this.modal.destroy) {
      this.modal.destroy()
    }
  },
  components: {
    Notice
  }
}
</script>

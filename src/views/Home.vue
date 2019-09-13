<template lang="html">
<div>




    <div class="row">
      <Notice v-for="item in items" :textbody="item.textbody" :datecreate="item.datecreate" :author="item.author"/>
    </div>
    <div class="fixed-action-btn" v-if="isUser">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>

    <!-- Modal Trigger -->
     <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

     <!-- Modal Structure -->
     <div id="modal1" class="modal bottom-sheet">
       <div class="modal-content">
         <h4>Modal Header</h4>
         <p>A bunch of text</p>
       </div>
       <div class="modal-footer">
         <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
       </div>
     </div>
</div>
</template>

<script>
import Notice from '@/components/app/Notice.vue'
export default {
  name: 'home',
  data: () => ({
    items: [
    {datecreate:'2019-02-01 11:55:22', textbody: 'Foo FooFoo FooFooFoo FooFooFooFoo' , author:'figaro' },
    {datecreate:'2019-06-01 10:05:12',  textbody: 'Bar BarBar BarBarBar BarBarBarBar', author: 'figaro'},
    {datecreate:'2019-02-01 11:55:22', textbody: 'Foo2 FooFoo2 FooFooFoo2 FooFooFooFoo2' , author:'figaro' },
    {datecreate:'2019-06-01 10:05:12',  textbody: 'Bar2 BarBar2 BarBarBar2 BarBarBarBar2 <br/> Bar2 BarBar2 BarBarBar2 BarBarBarBar2', author: 'figaro'}
  ],
  modal1:null
  }),
  mounted() {
    this.modal1 = M.Modal.init(this.$refs.modal1)

  },
  computed:{
    isUser(){
      return  this.$store.getters.info.name
    }
  },
  components: {
    Notice
  }
}
</script>

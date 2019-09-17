<template>
  <div>
    <div class="page-title">
      <h3>Профиль</h3>
    </div>
    <form class="form">
      <div class="input-field">
        <input disabled
            id="description"
            type="text"
            :value="nameCompleate"
        >
        <label for="description">Имя</label>
        <span
              class="helper-text invalid"></span>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  computed: {
  nameCompleate(){
      var nametmp =  this.$store.getters.info.name
      if(typeof nametmp != "undefined"){
        return  this.$store.getters.info.name
      } else{
      
        return 'Гость'
      }
    }
  },
  mounted() {
    M.updateTextFields();
  }

}
</script>

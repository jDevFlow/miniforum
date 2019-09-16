<template>
  <div>
    <div class="page-title">
      <h3>Профиль</h3>
    </div>

    <form class="form">
      <div class="input-field">
        <input
            id="description"
            type="text"
        >
        <label for="description">Имя</label>
        <span
              class="helper-text invalid">{{name}}</span>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data:()=>{
    
  },
  computed: {
    name() {
        return  this.$store.getters.info.name
    },
  }

}
</script>

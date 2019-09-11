<template lang="html">
  <nav class="navbar teal lighten-2">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('click')">
          <i class="material-icons black-text">dehaze</i>
        </a>
      </div>
      <ul class="right hide-on-small-and-down">
        <li>
          <a
              class="dropdown-trigger black-text"
              href="#"
              data-target="dropdown"
              ref="dropdown"
          >
            USER NAME
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id='dropdown' class='dropdown-content'>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data:()=>({
    dropdown:null,
  }),
  methods:{
    async logout(){
      console.log('logout');
      await this.$store.dispatch('logout')
      this.$router.push('/login?message=logout')
    }
  },
  mounted(){
    this.dropdown = M.Dropdown.init(this.$refs.dropdown,{
      constrainWidth:false
    })
  },
  beforeDestroy(){
    if(this.dropdown && this.dropdown.destroy){
      this.dropdown.destroy();
    }
    console.log('before  Destroy');

  }

}
</script>

<style lang="css" scoped>
</style>

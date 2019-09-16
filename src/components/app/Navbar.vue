<template>
  <div id="nav">
    <div class="navbar-fixed">
      <nav class="blue darken-3">
        <div class="nav-wrapper ">
          <div class="navbar-left">
            <a href="#" @click.prevent="$emit('click')">
              <i class="material-icons white-text">dehaze</i>
            </a>
            <span class="white-text">{{date | date('datetime')}}</span>
          </div>


          <ul class="right hide-on-small-and-down">
            <li>
              <a
                  class="dropdown-trigger white-text"
                  href="#"
                  data-target="dropdown"
                  ref="dropdown"
              >
                <!--
                <template v-if="name">{{name}}</template>
                <template v-else >Гость</template>
                -->
                {{nameCompleate}}
                <i class="material-icons right">arrow_drop_down</i>
              </a>

              <ul id='dropdown' class='dropdown-content'>
                <template v-if="name">
                  <li>
                    <router-link to="/profile" class="black-text">
                      <i class="material-icons">account_circle</i>Профиль
                    </router-link>
                  </li>
                  <li class="divider" tabindex="-1"></li>
                  <li>
                    <a href="#" class="black-text" @click.prevent="logout">
                      <i class="material-icons">assignment_return</i>Выйти
                    </a>
                  </li>
                </template>
                <template v-else >
                  <li>
                    <a href="#" class="black-text" @click.prevent="login">
                      <i class="material-icons">input</i>Войти
                    </a>
                  </li>
                </template>
              </ul>

            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>


</template>


<script>
export default {
  name:'navbar',
  data: () => ({
    date: new Date(),
    interval: null,
    dropdown: null
  }),
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/login?message=logout')
    },
    login(){
      this.$router.push('/login')
    }
  },
  computed: {
    name() {
        return  this.$store.getters.info.name
    },
    nameCompleate(){
      var nametmp =  this.$store.getters.info.name
      if(typeof nametmp != "undefined"){
        return  this.$store.getters.info.name
      } else{
        console.log(nametmp);
        return 'Гость'
      }
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: false
    })
  },
  beforeDestroy() {
    clearInterval(this.interval)
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy()
    }
  }
}
</script>
<style lang="scss" scoped>
  nav{
    padding: 0 2rem;
  }
</style>

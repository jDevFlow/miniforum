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
                {{name}}
                <i class="material-icons right">arrow_drop_down</i>
              </a>

              <ul id='dropdown' class='dropdown-content'>
                <template v-if="!isGuest">
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
    dropdown: null,
    isGuest:true,
    name:'guest'
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
  mounted() {
    var nametmp
    try {
      nametmp =  this.$store.getters.info.name
    } catch (e) {

    } finally {
      if(typeof nametmp != "undefined"){
        this.name = nametmp
        this.isGuest= false
      } else{
        this.name = 'Гость'
      }
      this.interval = setInterval(() => {
        this.date = new Date()
      }, 1000)
      this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
        constrainWidth: false
      })
    }
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
    z-index: 999;
    padding: 0 2rem;
  }
</style>

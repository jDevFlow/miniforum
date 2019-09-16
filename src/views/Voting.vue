<template>
  <div>
    <form class=""  @submit.prevent="setVoting">
      <div class="row">
          <div class="col s12 m6">
            <div class="card">
              <div class="card-content">
                <h5>Ваш любимый язык программирования</h5>
                <p>
                  <label>
                    <img src="https://www.tutorialspoint.com/images/java8.png" alt=""  class="circle">
                    <input class="with-gap" name="group1" type="radio" value="Java" v-model="votlang">
                    <span>Java</span>
                  </label>
                </p>
                <p>
                  <label>
                    <img src="https://www.tutorialspoint.com/images/Python.png" alt=""  class="circle">
                    <input class="with-gap" name="group1" type="radio" value="Python" v-model="votlang">
                    <span>Python</span>
                  </label>
                </p>
                <p>
                  <label>
                    <img src="https://www.tutorialspoint.com/images/php.png" alt=""  class="circle">

                    <input class="with-gap" name="group1" type="radio" value="PHP" v-model="votlang">
                    <span>PHP</span>
                  </label>
                </p>
                <p>
                  <label>
                    <img src="https://www.tutorialspoint.com/images/Swift.png" alt=""  class="circle">
                    <input class="with-gap" name="group1" type="radio" value="Swift" v-model="votlang">
                    <span>Swift</span>
                  </label>
                </p>
                <div class="card-action">
                  <span class="left">Выбрано: {{ votlang }}</span>
                  <div class="right">
                    <button class="waves-effect waves-green btn" type="submit" >Голосовать</button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'voting',
  data: () => ({
    votlang:''
  }),
  methods: {
    async setVoting() {
      if(this.votlang.length>0){
        const test = await this.$store.dispatch('sendVoting',{votlang:this.votlang})
        console.log(this.votlang);
        console.log(test);
      }

    }
  }

}
</script>
<style lang="scss" scoped>
</style>

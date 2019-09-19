<template>
  <div>
    <form class=""  @submit.prevent="setVoting">
      <div class="row">
          <div class="col s12 m6">
            <Loader v-if="loading"/>
            <div class="row"  v-else >
              <div class="col s12">
                <ul class="tabs tabs-fixed-width" ref="tabsx">
                  <li class="tab col s3"><a class="active" href="#voting">Голосование</a></li>
                  <li class="tab col s3"><a  href="#resvoting">Результат</a></li>
                </ul>
              </div>
              <div id="voting" class="col s12">
                <div class="card" >
                  <div class="card-content" >
                    <h5>Ваш любимый язык программирования</h5>
                    <div class="row">
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
                    </div>
                    <div class="card-action" v-if="!useVoting">
                      <span class="left">Выбрано: {{ votlang }}</span>
                      <div class="right">
                        <button  class="waves-effect waves-green btn" type="submit" >Голосовать</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div id="resvoting" class="col s12">
              <div v-for="lang in langs" :key="lang.id">
                <p>
                  <strong>{{lang.votlang}}</strong>
                  {{lang.spend}}
                </p>
                <div class="progress">
                  <div
                    class="determinate"
                    :style="{width:lang.progressPercent +'%'}"
                  ></div>
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
import {mapGetters} from 'vuex'
export default {
  name: 'voting',
  data: () => ({
    loading:true,
    votlang:'',
    langs:[],
    tabsx:null,
    useVoting:false
  }),
  computed:{
    ...mapGetters['info']
  },
  async mounted() {
    const records = await this.$store.dispatch('fetchRecords')
    const langs = await this.$store.dispatch('fetchLangs')
    const uid = await  this.$store.dispatch('getUid')
    this.useVoting = records.findIndex(x => x.uid ===uid) != -1 ? true: false
    if(this.useVoting){
      this.votlang = records.find(x => x.uid ===uid).votlang
    }

    this.langs = langs.map(lng=>{
        const spend = records
        .filter(r => r.votlang === lng.votlang)
        .reduce((total,record)=>{
          return total += +1
        },0)

        const percent = 100 * spend/records.length
        const progressPercent = percent > 100 ? 100 : percent
        return{
          ...lng,
          progressPercent,
          spend
        }
    })
    this.loading = false
    setTimeout(()=>{
      this.tabsx = M.Tabs.init(this.$refs.tabsx, {});
    },0)

  },
  methods: {
    async setVoting() {
      if(this.votlang.length>0){
        const test = await this.$store.dispatch('sendVoting',{votlang:this.votlang})
        this.useVoting =true
        const records = await this.$store.dispatch('fetchRecords')
        this.langs = this.langs.map(lng=>{
            const spend = records
            .filter(r => r.votlang === lng.votlang)
            .reduce((total,record)=>{
              return total += +1
            },0)

            const percent = 100 * spend/records.length
            const progressPercent = percent > 100 ? 100 : percent
            return{
              ...lng,
              progressPercent,
              spend
            }
        })
        this.tabsx.select('resvoting');
      }
    }
  },
  beforeDestroy() {
    //do something before destroying vue instance
    if (this.tabs && this.tabs.destroy) {
      this.tabs.destroy()
    }
  }

}
</script>
<style lang="scss" scoped>
</style>

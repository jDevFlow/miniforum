<template>
  <div>
      <p>
        Уникальный ID : <b>{{ fingerprint }}</b>
      </p>
  </div>
</template>
<script>
import Fingerprint2 from 'fingerprintjs2'
export default{
  name: 'fpjs',
  data:()=> ({
    fingerprint: '',
    fpComponents: [],
    fpOptions: {
      excludeAdBlock: true
    }
  }),
  methods: {
    fetchFingerprint(){
       new Fingerprint2.getV18(this.fpOptions,(result, components) => {
        this.fingerprint = result;
        this.fpComponents = components;// an array of FP components

      })
    },
    async saveFpjs(){
      await this.$store.dispatch('sendFPJS',{fingerprint:this.fingerprint})
    }
  },
  created(){
    this.fetchFingerprint()
  },
   watch: {
    // whenever question changes, this function will run
     fingerprint: async function (newFingerprint, oldFingerprint) {
        await this.saveFpjs()
    }
  }
}
</script>
<style lang="scss" scoped>
.table {
      table-layout: fixed;
    word-wrap: break-word;
}
</style>

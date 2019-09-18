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
        //console.log(components);
      })
    }
  },
  created(){
    this.fetchFingerprint();
  }
}
</script>
<style lang="scss" scoped>
.table {
      table-layout: fixed;
    word-wrap: break-word;
}
</style>

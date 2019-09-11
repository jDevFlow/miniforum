<template lang="html">
<div>
  <a id="add" href="#!" class="btn-floating btn-large scale-transition">
      <i class="material-icons">add</i>
  </a>
  <br>
    <div class="row">
      <Notice v-for="item in items" :textbody="item.textbody" :datecreate="item.datecreate" :author="item.author"/>
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
  ]
  }),
  components: {
    Notice
  }
}
</script>
<style lang="scss" scoped>
</style>

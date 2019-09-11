<template>
<div>
  <div id="messages" >

    <div class="container">
      <div v-for="item in items">
        <Message textbody="{{item.message}} />
      </div>
    </div>

  </div>
</div>
</template>
<script>
import Message from './components/app/Message.vue'
export default {
  name: "home",
  data: () => ({
    items: [
    {datacreate:'2019-02-01 11:55:22', message: 'Foo FooFoo FooFooFoo FooFooFooFoo' , author:'figaro' },
    {datacreate:'2019-06-01 10:05:12',  message: 'Bar BarBar BarBarBar BarBarBarBar', author: 'figaro'}
  ],
  components: {
    Message
  }
  })
}
</script>
<style lang="scss" scoped>
</style>

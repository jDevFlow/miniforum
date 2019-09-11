<template lang="html">
<div>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
        >
      <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
    </router-link >
  </ul>
  <div class="card">
    <span>Счетчик посещений</span>
  </div>
</div>
</template>

<script>
export default {
  props:['value'],
  data:()=>({
    links:[
      {title:'Сообщения', url:'/', exact:true},
      {title:'Голосование', url:'/voting'}
    ]
  })
}
</script>

<style lang="css" scoped>
</style>

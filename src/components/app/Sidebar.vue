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
      <a href="#" class="waves-effect waves-yellow pointer"><i class="material-icons">{{link.icon}}</i> {{link.title}}</a>
    </router-link >
  </ul>
</div>
</template>

<script>
export default {
  props:['value'],
  data:()=>({
    links:[
      {title:'Сообщения', url:'/', exact:true ,icon:'message' },
      {title:'Голосование', url:'/voting', icon: 'poll'}
    ]
  })
}
</script>
<style lang="scss" scoped>
  .sidenav{
    z-index: 990;

  }
</style>

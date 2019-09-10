<template lang="html">
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
</template>

<script>
export default {
  props:['value'],
  data:()=>({
    links:[
      {title:'Статистика', url:'/', exact:true},
      {title:'Список ПЦ', url:'/powercenters'},
      {title:'Синхронизация', url:'/planning'},
      {title:'Настройка полей', url:'/record'},
      {title:'Категории', url:'/categories'},
    ]
  })
}
</script>

<style lang="css" scoped>
</style>

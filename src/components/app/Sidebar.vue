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
    <li>
      <div class=" card row" style="margin: 0 1rem; padding: 0 1rem">
        <p>За сегодня:
        <span>{{countDay}}</span></p>
        <p>Всего:
        <span>{{countAll}}</span></p>
      </div>
    </li>
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
    ],
    countDay:0,
    countAll:100500
  }),
   async mounted() {
    //do something after mounting vue instance

    this.countDay = await this.$store.dispatch('getCountToday')

    this.countAll = await  this.$store.dispatch('getCountVisitorsAll')

  }
}
</script>
<style lang="scss" scoped>
  .sidenav{
    z-index: 990;

  }
</style>

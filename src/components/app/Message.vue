<template>
<div>
  <div class="card blue lighten-4">
    <div>Автор: {{ author }}</div>
    <div>{{ textbody }}</div>
    <div>{{ datecreate }}</div>
    <div><router-link :to="{ name: 'comments', params: { property: value}}"></router-link></div>
  </div>
</div>
</template>
<script>
export default {
  props:{
    id: String,
    author: String,
    textbody: String,
    datecreate: String
  }
}
</script>

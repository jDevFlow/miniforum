<template>
<div>
  <div>Автор: {{ author }}</div>
  <div>{{textbody}}</div>
  <div>{{datecreate}}</div>
  <div><router-link :to="{ name: 'comments', params: { property: value}}"></router-link></div>
</div>
</template>
<script>
export default {}
</script>

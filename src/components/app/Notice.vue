<template>
<div>
  <div class="card blue lighten-4">
    <div>Дата: {{ datecreate }} - Автор: {{ author }}</div>
    <div>{{ textbody }}</div>
     <br>
    <div> <button class="btn">Комментарии</button> </div>
  </div>
</div>
</template>
<script>
export default {
  name:'Notice',
  props:{
    id: String,
    author: String,
    textbody: String,
    datecreate: String
  }
}
</script>

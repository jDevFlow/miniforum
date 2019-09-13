<template>
<div>
  <div class="row">
    <div class="col s12">
      <div class="card  blue-grey lighten-5">


        <span class="card-title">
          Дата: {{ datecreate }} - Автор: {{ author }}
        </span>


        <div class="card-content">
          <p>{{ textbody }}</p>
        </div>
      </div>

    </div>
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

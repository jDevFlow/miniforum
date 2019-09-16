<template>
<div>
  <div class="row">
    <div class="col s12">
      <div class="card  blue-grey lighten-5">
        <span class="card-title">
          <div class="collection">
             Автор: {{ author }}
             <span class="new badge" data-badge-caption="">{{datecreate | date('datetime')}}</span>
          </div>
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
  props:['id','author','textbody','datecreate']
}
</script>

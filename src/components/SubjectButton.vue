<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <li>
        <button type="button" class="btn btn-secondary">url</button>
      </li>
    </ul>
  </div>
</template>



<script>
export default {
  name: "SubjectButton",
  props: {
      title: {
          type: String
      }
  }, 
  data: function () {
      return {
          title2: this.title
      }
  }
};
</script>
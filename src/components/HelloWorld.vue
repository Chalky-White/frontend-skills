<template>
  <div>
    <h1>
      Hello World {{ person.firstname }} {{ person.lastname }} de {{ from }} !
    </h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      person: {
        firstname: "John",
        lastname: "Doe"
      },
      from: "New York"
    };
  }
};
</script>

<style></style>

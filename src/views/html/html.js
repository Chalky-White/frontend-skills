import Vue from "vue";
import Header from "@/components/header/header.vue";

new Vue({
  el: "#html",
  components: {
    header: Header
  }
});

export default {
  name: "html",
  props: {
    msg: String
  }
};

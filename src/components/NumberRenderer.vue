<template>
  <div>
    {{numbers}}
  </div>
</template>
<script>
export default {
  props: {
    even: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
  computed: {
    numbers() {
      const evens = [];
      const odds = [];
      
      for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) {
          evens.push(i);
        } else {
          odds.push(i);
        }
      }
      return this.even ? evens.join(",") : odds.join(",");
    }
  },
}
</script>

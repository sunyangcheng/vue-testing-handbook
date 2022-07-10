<template>
  <div>
    <form @submit.prevent="handleSubmitSync">
      <input v-model="username" data-username>
      <input type="submit">
    </form>

    <div 
      class="message" 
      v-if="submitted"
    >
      Thank you for your submission, {{ username }}.
    </div>
  </div>
</template>
<script>
  export default {
    name: "FormSubmitter",

    data() {
      return {
        username: '',
        submitted: false
      }
    },

    methods: {
      handleSubmit() {
        this.submitted = true
      },
      handleSubmitSync() {
        return this.$http.get("/api/submit", {username: this.username})
        .then(() => {
          this.submitted = true;
        })
        .catch(() => {
          console.log("Error submitting form");
        })
      }
    }
  }
</script>
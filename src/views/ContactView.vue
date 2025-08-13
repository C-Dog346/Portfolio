<script setup lang="ts">
import ContactForm from '@/components/contact/ContactForm.vue'
</script>

<template>
  <h1>Contact</h1>
  <p class="contact-details">
    Have a question for me? Want to work together on a project? Just want to say hi? Send me an
    email with the form below and I'll be in touch ASAP!
  </p>
  <ContactForm></ContactForm>
</template>

<style scoped>
h1 {
  font-size: 4rem;
  margin-bottom: 20px;
}
.contact-details {
  max-width: 60%;
  line-height: 1.5;
}
</style>

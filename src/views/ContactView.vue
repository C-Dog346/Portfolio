<script setup lang="ts">
import { ref } from 'vue'
import ContactForm from '@/components/contact/ContactForm.vue'

const name = ref('')
const email = ref('')
const organisation = ref('')
const message = ref('')

// Submit function
const submitForm = () => {
  // Get the form data
  const formData = {
    name: name.value,
    email: email.value,
    organisation: organisation.value,
    message: message.value
  }
  // Log the form data
  console.log(formData)
}
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

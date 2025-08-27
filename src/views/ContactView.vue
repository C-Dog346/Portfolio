<script setup lang="ts">
import ContactForm from "@/components/contact/ContactForm.vue";
</script>

<template>
  <div class="contact-view">
    <h1>Contact</h1>
    <p class="contact-details">
      Have a question for me? Want to work together on a project? Just want to
      say hi? Send me an email with the form below and I'll be in touch ASAP!
    </p>
    <ContactForm />
  </div>
</template>

<style scoped>
.contact-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;
}

h1 {
  font-size: 3rem;
  margin-bottom: 2rem;
  color: var(--primary-text-color);
}

.contact-details {
  max-width: 80%;
  line-height: 1.6;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: var(--primary-text-color);
}

@media (max-width: 768px) {
  .contact-view {
    padding: 1rem;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  .contact-details {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
}
</style>

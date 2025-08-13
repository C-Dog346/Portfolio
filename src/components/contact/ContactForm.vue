<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = ref(null)

const sendEmail = () => {
  let messageDiv = form.value.querySelector('.status-message')
  emailjs
    .sendForm('service_5cba85g', 'contact_form', form.value, {
      publicKey: 'f-k6FbmkYdrA0tDFr'
    })
    .then(
      () => {
        console.log('SUCCESS!')
        form.value.reset()
        messageDiv.classList.add('success')
        messageDiv.innerHTML = 'Your message has been sent!'
      },
      (error) => {
        console.log('FAILED...', error.text)
        messageDiv.classList.add('error')
        messageDiv.innerHTML = 'There was an error sending your message. Please try again later.'
      }
    )
}
</script>

<template>
  <form ref="form" @submit.prevent="sendEmail">
    <input type="text" name="user_name" placeholder="Name *" required />
    <input type="email" name="user_email" placeholder="Email *" required />
    <input type="organisation" id="user_organisation" placeholder="Organisation" />
    <textarea name="message" placeholder="Message *" required></textarea>
    <div class="submit-button">
      <button type="submit" value="Send">Submit</button>
    </div>
    <div class="status-message"></div>
  </form>
</template>

<style>
form {
  display: flex;
  flex-direction: column;
}

input,
textarea {
  padding: 10px;
  margin-bottom: 10px;
  border: 0px;
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  min-width: 30%;
  max-width: 60%;
  background-color: #111213;
  color: var(--primary-text-color);
  caret-color: var(--secondary-color);
}

textarea {
  min-height: 150px;
}

div.submit-button {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: transparent;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;
  border: transparent;
  border-radius: 8px;
}

button::before {
  content: '';
  position: absolute;
  top: 0%;
  left: -95%;
  width: 100%;
  height: 100%;
  background-color: var(--secondary-color);
  transition: left 0.5s ease;
  z-index: -1;
}

button:hover::before {
  left: -50%;
}

button::after {
  content: '';
  position: absolute;
  top: 0%;
  right: -95%;
  width: 100%;
  height: 100%;
  background-color: var(--secondary-color);
  transition: right 0.5s ease;
  z-index: -1;
}

button:hover::after {
  right: -50%;
}

.status-message {
  margin-top: 10px;
}

.status-message.success {
  color: #00dd50;
}

.status-message.error {
  color: #ff0000;
}
</style>

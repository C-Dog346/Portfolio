<script setup lang="ts">
import { ref, type Ref } from "vue";
import emailjs from "@emailjs/browser";
import CommonButton from "@/components/common/CommonButton.vue";

const SERVICE_ID = "service_5cba85g";
const TEMPLATE_ID = "contact_form";
const PUBLIC_KEY = "f-k6FbmkYdrA0tDFr";
const STATUS_SUCCESS = "Your message has been sent!";
const STATUS_ERROR =
  "There was an error sending your message. Please try again later.";

const form: Ref<HTMLFormElement | null> = ref(null);

const statusMessage = ref("");
const statusType = ref<"success" | "error" | "">("");

const sendEmail = async () => {
  if (!form.value) return;
  statusMessage.value = "";
  statusType.value = "";
  try {
    await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.value, {
      publicKey: PUBLIC_KEY
    });
    form.value.reset();
    statusType.value = "success";
    statusMessage.value = STATUS_SUCCESS;
  } catch (error: any) {
    statusType.value = "error";
    statusMessage.value = STATUS_ERROR;
  }
};
</script>

<template>
  <form ref="form" @submit.prevent="sendEmail">
    <input type="text" name="user_name" placeholder="Name *" required />
    <input type="email" name="user_email" placeholder="Email *" required />
    <input
      type="organisation"
      id="user_organisation"
      placeholder="Organisation"
    />
    <textarea name="message" placeholder="Message *" required></textarea>
    <div class="submit-button">
      <CommonButton type="submit">Submit</CommonButton>
    </div>
    <div class="status-message" :class="statusType" v-if="statusMessage">
      {{ statusMessage }}
    </div>
  </form>
</template>

<style>
form {
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 1000px;
}

input,
textarea {
  padding: 10px;
  margin-bottom: 10px;
  border: 0px;
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  background-color: #111213;
  color: var(--primary-text-color);
  caret-color: var(--secondary-text-color);
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

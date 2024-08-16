<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const form = ref(null);

const sendEmail = () => {
    emailjs
        .sendForm('service_5cba85g', 'contact_form', form.value, {
            publicKey: 'f-k6FbmkYdrA0tDFr',
        })
        .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            }
        );
};

</script>

<template>
    <form ref="form" @submit.prevent="sendEmail">
        <input type="text" name="user_name" placeholder="Name *" required>
        <input type="email" name="user_email" placeholder="Email *" required>
        <input type="organisation" id="user_organisation" placeholder="Organisation">
        <textarea name="message" placeholder="Message *" required></textarea>
        <button type="submit" value="Send">Submit</button>
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
}

textarea {
    min-height: 150px;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    max-width: 400px;
}

button:hover {
    background-color: #0056b3;
}

button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
</style>
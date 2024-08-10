<template>
  <div class="about">
    <div class="so-far">
      <h1> About me so far </h1>
      <p class="blurb">
        I am a full-stack web developer with a passion for creating beautiful and functional websites. I have experience
        with HTML, CSS, JavaScript, and Vue.js. I am always looking to learn new technologies and improve my skills.
      </p>
    </div>
    <div class="image">
      <img src="../assets/about_pic.jpg" alt="Selfie" />
    </div>
    <div class="future">
      <h1> My future goals </h1>
      <p class="blurb">
        I am currently working on improving my skills with Vue.js and learning more about back-end development. I am
        excited to continue learning and growing as a developer.
      </p>
    </div>
  </div>
</template>

<style>
.about {
  margin: 2rem;
  display: flex;
  justify-content: space-around;
  gap: 20px;
}

.blurb {
  font-size: 1.5rem;
  color: var(--text-color);
  max-width: 600px;
}
</style>

<script setup>
import ImageBanner from '@/components/ImageBanner.vue';
import technologies from '@/assets/data/projects.json';
</script>
<template>
  <div class="about">
    <div class="so-far">
      <h1>About me <span class="highlight">so far</span>.</h1>
      <p class="blurb">
        I became a software developer to quench my thirst for problem solving. All through both my
        professional and personal life, I have found that I love to learn.
        <br>
        <br>
        Throughout uni and my internship I fell in love with working in teams and interacting with people.
        <br>
        <br>
        In my spare time I enjoy playing video games, reading books and manga, and hang with my friends.
        I do martial arts, learn languages, walk my dog and go to the gym.
      </p>
    </div>
    <div class="image">
      <img src="../assets/Callum_Selfie.jpg" alt="Selfie" class="selfie" />
    </div>
    <div class="future">
      <h1> My <span class="highlight">future goals</span>.</h1>
      <p class="blurb">
        I am currently working on improving my skills with Vue.js and learning more about back-end development.
        <br>
        <br>
        I hope to join a team where I can continue to learn, grow and make new connections with people.
        <br>
        <br>
        One day I will manage my own team and help others grow in their careers. Leadership is my passion;
        I love to work with people and help make a difference.
      </p>
    </div>
  </div>
  <ImageBanner :index="technologies.id" :images="technologies[2].image"></ImageBanner>
</template>

<style>
.about {
  margin: 2rem;
  display: flex;
  justify-content: space-around;
}

.blurb {
  font-size: 1.25rem;
  color: var(--text-color);
  max-width: 1000px;
}

.selfie {
  max-width: 75%;
  max-height: 75%;
  border: 2px solid var(--border-color);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.7);
}

.image {
  display: flex;
  justify-content: center;
}
</style>

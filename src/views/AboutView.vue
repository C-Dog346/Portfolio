<script setup lang="ts">
import ImageCarousel from "@/components/common/ImageCarousel.vue";
import technologies from "@/lib/data/technologies/technologies.json";
</script>
<template>
  <div class="about">
    <div class="so-far">
      <h1>About me <span class="highlight">so far.</span></h1>
      <p class="blurb">
        I became a software developer to quench my thirst for problem solving.
        All through both my professional and personal life, I have found that I
        love to learn.
        <br />
        <br />
        Throughout uni and my internship I fell in love with working in teams
        and interacting with people.
        <br />
        <br />
        In my spare time I enjoy playing video games, reading books and manga,
        and hang with my friends. I do martial arts, learn languages, walk my
        dog and go to the gym.
      </p>
    </div>
    <div class="image-container">
      <img src="@/lib/data/Callum_Selfie.jpg" alt="Selfie" class="selfie" />
    </div>
    <div class="future">
      <h1>My <span class="highlight">future goals</span>.</h1>
      <p class="blurb">
        I am currently working on improving my skills with Vue.js and learning
        more about back-end development.
        <br />
        <br />
        I hope to join a team where I can continue to learn, grow and make new
        connections with people.
        <br />
        <br />
        One day I will manage my own team and help others grow in their careers.
        Leadership is my passion; I love to work with people and help make a
        difference.
      </p>
    </div>
  </div>
  <ImageCarousel :items="technologies"></ImageCarousel>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: 1fr minmax(240px, 360px) 1fr;
  align-items: stretch;
  gap: 3rem;
  max-width: 1200px;
  width: 100%;
}

.so-far,
.future {
  max-width: 800px;
}

.blurb {
  font-size: 1.25rem;
  color: var(--primary-text-color);
  line-height: 1.6;
  text-align: left;
  margin-top: 1rem;
}

h1 {
  margin: 0;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.imageCarousel {
  margin-top: 2rem;
  width: 100%;
}

h1 {
  margin: 0rem;
}

.imageCarousel {
  margin-top: 2rem;
}

.selfie {
  width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.7);
}

.image-container {
  display: block;
  width: 100%;
  height: 100%;
}

.my-links {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  .about {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 1rem;
  }

  .so-far,
  .future {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }

  .selfie {
    width: 100%;
    height: auto;
    max-width: 250px;
    max-height: 250px;
    object-fit: cover;
  }

  h1 {
    font-size: 2rem;
  }

  .blurb {
    font-size: 1.1rem;
  }
}
</style>

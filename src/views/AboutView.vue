<script setup lang="ts">
import ImageCarousel from '@/components/common/ImageCarousel.vue'
import MyLinks from '@/components/about/MyLinks.vue'
import technologies from '@/assets/data/technologies/technologies.json'
import aboutText from '@/assets/data/aboutText.json'

const aboutMeLines = aboutText.aboutMe.split('\n')
const futureGoalsLines = aboutText.futureGoals.split('\n')

const technologyImages = technologies.map((t) => t.image)

const links = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/your-linkedin-profile',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/your-github-username',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'
  }
]
</script>
<template>
  <div class="about">
    <div class="so-far">
      <h1>About me <span class="highlight">so far.</span></h1>
      <p class="blurb">
        <span v-for="(line, idx) in aboutMeLines" :key="'aboutMe-' + idx">
          {{ line }}
          <!-- Will add a new line where there is a '\n', except for the last line. -->
          <br v-if="idx !== aboutMeLines.length - 1" />
        </span>
      </p>
    </div>
    <div class="image-container">
      <img src="../assets/Callum_Selfie.jpg" alt="Selfie" class="selfie" />
    </div>
    <div class="future">
      <h1>My <span class="highlight">future goals.</span></h1>
      <p class="blurb">
        <span v-for="(line, idx) in futureGoalsLines" :key="'futureGoals-' + idx">
          {{ line }}
          <!-- Will add a new line where there is a '\n', except for the last line. -->
          <br v-if="idx !== futureGoalsLines.length - 1" />
        </span>
      </p>
    </div>
  </div>
  <div>
    <div></div>
    <div></div>
  </div>
  <MyLinks :links="links" class="my-links" />
  <ImageCarousel class="imageCarousel" :images="technologyImages" />
</template>

<style>
.about {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.blurb {
  font-size: 1.25rem;
  color: var(--primary-text-color);
  max-width: 1000px;
}

h1 {
  margin: 0rem;
}

.imageCarousel {
  margin-top: 2rem;
}

.selfie {
  max-width: 60%;
  max-height: 60%;
  border: 2px solid var(--border-color);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.7);
}

.image-container {
  display: flex;
  justify-content: center;
}

.my-links {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}
</style>

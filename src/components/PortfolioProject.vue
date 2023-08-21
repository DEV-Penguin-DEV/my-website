<template>
  <div :class="`portfolio-project ${projectTag}`">
    <a :href="projectLink" target="_blank" rel="noopener noreferrer">
      <img
        :src="`/img/${imgSrc}`"
        :alt="projectName"
        class="portfolio-project__img"
      />
    </a>

    <div class="portfolio-project__text-content">
      <h3 class="portfolio-project__title">{{ projectName }}</h3>
      <h4 class="portfolio-project__time-title">
        {{ projectTimeTitle }}
        <span class="portfolio-project__time">{{ projectTime }}</span>
      </h4>

      <ul class="portfolio-project__technologies">
        <li
          class="portfolio-project__technology"
          v-for="(technology, index) in technologies"
          :key="index"
        >
          <img
            :src="`/img/${technology.img}`"
            :alt="technology.alt"
            class="portfolio-project__technology-img"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    projectName: {
      type: String,
      required: true,
    },
    projectTime: {
      type: String,
      required: true,
    },
    technologies: {
      type: Array,
      required: true,
    },
    projectTimeTitle: {
      type: String,
      required: true,
    },
    projectLink: {
      type: String,
      required: true,
    },
    projectTag: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.portfolio-project {
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: space-between;
  text-align: left;
}

.portfolio-project__title {
  font-size: 2.125rem;
  line-height: 2.525rem;
  letter-spacing: 0.15625rem;
  margin-bottom: 10px;

  @media (max-width: $desktop-size) {
    font-size: 1.7rem;
    line-height: 2rem;
  }

  @media (max-width: $mini-desktop-size) {
    font-size: 1.445rem;
    line-height: 1.7rem;
  }
}

.portfolio-project__time-title {
  margin-bottom: 20px;
}

.portfolio-project__time,
.portfolio-project__time-title {
  color: #fff;
  font-family: Montserrat;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 800;
  line-height: 100%;
  letter-spacing: 0.09375rem;

  @media (max-width: $desktop-size) {
    font-size: 1.5rem;
  }

  @media (max-width: $mini-desktop-size) {
    font-size: 1.275rem;
  }
}

.portfolio-project__technologies {
  display: flex;
  gap: 15px;
  min-height: 70px;
}
.portfolio-project__technology {
  border-radius: 48px;
  background: #000;
  box-shadow: 0px 1px 10px 0px #00e0ff;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.7s;

  &:hover {
    width: 70px;
    height: 70px;
    transition: 0.7s;
  }
}

.portfolio-project__technology-img {
  max-width: 70%;
  height: auto;
}

.portfolio-project__img {
  width: 100%;
  height: auto;
}
</style>

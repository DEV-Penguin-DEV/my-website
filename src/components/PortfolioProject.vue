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
  text-align: left;

  @media (max-width: $laptop-size) {
    font-size: 10px;
  }

  @media (max-width: $tablet-size) {
    gap: 10px;
  }
}

.portfolio-project__title {
  font-size: 2.1vw;
  line-height: 110%;
  letter-spacing: 0.15625rem;
  margin-bottom: 10px;

  @media (min-width: $desktop-size) {
    font-size: 1.8vw;
  }

  @media (max-width: $tablet-size) {
    margin-bottom: 5px;
  }

  @media (max-width: $phone-size) {
    font-size: 3.5vw;
  }
}

.portfolio-project__time-title {
  margin-bottom: 20px;

  @media (max-width: $big-tablet-size) {
    margin-bottom: 15px;
  }
}

.portfolio-project__time,
.portfolio-project__time-title {
  color: #fff;
  font-family: Montserrat;
  font-size: 1.8vw;
  font-style: normal;
  font-weight: 800;
  line-height: 100%;
  letter-spacing: 0.09375rem;

  @media (min-width: $desktop-size) {
    font-size: 1.6vw;
  }

  @media (max-width: $phone-size) {
    font-size: 3vw;
  }
}

.portfolio-project__technologies {
  display: flex;
  gap: 15px;
  max-width: 100%;
  flex-wrap: wrap;

  @media (max-width: $tablet-size) {
    gap: 10px;
  }
}
.portfolio-project__technology {
  border-radius: 48px;
  background: #000;
  box-shadow: 0px 1px 10px 0px #00e0ff;
  width: 3vw;
  height: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.7s;

  @media (max-width: $big-phone-size) {
    width: 4vw;
    height: 4vw;
  }

  @media (max-width: $phone-size) {
    width: 6vw;
    height: 6vw;
  }

  &:hover {
    scale: 1.3;
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

<template>
  <div class="experience">
    <img class="experience__img" :src="`/img/${iconSrc}`" :alt="iconAlt" />
    <div class="experience__text-content">
      <div class="experience__title-container">
        <div class="experience__title-container--mobile">
          <h3 class="experience__title">{{ companyName }}</h3>
          <p class="experience__industry">{{ companyIndustry }}</p>
        </div>
        <img
          class="experience__img--mobile"
          :src="`/img/${iconSrc}`"
          :alt="iconAlt"
        />
      </div>

      <div class="experience__position-container">
        <h4 class="experience__position-title experience__title--h4">
          {{ positionTitle }}
        </h4>
        <p class="experience__position">{{ position }}</p>
      </div>

      <div class="experience__period-container">
        <h4 class="experience__period-title experience__title--h4">
          {{ timePeriodTitle }}
        </h4>
        <p class="experience__period">{{ timePeriod }}</p>
      </div>

      <div class="experience__main-tasks-container">
        <h4 class="experience__main-tasks-title experience__title--h4">
          {{ mainTasksTitle }}
        </h4>
        <ul class="experience__main-tasks-list">
          <li
            class="experience__main-task"
            v-for="(mainTask, index) in mainTasks"
            :key="index"
          >
            {{ mainTask }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iconSrc: {
      type: String,
      required: true,
    },
    iconAlt: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    companyIndustry: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    timePeriod: {
      type: String,
      required: true,
    },
    mainTasks: {
      type: Array,
      required: true,
    },
    positionTitle: {
      type: String,
      required: true,
    },
    timePeriodTitle: {
      type: String,
      required: true,
    },
    mainTasksTitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.experience {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  max-width: 90vw;
  margin: 0 auto;
  background: $blue-gradient;
  background-color: #000;
  border-radius: 50px;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  align-items: center;

  @media (max-width: $mini-tablet-size) {
    border-radius: 30px;
    padding: 10px;
    gap: 20px;
  }

  @media (max-width: $big-phone-size) {
    grid-template-columns: 1fr auto;
    gap: 15px;
  }

  @media (max-width: $phone-size) {
    position: relative;
    padding: 10px 20px;
    align-items: flex-start;
    gap: 0;
  }
}

.experience__img {
  width: 100%;
  height: auto;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: $desktop-size) {
    width: 90%;
  }

  @media (min-width: $desktop-size) {
    width: 80%;
  }

  @media (max-width: $big-phone-size) {
    width: 95%;
  }

  @media (max-width: $phone-size) {
    display: none;
  }

  &--mobile {
    display: none;
    @media (max-width: $phone-size) {
      display: block;
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
}

.experience__title-container {
  @media (max-width: $phone-size) {
    display: flex;
    justify-content: space-between;
  }

  &--mobile {
    @media (max-width: $phone-size) {
      margin-top: 20px;
      width: calc(100% - 100px);
    }
  }
}

.experience__title {
  font-size: 5vw;
  font-weight: 800;
  line-height: 100%;
  text-align: center;

  @media (min-width: $desktop-size) {
    font-size: 4vw;
  }

  @media (max-width: $phone-size) {
    font-size: 8vw;
    overflow: hidden;
    word-wrap: break-word;
  }

  &--h4 {
    font-size: 2.5vw;
    font-weight: 800;
    line-height: 2.6vw;
    margin-bottom: 10px;

    @media (max-width: $laptop-size) {
      font-size: 2.2vw;
      margin-bottom: 5px;
    }

    @media (min-width: $desktop-size) {
      font-size: 2vw;
    }

    @media (max-width: $phone-size) {
      font-size: 4.4vw;
      margin-bottom: 10px;
    }
  }
}
.experience__industry {
  font-size: 1.5vw;
  font-weight: 500;
  line-height: 100%;
  text-align: center;

  @media (min-width: $desktop-size) {
    font-size: 1.3vw;
  }

  @media (max-width: $phone-size) {
    font-size: 5vw;
  }
}

.experience__text-content {
  display: flex;
  flex-direction: column;
  gap: 1.7vw;
  text-align: left;
  flex-grow: 1;
  padding-top: 20px;

  @media (max-width: $tablet-size) {
    padding-top: 0px;
    gap: 2.3vw;
  }

  @media (max-width: $phone-size) {
    gap: 7vw;
  }
}

.experience__position,
.experience__period {
  font-size: 3.1vw;
  font-weight: 800;
  line-height: 100%;

  @media (max-width: $laptop-size) {
    font-size: 2.65vw;
  }

  @media (min-width: $desktop-size) {
    font-size: 2.6vw;
  }

  @media (max-width: $phone-size) {
    font-size: 5.5vw;
  }
}

.experience__main-task {
  font-size: 2.2vw;
  font-weight: 500;
  line-height: 120%;

  @media (max-width: $laptop-size) {
    font-size: 1.85vw;
  }

  @media (min-width: $desktop-size) {
    font-size: 2vw;
  }

  @media (max-width: $phone-size) {
    font-size: 4vw;
  }
}

.experience__main-tasks-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
  list-style: disc;
  padding-left: 20px;

  @media (max-width: $desktop-size) {
    gap: 20px;
  }

  @media (max-width: $laptop-size) {
    gap: 15px;
  }

  @media (max-width: $tablet-size) {
    gap: 10px;
  }
}
</style>

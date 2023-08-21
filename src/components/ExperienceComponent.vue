<template>
  <div class="experience">
    <img class="experience__img" :src="`/img/${iconSrc}`" :alt="iconAlt" />
    <div class="experience__text-content">
      <div class="experience__title-container">
        <h3 class="experience__title">{{ companyName }}</h3>
        <p class="experience__industry">{{ companyIndustry }}</p>
      </div>

      <div class="experience__position-container">
        <h4 class="experience__position-title experience__title--h4">
          {{ positionTitle }}
        </h4>
        <p class="experience__position">{{ companyIndustry }}</p>
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
}

.experience__img {
  width: 100%;
  height: auto;
  max-width: 1000px;
  margin: 0 auto;
}

.experience__title {
  font-size: 5vw;
  font-weight: 800;
  line-height: 100%;
  text-align: center;

  &--h4 {
    font-size: 2.5vw;
    font-weight: 800;
    line-height: 2.6vw;
    margin-bottom: 15px;

    @media (max-width: $mini-tablet-size) {
      margin-bottom: 5px;
    }
  }
}
.experience__industry {
  font-size: 1.5vw;
  font-weight: 500;
  line-height: 2.6vw;
  text-align: center;
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
}

.experience__position,
.experience__period {
  font-size: 3.1vw;
  font-weight: 800;
  line-height: 2.6vw;
}

.experience__main-task {
  font-size: 2.2vw;
  font-weight: 500;
  line-height: 120%;
}

.experience__main-tasks-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
  list-style: disc;
  padding-left: 20px;

  @media (max-width: $desktop-size) {
    gap: 20px;
  }

  @media (max-width: $tablet-size) {
    gap: 10px;
  }
}
</style>

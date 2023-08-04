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
  display: flex;
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
  width: 668px;
  height: auto;
  padding-left: 40px;
}

.experience__title {
  font-size: 4rem;
  font-weight: 800;
  line-height: 2.1875rem;
  text-align: center;
  margin-bottom: 15px;
}
.experience__industry {
  font-size: 1.5625rem;
  font-weight: 500;
  line-height: 2.1875rem;
  text-align: center;
}

.experience__title--h4 {
  font-size: 2rem;
  font-weight: 800;
  line-height: 2.1875rem;
  margin-bottom: 15px;
}

.experience__text-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: left;
  flex-grow: 1;
  padding-top: 20px;
}

.experience__position,
.experience__period {
  font-size: 2.8125rem;
  font-weight: 800;
  line-height: 2.1875rem;
}

.experience__main-task {
  font-size: 1.875rem;
  font-weight: 500;
  line-height: 1.875rem;
}

.experience__main-tasks-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
  list-style: disc;
  padding-left: 20px;
}
</style>

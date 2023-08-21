<template>
  <section id="skills" class="skills">
    <div class="title-container">
      <h2 class="skills__title title">{{ DB.title }}</h2>
    </div>

    <div class="skills__container">
      <div
        class="skills-row__container"
        v-for="(row, index) in rows"
        :key="index"
      >
        <SkillComponent
          v-for="(skill, index) in row"
          :key="index"
          :iconSrc="skill.img"
          :iconAlt="skill.alt"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SkillComponent from "@/components/SkillComponent.vue"; // Обновленный путь к компоненту
export default {
  props: {
    DB: {
      type: Object,
      required: true,
    },
  },
  data: function () {
    const rows = [];
    let rowIndex = 0;
    let rowsIndex = 0;
    let row = [];
    this.DB.data.forEach((el) => {
      if (rowIndex >= 6) {
        rowIndex = 0;
        rows[rowsIndex] = row;
        rowsIndex++;
        row = [];
      }
      row[rowIndex] = el;
      rowIndex++;
    });
    return {
      rows,
    };
  },
  components: { SkillComponent },
};
</script>

<style lang="scss" scoped>
.skills {
  width: 100vw;
  overflow-x: hidden;
  margin-bottom: 130px;
  padding-bottom: 20px;

  @media (max-width: $mini-desktop-size) {
    margin-bottom: 100px;
  }
}
.skills__container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5vh;
  width: 100vw;

  @media (max-width: $mini-desktop-size) {
    gap: 4vh;
  }
}

.skills-row__container {
  display: flex;
}

@for $i from 1 through 5 {
  // Замените 10 на количество элементов
  .skills-row__container:nth-child(#{$i}) {
    will-change: transform;
    animation: wave-animation
      2s
      infinite
      #{$i *
      0.2}s; // Пауза между анимациями
  }
}

@keyframes wave-animation {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.88);
  }
}
</style>

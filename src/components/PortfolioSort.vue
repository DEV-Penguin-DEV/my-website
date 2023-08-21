<template>
  <nav class="portfolio-sort">
    <ul class="portfolio-sort__list">
      <li
        class="portfolio-sort__item"
        v-for="(sortText, index) in sort.sort_texts"
        :key="index"
      >
        <button
          :class="`portfolio-sort__button ${index == 0 ? 'active' : ''}`"
          type="button"
          @click="onSortClick"
          :data-sort-tag="sort.sort_tags[index]"
        >
          {{ sortText }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    sort: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      sortType: "all",
    };
  },
  methods: { onSortClick, sortEvent },
};

function onSortClick(evt) {
  const target = evt.target.closest(".portfolio-sort__button");
  document
    .querySelector(".portfolio-sort__button.active")
    .classList.remove("active");
  target.classList.add("active");

  this.sortType = target.dataset.sortTag;
  this.sortEvent();
}

function sortEvent() {
  this.$emit("sortEvent", this.sortType);
}
</script>

<style lang="scss" scoped>
.portfolio-sort {
  border-radius: 0px 0px 60px 60px;
  background: #000;
  box-shadow: 0px 9px 10px 3px rgba(255, 255, 255, 0.8);
  margin-bottom: 70px;

  @media (max-width: $mini-desktop-size) {
    margin-bottom: 50px;
  }
}

.portfolio-sort__list {
  display: flex;
  justify-content: space-between;
  padding: 25px 45px;
  align-items: center;

  @media (max-width: $mini-desktop-size) {
    padding: 20px 40px;
  }
}

.portfolio-sort__button {
  padding: 10px 25px;
  line-height: 3.75rem;
  letter-spacing: 0.125rem;
  font-size: 2.5rem;
  color: #fff;
  cursor: pointer;
  box-sizing: border-box;
  border: 4px solid #000;
  border-radius: 2.5rem;
  transition: border-color 1s;

  @media (max-width: $mini-desktop-size) {
    line-height: 3rem;
    font-size: 2rem;
  }

  &.active {
    transition: border-color 1s;
    border-color: $main-text-color;
  }
}

.portfolio-sort__item {
  height: fit-content;
}
</style>

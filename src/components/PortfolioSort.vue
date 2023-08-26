<template>
  <nav class="portfolio-sort">
    <p class="portfolio-sort__select">{{ sort.sort_texts[0] }}</p>

    <ul class="portfolio-sort__list">
      <li
        :class="`portfolio-sort__item ${index == 0 ? 'active' : ''}`"
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
  mounted: () => {
    const mediaQuery = window.matchMedia("(max-width: 440px)");
    if (!mediaQuery.matches) {
      return;
    }
    const sortElement = document.querySelector(".portfolio-sort");
    const sortButton = document.querySelector(".portfolio-sort__select");

    sortButton.addEventListener("click", () => {
      sortElement.classList.toggle("open");
    });
  },
};

function onSortClick(evt) {
  const target = evt.target.closest(".portfolio-sort__button");
  document
    .querySelector(".portfolio-sort__button.active")
    .classList.remove("active");
  target.classList.add("active");

  const mediaQuery = window.matchMedia("(max-width: 440px)");
  if (mediaQuery.matches) {
    const mobileSelect = document.querySelector(".portfolio-sort__select");
    document
      .querySelector(".portfolio-sort__item.active")
      .classList.remove("active");

    const activeButtonContainer = target.closest(".portfolio-sort__item");
    activeButtonContainer.classList.add("active");
    mobileSelect.textContent = target.textContent;
    const sortElement = document.querySelector(".portfolio-sort");
    sortElement.classList.toggle("open");
  }

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

  @media (max-width: $tablet-size) {
    border-radius: 0px 0px 40px 40px;
  }

  @media (max-width: $phone-size) {
    background: none;
    box-shadow: none;
    margin-bottom: 40px;
    width: fit-content;
    height: fit-content;
    position: relative;
    cursor: pointer;

    border: 4px solid $main-text-color;
    font-size: 5vw;
    border-radius: 2.5rem;
    max-height: 40px;
    transition: 1s;
    overflow-y: hidden;
  }

  &.open {
    transition: 0.7s;
    max-height: 300px;

    .portfolio-sort__button {
      opacity: 1;
      transition: 0.7s;
    }

    .portfolio-sort__select {
      &::before {
        transition: 0.5s;
        transform: translateY(-50%) rotate(180deg);
      }
    }
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

  @media (max-width: $laptop-size) {
    padding: 15px 30px;
  }
  @media (max-width: $phone-size) {
    padding: 0 10px;
    padding-bottom: 10px;
    flex-direction: column;
    gap: 3vw;
  }
}

.portfolio-sort__select {
  height: 40px;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
  padding-right: 43px;
  transition: 0.7s;
  position: relative;
  display: none;

  &::before {
    @include default-pseudo-element(24px);
    @include centering-vertical-pseudo-element();
    right: 10px;
    background: url("../../public/img/white-arrow.svg") no-repeat center center;
    background-size: contain;
    cursor: pointer;
    transition: 0.5s;
  }

  @media (max-width: $phone-size) {
    display: flex;
  }
}

.portfolio-sort__button {
  padding: 10px 25px;
  line-height: 3.9vw;
  letter-spacing: 0.125rem;
  font-size: 2.6vw;
  color: #fff;
  cursor: pointer;
  box-sizing: border-box;
  border: 4px solid #000;
  border-radius: 2.5rem;
  transition: border-color 1s;

  @media (max-width: $tablet-size) {
    padding: 5px 10px;
  }

  @media (max-width: $mini-tablet-size) {
    border: 2px solid #000;
  }

  @media (max-width: $phone-size) {
    border: none;
    font-size: 5vw;
    padding: 0;
    opacity: 0;
    transition: 0.7s;
  }

  &.active {
    transition: border-color 1s;
    border-color: $main-text-color;
    position: relative;

    @media (max-width: $phone-size) {
      display: none;
    }
  }
}

.portfolio-sort__item {
  height: fit-content;

  &.active {
    @media (max-width: $phone-size) {
      display: none;
    }
  }
}
</style>

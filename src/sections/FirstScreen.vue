<template>
  <section id="main" class="first-screen">
    <div class="first-screen__avatar-container">
      <img
        src="../../public/img/avatar.svg"
        alt="Фотография Константина Лысенко"
        class="first-screen__avatar"
      />
      <svg
        class="first-screen__decor-line"
        width="300"
        height="525"
        viewBox="0 0 300 525"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_2_41)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M260.484 262.484C260.484 118.623 143.861 2 0 2V0C47.1496 0 91.3956 12.4316 129.639 34.196L156.148 5.13107L157.451 6.31989L131.207 35.0952C167.159 55.8853 197.723 84.9573 220.29 119.703L254.074 100L254.963 101.524L221.247 121.187C240.8 151.741 254.198 186.615 259.691 224.057L299.276 219L299.499 220.75L259.941 225.803C261.617 237.79 262.484 250.036 262.484 262.484C262.484 285.848 259.431 308.5 253.703 330.061L293.499 335.145L293.276 336.895L253.24 331.781C244.283 364.587 229.122 394.833 209.096 421.179L242.9 443.066L241.941 444.546L208.02 422.584C184.768 452.752 155.099 477.72 121.058 495.445L149.112 523.441L147.866 524.69L119.412 496.295C83.5908 514.626 43.0031 524.968 0 524.968V522.968C143.861 522.968 260.484 406.345 260.484 262.484Z"
            fill="#00E0FF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M260.484 262.484C260.484 118.623 143.861 2 0 2V0C47.1496 0 91.3956 12.4316 129.639 34.196L156.148 5.13107L157.451 6.31989L131.207 35.0952C167.159 55.8853 197.723 84.9573 220.29 119.703L254.074 100L254.963 101.524L221.247 121.187C240.8 151.741 254.198 186.615 259.691 224.057L299.276 219L299.499 220.75L259.941 225.803C261.617 237.79 262.484 250.036 262.484 262.484C262.484 285.848 259.431 308.5 253.703 330.061L293.499 335.145L293.276 336.895L253.24 331.781C244.283 364.587 229.122 394.833 209.096 421.179L242.9 443.066L241.941 444.546L208.02 422.584C184.768 452.752 155.099 477.72 121.058 495.445L149.112 523.441L147.866 524.69L119.412 496.295C83.5908 514.626 43.0031 524.968 0 524.968V522.968C143.861 522.968 260.484 406.345 260.484 262.484Z"
            fill="url(#paint0_linear_2_41)"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_2_41"
            x="-50"
            y="-50"
            width="399.499"
            height="624.968"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="25" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_2_41"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_2_41"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2_41"
            x1="151.843"
            y1="0.950806"
            x2="152.007"
            y2="712.668"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0085FF" />
            <stop offset="0.333333" stop-color="#00E0FF" />
            <stop offset="0.666667" stop-color="#87E245" />
            <stop offset="1" stop-color="#B8E400" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="first-screen__info-blocks">
      <InfoBlock
        v-for="(infoBlock, index) in DB.links"
        :key="index"
        :iconSrc="infoBlock.icon"
        :iconAlt="infoBlock.icon_alt"
        :href="infoBlock.href"
        :blockContent="infoBlock.link_Text"
      />
    </div>
  </section>
</template>

<script>
import InfoBlock from "@/components/InfoBlock.vue";

export default {
  props: {
    DB: {
      type: Object,
      required: true,
    },
  },
  components: {
    InfoBlock,
  },
};
// eslint-disable-next-line no-unused-vars
const i = 0;
</script>

<style lang="scss" scoped>
.first-screen {
  display: flex;
  align-items: center;
  padding-bottom: 135px;
  gap: 5.5vw;
  width: fit-content;
  margin: 0 auto;

  @media (max-width: $mini-tablet-size) {
    padding-bottom: 100px;
  }

  @media (max-width: $big-phone-size) {
    padding-bottom: 80px;
  }
}

.first-screen__avatar-container {
  position: relative;
  width: fit-content;
}

.first-screen__avatar {
  width: 31.5vw;
  height: auto;

  @media (max-width: $phone-size) {
    width: 59.06vw;
  }
}

.first-screen__decor-line {
  position: absolute;
  top: -3vw;
  right: -5.3vw;
  width: 21vw;
  height: auto;

  @media (max-width: $phone-size) {
    width: 39.375vw;
    top: -4.6vw;
    right: -10.3vw;
  }
}

.first-screen__info-blocks {
  display: flex;
  flex-direction: column;
  gap: 2.5vw;
  width: fit-content;

  @media (max-width: $phone-size) {
    gap: 5vw;
  }
}
</style>

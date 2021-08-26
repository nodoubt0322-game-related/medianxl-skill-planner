<template>
  <div class="container" :style="{ backgroundImage }">
    <div
      class="skill"
      v-for="(item, index) in skillPositionObj[`sk${activeSkillTab}`]"
      :key="index"
      :style="item"
      @mouseover="handleMouseOver(index)"
      @mouseout="handleMouseOut"
    />
    <div
      v-show="descVisible"
      class="description"
      ref="description"
      :style="descPosition"
    >
      <img
        :src="require(`@/assets/amazon/sk${activeSkillTab}/${activeSkill}.png`)"
      />
    </div>
    <ul>
      <li v-for="item in 8" :key="item" @click="changeTab(item)" />
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSkillTab: "6",
      activeSkill: "1",
      descVisible: true,
      descPosition: { top: "289px", left: "-14px" },
      skillPositionObj: {
        sk1: {
          1: { top: "52px", left: "165px" },
          2: { top: "252px", left: "165px" },
          3: { top: "350px", left: "65px" },
          4: { top: "350px", left: "265px" },
          5: { top: "550px", left: "65px" },
          6: { top: "550px", left: "265px" },
        },
        sk2: {
          1: { top: "50px", left: "169px" },
          2: { top: "150px", left: "69px" },
          3: { top: "150px", left: "268px" },
          4: { top: "250px", left: "268px" },
          5: { top: "350px", left: "69px" },
          6: { top: "350px", left: "169px" },
          7: { top: "450px", left: "69px" },
          8: { top: "550px", left: "169px" },
        },
        sk3: {
          1: { top: "50px", left: "67px" },
          2: { top: "150px", left: "167px" },
          3: { top: "250px", left: "167px" },
          4: { top: "250px", left: "267px" },
          5: { top: "350px", left: "167px" },
          6: { top: "450px", left: "167px" },
          7: { top: "450px", left: "67px" },
          8: { top: "550px", left: "267px" },
        },
        sk4: {
          1: { top: "50px", left: "62px" },
          2: { top: "150px", left: "162px" },
          3: { top: "250px", left: "62px" },
          4: { top: "250px", left: "162px" },
          5: { top: "350px", left: "262px" },
          6: { top: "450px", left: "262px" },
          7: { top: "550px", left: "162px" },
        },
        sk5: {
          1: { top: "50px", left: "166px" },
          2: { top: "150px", left: "66px" },
          3: { top: "150px", left: "266px" },
          4: { top: "250px", left: "166px" },
          5: { top: "350px", left: "166px" },
          6: { top: "450px", left: "66px" },
          7: { top: "450px", left: "266px" },
          8: { top: "550px", left: "166px" },
        },
        sk6: {
          1: { top: "50px", left: "68px" },
          2: { top: "150px", left: "168px" },
          3: { top: "250px", left: "268px" },
          4: { top: "350px", left: "68px" },
          5: { top: "350px", left: "268px" },
          6: { top: "450px", left: "168px" },
          7: { top: "550px", left: "68px" },
        },
        sk7: {
          1: { top: "50px", left: "68px" },
          2: { top: "50px", left: "168px" },
          3: { top: "50px", left: "268px" },
          4: { top: "250px", left: "68px" },
          5: { top: "250px", left: "168px" },
          6: { top: "250px", left: "268px" },
          7: { top: "350px", left: "68px" },
          8: { top: "350px", left: "268px" },
        },
        sk8: {
          1: { top: "50px", left: "62px" },
          2: { top: "50px", left: "262px" },
          3: { top: "350px", left: "62px" },
          4: { top: "350px", left: "162px" },
          5: { top: "350px", left: "262px" },
        },
      },
      descPositionObj: {
        sk7: {
          1: { top: "114px", left: "4px" },
          2: { top: "105px", left: "52px" },
          3: { top: "105px", left: "41px" },
          4: { top: "306px", left: "74px" },
          5: { top: "306px", left: "174px" },
          6: { top: "310px", left: "38px" },
          7: { top: "281px", left: "-58px" },
          8: { top: "289px", left: "-14px" },
        },
        sk8: {
          1: { top: "110px", left: "0px" },
          2: { top: "105px", left: "-179px" },
          3: { top: "404px", left: "-158px" },
          4: { top: "400px", left: "94px" },
          5: { top: "407px", left: "-106px" },
        },
      },
    };
  },
  computed: {
    backgroundImage() {
      return (
        "url(" +
        require("@/assets/amazon/background/" + this.activeSkillTab + ".png")
      );
    },
  },
  methods: {
    changeTab(index) {
      this.activeSkillTab = index;
    },
    handleMouseOver(index) {
      this.descVisible = true;
      this.activeSkill = index;
      this.descPosition =
        this.descPositionObj[`sk${this.activeSkillTab}`][index];
    },
    handleMouseOut() {
      // this.descVisible = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  height: 640px;
  width: 530px;
  position: relative;
  ul {
    position: absolute;
    top: 127px;
    right: 25px;
  }
  li {
    width: 122px;
    height: 58px;
    cursor: pointer;
  }
}
.skill {
  position: absolute;
  border: 1px solid red;
  width: 60px;
  height: 60px;
}
.description {
  // display: none;
  position: absolute;
}
</style>

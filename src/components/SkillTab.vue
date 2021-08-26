<template>
  <el-menu
    @select="handleSelect"
    background-color="#545c64"
    active-text-color="#ffd04b"
    text-color="#fff"
    :default-active="activeIndex"
  >
    <el-menu-item
      v-for="(item, index) in skillTabList"
      :key="item"
      :index="(index + 1).toString()"
      >{{ item }}</el-menu-item
    >
  </el-menu>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    skillTabList: Array,
  },
  data() {
    return {
      activeIndex: "1",
    };
  },
  computed: {
    ...mapState(["activeSkill"]),
  },
  methods: {
    ...mapMutations(["setActiveSkill"]),
    handleSelect(key) {
      this.setActiveSkill(key);
    },
  },
};
</script>
<style lang="scss" scoped></style>

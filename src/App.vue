<template>
  <Nav />
  <el-row>
    <el-col :span="8">
      <div>information</div>
    </el-col>
    <el-col :span="12">
      <router-view />
    </el-col>
    <!-- <el-col :span="4">
      <SkillTab :skillTabList="skillTabList" />
    </el-col> -->
  </el-row>
</template>

<script>
import Nav from "@/components/Nav";
//import SkillTab from "@/components/SkillTab";
export default {
  // data() {
  //   return {
  //     skillTabList: ["aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh"],
  //   };
  // },
  components: {
    Nav,
    // SkillTab,
  },
};
</script>
<style lang="scss" scoped></style>

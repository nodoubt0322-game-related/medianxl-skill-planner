<template>
  <el-form inline>
    <el-form-item label="選擇職業:">
      <el-select v-model="className" @change="handleChange">
        <el-option
          v-for="item in classArr"
          :key="item.value"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="輸入等級:">
      <el-select v-model="level">
        <el-option v-for="item in 140" :key="item" :value="item" />
      </el-select>
    </el-form-item>
    <el-form-item label="現有技能點數:">
      {{ skillPoint }}
    </el-form-item>
    <el-form-item label="已使用技能點數:">
      <span :class="{ forbidden: skillPoint < usedSkillPoint }">
        {{ usedSkillPoint }}
      </span>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      className: "amazon",
      level: 1,
      usedSkillPoint: 100,
      classArr: [
        { label: "亞馬", value: "amazon" },
        { label: "刺客", value: "assassin" },
        { label: "野蠻人", value: "barbarian" },
        { label: "德魯伊", value: "druid" },
        { label: "死靈", value: "necromancer" },
        { label: "聖騎士", value: "paladin" },
        { label: "法師", value: "sorceress" },
      ],
    };
  },
  computed: {
    skillPoint() {
      return this.level + 12 - 1;
    },
  },
  methods: {
    handleChange() {
      this.$router.push("/" + this.className);
    },
  },
};
</script>

<style lang="scss" scoped>
.forbidden {
  color: red;
}
</style>

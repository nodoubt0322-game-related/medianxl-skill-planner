<template>
  <div>
    <Skill01 class="skill active" />
    <Skill02 class="skill" />
    <Skill03 class="skill" />
    <Skill04 class="skill" />
    <Skill05 class="skill" />
    <Skill06 class="skill" />
    <Skill07 class="skill" />
    <Skill08 class="skill" />
  </div>
</template>

<script>
import Skill01 from "./Skill01.vue";
import Skill02 from "./Skill02.vue";
import Skill03 from "./Skill03.vue";
import Skill04 from "./Skill04.vue";
import Skill05 from "./Skill05.vue";
import Skill06 from "./Skill06.vue";
import Skill07 from "./Skill07.vue";
import Skill08 from "./Skill08.vue";

export default {
  components: {
    Skill01,
    Skill02,
    Skill03,
    Skill04,
    Skill05,
    Skill06,
    Skill07,
    Skill08,
  },
};
</script>
<style lang="scss" scoped>
.skill {
  display: none;
  &.active {
    display: block;
  }
}
</style>

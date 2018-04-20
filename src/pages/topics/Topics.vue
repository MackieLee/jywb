<template>
  <div class="topics">
    <intensive></intensive>
    <courses></courses>
  </div>
</template>

<script>
  import Intensive from './children/Intensive'
  import Courses from './children/Courses'

  export default {
    data() {
      return {

      }
    },
    components: {
      Intensive,
      Courses,
    }
  }
</script>

<style lang="scss" scoped>
</style>

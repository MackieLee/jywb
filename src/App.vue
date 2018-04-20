<template>
  <div id="app">
    <head-view></head-view>
    <div class="vessel">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </keep-alive>
    </div>
    <div class="LaoWang">
      <router-view></router-view>
    </div>
    <foot-view></foot-view>
  </div>
</template>

<script>
  import HeadView from './components/HeadView'
  import FootView from './components/FootView'
  export default {
    components: {
      HeadView,
      FootView,
    }
  }
</script>

<style>
  @import './style/common.scss';
  .vessel{
    max-width: 1000px;
    margin: 0 auto;
    z-index: 500;
  }
</style>

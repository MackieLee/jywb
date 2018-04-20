<template>
  <div class="head">
    <div class="fix">
      <nav>
        <div class="flex logo">
          <img src="./headicon.svg" />
        </div>
        <div class="flex sub-item">
          RIGHTSIDE CONTENT
        </div>
      </nav>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return{

      }
    }
  }
</script>

<style lang="scss" scoped>
  .head{
    height: 3.125rem;
    overflow: hidden;
  }
  .fix{
    width: 100%;
    position: fixed;
    z-index: 2000;
    border-bottom: 1px solid #e9eaea;
    @include bgcolor(#fff);
  }
  nav{
    height: 3.125rem;
    max-width: 1000px;
    margin: 0 auto;
    @include fx((justify-content:space-between))
    img{
      height: 1.5625rem;
    }
  }
  .flex{
    height: 100%;
    padding: 0 .5rem;
    @include fx((align-items: center));
    /*@include bgimg('http://www.w3school.com.cn/i/eg_bg_03.gif', no-repeat, center,(100% 100%));*/
  }
</style>

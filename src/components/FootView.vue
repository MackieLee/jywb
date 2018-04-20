<template>
  <div class="foot-view">
    <div class="foot-vessel">
      <Row>
        <Col :xs="{ span: 24 }" :md="{ span: 8 }">
          <div class="vessel-blue">
            section01
          </div>
        </Col>
        <Col :xs="{ span: 24 }" :md="{ span: 8 }">
          <div class="vessel-green">
            section02
          </div>
        </Col>
        <Col :xs="{ span: 24 }" :md="{ span: 8 }">
          <div class="vessel-yellow">
            section03
          </div>
        </Col>
      </Row>
      <Row>
        <Col :xs="{ span: 24 }" :md="{ span: 8 }">
          <div>
            bottom-01
          </div>
        </Col>
        <Col :xs="{ span: 24 }" :md="{ span: 8 }">
          <div>
            bottom-02
          </div>
        </Col>
        <Col :xs="{ span: 24 }" :md="{ span: 8 }">
          <div>
            bottom-03
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  .foot-vessel{
    max-width: 1000px;
    margin: 0 auto;
  }
  @mixin  vessel-color($colors) {
    @each $item in $colors{
      .vessel-#{$item}{
        @include bgcolor(light#{$item})
      }
    }
  }
  @include vessel-color((blue green yellow))
</style>

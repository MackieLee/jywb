<template>
  <div>
    <h2>SOME TOPICS HERE!!!</h2>
    <p>Here is the context weave around the topic up the line.</p>
    <Row type="flex" justify="space-between">
      <Col :xs="24" :sm="11" :md="7">
      <Card class="card">
        <div>
          <!--<img src="" />-->
          <div class="img">A SVG IMAGE</div>
          <h3>This is a significant card.</h3>
        </div>
      </Card>
      </Col>
      <Col :xs="24" :sm="11" :md="7">
      <Card class="card">
        <div>
          <div class="img">A SVG IMAGE</div>
          <h3>This is a significant card.</h3>
        </div>
      </Card>
      </Col>
      <Col :xs="24" :sm="11" :md="7">
      <Card class="card">
        <div>
          <div class="img">A SVG IMAGE</div>
          <h3>This is a significant card.</h3>
        </div>
      </Card>
      </Col>
    </Row>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  .img{
    width: 100%;
    height: 12rem;
    @include bgcolor(orange);
    border-radius: .3rem .3rem 0 0;
  }
  .card{
    cursor: pointer;
    @include media-less-md{ width: 20rem; margin: 0 auto; }
  }
</style>

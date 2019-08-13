<template>
  <div class="container h-100 mt-5">
    <div class="row">
      <div class="col-12">
        <div class="error-img-404"></div>
      </div>
      <div class="col-12 text-center error-text-404">
        <h3>Desculpe! Página não encontrada ;(</h3>
        <p>Possivelmente o link está quebrado, ou a página foi removida.</p>
        <div class="row justify-content-center">
          <div class="col-9 col-md-6 col-lg-3">
            <button @click="backHistory" class="btn btn-outline-louder-pink btn-lg btn-block">Voltar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pageError",
  metaInfo: {
    title: "Ops! Erro 404"
  },
  methods: {
    backHistory() {
      return this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
@import "../style/_breakpoints.scss";
.error-img-404 {
  background: transparent
    url("https://s3-sa-east-1.amazonaws.com/cdn-louder2/frontend/error-404@3x.png")
    center center/contain no-repeat;
  width: 100%;
  height: 166px;
  margin: 0 auto 50px;

  @include lg {
    height: 300px;
  }
}

.error-text-404 {
  h3 {
    font-size: 20px;
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
    margin-bottom: 15px;
  }
  p {
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
    margin-bottom: 30px;
  }

  @include lg {
    h3 {
      font-size: 56px;
    }
    p {
      font-size: 22px;
    }
  }
}
</style>

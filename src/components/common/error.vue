<template>
  <div class="error">
    <p>Сервер не отвечает</p>
    <div >Повторите попытку</div>
  </div>
</template>

<script>
</script>

<style lang="scss">
.error {
  margin-top: 60px;
  
  p { 
    font-size: 24px;
  }

  div  {
    font-size: 18px;
    margin: 35px 0;
  }
}

.dark {
  .error {
    p {
      color: white;
    }

    div {
      color: white;
    }
  }
}
</style>


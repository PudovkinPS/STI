
<template>
  <div class="alert" v-if="settingsAlert.show">
    <div class="closed" @click="changeSettingslert(false)">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        version="1.1" id="Capa_1" x="0px" y="0px" 
        viewBox="0 0 512.001 512.001" 
        style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">
        <path fill="white" d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717    
        L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859    
        c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287    
        l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285    
        L284.286,256.002z"/>
      </svg>
    </div>
    <div class="text">
      {{ settingsAlert.text }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  name: "alertComponent",
  computed: mapGetters(['settingsAlert']),
  methods: mapActions(['changeSettingslert']),
};
</script>

<style lang="scss">
@media (max-width: 550px) { 
  .alert {
    right: 15px !important;
    width: calc(100% - 30px) !important;
  }
}

.alert {
  position: fixed;
  right: 30px;
  top: 70px;
  width: auto;
  height: 85px;
  background: #7957d5;
  padding: 10px 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  .closed {
    position: absolute;
    right: 5px;
    top: 5px;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      height: 15px;
      width: 15px;
      cursor: pointer;
    }

    &:hover {
      background: #fff;
      svg {
        path {
          fill: black !important;
        }
      }
    }
  }

  .text {
    color: #fff;
  }
}
</style>

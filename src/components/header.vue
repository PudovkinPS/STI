<template>
  <div class="header">
    <div class="header-control">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="basic" id="Layer_1" x="0px" y="0px" height="32px" viewBox="-1666 1260.2 68.1 32" xml:space="preserve">
          <g id="XMLID_5_">
            <path id="XMLID_24_" class="st0" d="M-1597.9,1272.4L-1597.9,1272.4c0-1.7-1.3-3.1-2.9-3.1c-0.6,0-1.2,0.2-1.7,0.6l0,0l-22.5,16.4   v-16.4h-4.5v19.2l0,0l0,0c0,1.7,1.3,3,2.9,3c0.6,0,1.2-0.2,1.7-0.6l0,0l22.5-16.4v17h4.5V1272.4L-1597.9,1272.4z"/>
            <path id="XMLID_23_" class="st0" d="M-1661.4,1267.6c0.1-1.2,1-2.3,2.4-2.6c0.7-0.1,1.7-0.2,1.7-0.2h32.1v-4.6c0,0-32.8,0-32.9,0   c-3,0.1-5.3,1.3-6.8,3.7c-0.7,1.2-1.1,2.4-1.1,4.1c0,0.1,0,5.7,0,7.8c0.1,2.4,1.2,4.4,3.2,5.8c1.4,0.9,3,1.4,5,1.4h15.6v-4.6   c0,0-14.1,0-14.9,0c-0.5,0-1,0-1.4-0.1c-1.4-0.1-2.5-0.9-2.9-2.2c-0.1-0.4-0.2-0.9-0.1-1.6v-6   C-1661.4,1268.3-1661.4,1267.9-1661.4,1267.6z"/>
            <rect id="XMLID_20_" x="-1656.9" y="1269.4" class="st1" width="31.9" height="4.6"/>
            <rect id="XMLID_19_" x="-1643.2" y="1278.4" class="st1" width="4.5" height="13.7"/>
          </g>
        </svg>
      </div>
      <div class="header-control-theme">
        <SunIconSVG class="sun-icon-svg"></SunIconSVG>
        <b-switch @input="switchThemeColor" :rounded="false" v-model="darkColor"></b-switch>
        <MoonIconSVG class="moon-icon-svg"></MoonIconSVG>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import SunIconSVG from '@/assets/SunIconSVG.vue'
import MoonIconSVG from '@/assets/MoonIconSVG.vue'

export default {
  name: "HeaderComponent",
  components: {
    SunIconSVG,
    MoonIconSVG
  },
  data() {
    return {
      darkColor: this.getColorTheme
    };
  },
  computed: mapGetters(['getColorTheme']),
  methods: mapActions(['switchThemeColor']),
};
</script>

<style lang="scss">
@media (max-width: 850px) { 
  .header {
    padding: 0 15px;
  }
 }

.header {
  display: flex;
  width: 100%;
  height: 60px;
  background: #2c3236;
  margin-bottom: 50px;

  .st0 {
    fill:#FFFFFF;
  }
	.st1{ 
    fill:#FF3300;
  }

  .header-control {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    max-width: 800px;

    .header-control-theme {
      display: flex;
      align-items: center;

      .sun-icon-svg {
        filter: none;
      }

      .moon-icon-svg {
        filter: grayscale(1);
      }

      .switch {
        margin: 0 10px;
      }
    }
  }
}

.dark {
  .header-control-theme {
    .moon-icon-svg {
      filter: grayscale(0) !important;
    }
    .sun-icon-svg {
      filter: grayscale(1) !important;
    }
  }
}
</style>

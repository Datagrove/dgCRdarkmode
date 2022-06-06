<template>
  <div class="app" :class="mode">
    <Header :mode="mode" @toggle="toggle" />
    <router-view></router-view>
    <Footer />
  
  </div>


</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      modeList: [
        { id: 0, text: 'dark-mode'},
        { id: 1, text: 'light-mode'}
      ],
      mode: 'light'
    }
  },
  created() {
    window.addEventListener('keyup', this.keyPress)
  },
  methods: {
    keyPress(e) {
      if (e.key === 't') {
        this.toggle
      } 
    },
    toggle() {
      if(this.mode === 'dark') {
        this.mode = 'light'
      } else {
        this.mode = 'dark'
      }
    }
  }
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Tajawal', sans-serif;
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}
 
.app {
  width: 100vw;
  min-height: 100vh;
  /* height: 100%; */
  background: #F3F3F3;
  color: #15202B;
  transition: background 0.3s ease-in-out;
}

a {
  color: #195955;
}

.dark {
  background: #192734;
  color: #E8E8E8;
}

.dark a {
  color: #588124;
}
</style>

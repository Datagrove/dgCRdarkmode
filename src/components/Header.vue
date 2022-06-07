<template>
  <header>
    <div id="title-toggle">
      <h3>Datagrove Costa Rica</h3>
      <!-- <img src="https://img.icons8.com/pastel-glyph/64/undefined/combo-chart--v2.png" id="logo-img"/> -->
      <img src="/circle_logo.png" id="logo-img"/>
      <!-- <img src="../../public/logo_transparent.png" id="logo-img"/> -->
      <Toggle :mode="mode" @toggle="$emit('toggle')" />
    </div>

    <nav>
      <div class="nav-link">
        <router-link to="/">Home</router-link>
      </div>
      <div class="nav-link">
        <router-link to="/about">About</router-link>
      </div>
      <div class="nav-link">
        <router-link to="/internship">Internship</router-link>
      </div>
      <!-- <div class="nav-link">
        <router-link to="/contact">Contact</router-link>
      </div> -->
    </nav>
    
  </header>
</template>

<script>
import Toggle from '../components/Toggle.vue'
export default {
  name: 'Header',
  props: ['mode'],
  components: {
    Toggle
  }
}
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  height: 60px;
  background: #C3C3C3;
  transition: background 0.3s ease-in-out;
}

#title-toggle > * {
  /* background-color: red; */
  float: left;
  padding: 10px;

}
.dark header {
  background: #15202B;
}

#logo-img {
  display: none;
}

header h3 {
  /* font-size: 32px; */
  /* text-transform: uppercase; */
  font-size: x-large;
  font-weight: 900;
  color: #195955;
}

.dark header h3 {
  color: #588124;
}

header nav {
  display: flex;
  height: 60px;
}

header nav .nav-link {
  display: flex;
  align-items: center;
  padding: 0px 15px;
  font-weight: bold;
  font-size: large;
}

header nav .nav-link:hover {
  background: #B0B0B0;
}

.dark header nav .nav-link:hover {
  background: #101520;
}

@media only screen and (max-width: 799px) {
    header {
      display: flex;
      justify-content: content-center;
    }

    header nav .nav-link {
      display: flex;
      align-items: center;
      padding: 0px 5px;
      font-weight: bold;
      font-size: large;
    }

    #title-toggle > h3 {
      display: none;
    }

    #title-toggle {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      /* background-color: red; */
      padding: 0px;
      height: 100%;
      /* object-fit: fill; */
    }

    #logo-img {
      display: flex;
      /* border: 1px solid black; */
      height: 100%;
      width: auto;
    }

}
</style>

<template>
  <div class="toggle-wrapper">
    <label class="toggle">
      <input 
        type="checkbox" 
        :checked="(mode === 'dark') ? 'checked' : false" 
        @change="$emit('toggle')"
      />
      <span class="toggler round"></span>
    </label>
  </div>
</template>

<script>
export default {
    name: 'Toggle',
    props: ['mode']
}
</script>

<style>
.toggle {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  /* background-color: red; */
}
.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggler {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #195955;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.toggler:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  left: 4px;
  bottom: 2px;
  background: #FFF;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .toggler {
  background: #588124;
}

/* input:focus + toggler {
  box-shadow: 0 0 2px #2196F3;
} */

input:checked + .toggler:before {
  -webkit-transform: translateX(18px);
  -ms-transform: translateX(18px);
  transform: translateX(18px);
}

.toggler.round {
  border-radius: 34px;
}

.toggler.round:before {
  border-radius: 50%;
}
</style>


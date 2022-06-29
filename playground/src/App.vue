<script lang="ts" setup>
import { genColor } from '../../src'
const colors = genColor(50)
</script>
<template>
  <div>
    <h1>this is generator colors</h1>
    <div
      v-for="(color, index) in colors"
      :key="index"
      class="color-block"
      :style="{'background': `rgb(${color.r}, ${color.g}, ${color.b})`}"
    >
      {{ color.h }}
    </div>
  </div>
</template>
<style>
.color-block {
  width: 100px;
  height: 20px
}
</style>

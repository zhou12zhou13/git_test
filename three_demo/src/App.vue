<template>
  <div id="demo" style="margin-top: 200px; margin-left: 100px"></div>
</template>

<script setup>
// import * as THREE from 'three';
import { onMounted } from 'vue';
import scene from "/public/threedemo.js"
import renderer from "/public/renderer.js"
console.log(scene);



onMounted(()=>{
    // console.log( document.getElementById('demo'))
    document.getElementById('demo').appendChild(renderer.domElement);
})
</script>

<style scoped></style>

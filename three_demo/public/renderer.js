
import * as THREE from 'three';
import scene from "./threedemo.js"


// 渲染循环


    const width = 800; //宽度
    const height = 500; //高度
    const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
    camera.position.set(200, 200, 200);
    camera.lookAt(0, 0, 0); //指向mesh对应的位置


    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)
    renderer.render(scene, camera); //执行渲染操作
    document.body.appendChild(renderer.domElement);//渲染器WebGLRenderer通过属性.domElement可以获得渲染方法.render()生成的Canvas画布
    // document.getElementById('demo').appendChild(renderer.domElement);


export  default{renderer}
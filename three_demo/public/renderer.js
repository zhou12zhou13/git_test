
import * as THREE from 'three';
import scene from "./threedemo.js"


// 渲染循环
function render() {

    const width = 800; //宽度
    const height = 500; //高度
    // 实例化一个透视投影相机对象
    const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
    //相机在Three.js三维坐标系中的位置
    // 根据需要设置相机位置具体值
    camera.position.set(200, 200, 200);
    camera.lookAt(0, 0, 0); //指向mesh对应的位置


    const renderer = new THREE.WebGLRenderer();

    // // 定义threejs输出画布的尺寸(单位:像素px)
  
    
    // const canvas = document.createElement('canvas');
    // const renderer = new THREE.WebGLRenderer({
    //     canvas:canvas//渲染结果输出画布：canvas
    // });
    renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)
    renderer.render(scene, camera); //执行渲染操作
    document.body.appendChild(renderer.domElement);//渲染器WebGLRenderer通过属性.domElement可以获得渲染方法.render()生成的Canvas画布
    // document.getElementById('demo').appendChild(renderer.domElement);
}
render();

export  default{render}
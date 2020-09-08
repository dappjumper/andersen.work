<template>
    <div ref="threeContainer" class="threeContainer"></div>
</template>

<script>
import * as Three from 'three'

export default {
  name: 'ThreeIllustration',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      container: null,
      visible: false
    }
  },
  methods: {
    init: function() {
        window.unique3D = (window.unique3D ? window.unique3D++ : 0)
        this.container = this.$refs.threeContainer

        this.camera = new Three.PerspectiveCamera(20, this.container.clientWidth/this.container.clientHeight, 0.01, 10)
        this.camera.position.z = 1

        this.scene = new Three.Scene()

        let geometry = new Three.SphereGeometry(0.173, 64, 12)
        let wireframe = new Three.WireframeGeometry( geometry )
        let wireframeMaterial = new Three.MeshBasicMaterial( { color: 0x111111 } )
        let pointMaterial = new Three.PointsMaterial({
            color: 0xfafafa,
            size: 2,
            morphTargets: true,
            sizeAttenuation: false
        });
        this.mesh = new Three.Mesh(geometry, wireframeMaterial)
        this.dotMesh = new Three.Points(geometry, pointMaterial)
        this.scene.add(this.mesh)
        this.scene.add(this.dotMesh)

        this.renderer = new Three.WebGLRenderer({antialias: true, alpha: true})
        
        this.onResize()
        window.addEventListener("resize", this.onResize)

        this.container.appendChild(this.renderer.domElement)

    },
    animate: function() {
        requestAnimationFrame(this.animate)
        this.mesh.rotation.x += 0.005
        this.mesh.rotation.z += 0.005
        this.dotMesh.rotation.x += 0.005
        this.dotMesh.rotation.z += 0.005
        this.renderer.render(this.scene, this.camera)
    },
    onResize () {
      this.camera.aspect = 1
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(this.container.clientHeight, this.container.clientHeight)
    }
  },
  mounted() {
      this.init()
      this.animate()
  }
}
</script>

<style scoped>
  .threeContainer {
    height:300px;
    width:300px;
    z-index:1;
    overflow:visible;
    pointer-events:none;
    margin:0 auto;
  }
</style>
var camera, scene, renderer;
 var mesh;
 var winWidth = window.innerWidth;
 var winHeight = window.innerHeight;
 init();
 animate();
 


 function init() {
 
 	renderer = new LeiaWebGLRenderer({
 		antialias: true,
 		renderMode: _renderMode,
 		devicePixelRatio: 1
 	});//1 
 	renderer.Leia_setSize(winWidth, winHeight);//2 
 	document.body.appendChild(renderer.domElement);
 
	 //setup camera
 	camera = new LeiaCamera();
    camera.position.copy(_camPosition);
    camera.lookAt(_tarPosition);
 
 	scene = new THREE.Scene();
 
 	var geometry = new THREE.BoxGeometry(200, 200, 200);
 	var texture = THREE.ImageUtils.loadTexture('resource/crate.gif');
 	texture.anisotropy = renderer.getMaxAnisotropy();
 
 	var material = new THREE.MeshBasicMaterial({ map: texture });
 
 	mesh = new THREE.Mesh(geometry, material);
 	scene.add(mesh);
 }
 
 
 function animate() {
 
 	requestAnimationFrame(animate);
 	mesh.rotation.x += 0.005;
 	mesh.rotation.y += 0.01;
  renderer.setClearColor(new THREE.Color().setRGB(1.0, 1.0, 1.0)); 
	renderer.Leia_render(scene, camera,undefined,undefined,_holoScreenScale,_camFov);
 
 }

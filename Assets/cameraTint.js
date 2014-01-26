private var cam:GameObject;

function Start(){
   cam = GameObject.Find("Main Camera");
}

function Update(){
   transform.position = cam.camera.transform.position + cam.camera.transform.forward;
}
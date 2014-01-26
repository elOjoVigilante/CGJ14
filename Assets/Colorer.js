#pragma strict

var color:String = "black";

function Start () {

}

function Update () {
   if(color == "black"){
      gameObject.renderer.material.color = Color.black;
   }
   if(color == "red"){
      gameObject.renderer.material.color = Color.red;
   }
   if(color == "magenta"){
      gameObject.renderer.material.color = Color.magenta;
   }
}
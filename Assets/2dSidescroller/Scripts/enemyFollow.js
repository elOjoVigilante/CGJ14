#pragma strict

// This script gets attached to the player. It will find the camera and make it follow. 
// Set Dead Zone to 0 if you want the camera to follow the player exactly.

var sad:boolean = false;
var moveRate:float = 0.2;
var player:GameObject;

function Start () {
//The variable cam will look for the Main Camera in the scene before the scene starts running and make it become the variable cam.
  player = GameObject.Find("Player");
}

function Update () {

  if(sad){
    var distance = player.transform.position.x - gameObject.transform.position.x;
    if (distance < 0){
       gameObject.transform.position.x += -moveRate;
    }else{
       gameObject.transform.position.x += moveRate;
    }
  }     

}
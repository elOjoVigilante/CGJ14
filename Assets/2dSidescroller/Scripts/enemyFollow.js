#pragma strict

// This script gets attached to the player. It will find the camera and make it follow. 
// Set Dead Zone to 0 if you want the camera to follow the player exactly.

var sad:boolean = false;
var angry:boolean = false;
var calm: boolean = false;
var moveRate:float = 0.2;
var player:GameObject;

function Start () {
//The variable cam will look for the Main Camera in the scene before the scene starts running and make it become the variable cam.
  player = GameObject.Find("Player");
}

function Update () {

  if(angry){
    var distanceX = player.transform.position.x - gameObject.transform.position.x;
    var distanceY = player.transform.position.y- gameObject.transform.position.y;
    if (distanceX < 0){
       gameObject.transform.position.x += -moveRate;
    }else if (distanceX > 0){
       gameObject.transform.position.x += moveRate;
    }
    if (distanceY < 0){
       gameObject.transform.position.y += -moveRate/8;
    }else if (distanceY > 0){
       gameObject.transform.position.y += moveRate/8;
    }
  }     

}
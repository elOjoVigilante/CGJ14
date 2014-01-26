#pragma strict

// This script gets attached to the player. It will find the camera and make it follow. 
// Set Dead Zone to 0 if you want the camera to follow the player exactly.

var show:boolean = false;

function Start () {
}

function Update () {
  
  gameObject.GetComponent(SpriteRenderer).enabled = false;

  if(show){
    gameObject.GetComponent(SpriteRenderer).enabled = true;    
  }     

}
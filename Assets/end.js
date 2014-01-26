#pragma strict

//This is attached to an object that can be picked up. It doesn't do anything unless it collides with something.
  function OnTriggerEnter(other : Collider){
    if(other.tag == "playercam"){
       Application.LoadLevel("Credits");
     }
  }
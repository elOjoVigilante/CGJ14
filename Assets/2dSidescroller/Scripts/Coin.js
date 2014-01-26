#pragma strict

//This is attached to an object that can be picked up. It doesn't do anything unless it collides with something.
  function OnTriggerEnter(other : Collider){
    //Checking the tag allows the object to only do something if a certain object hits it. In this case, the player is the only one that can take the coins.
    print("Collider");
    if(other.tag == "playercam" && gameObject.GetComponent(enemyFollow).angry){
    //If the player touches a coin, it will find the object that manages the coin count and tells it that a coin was taken.
    var score = GameObject.Find("Score");
    score.BroadcastMessage("getCoin",-1, SendMessageOptions.DontRequireReceiver);
  }
}
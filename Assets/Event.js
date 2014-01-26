#pragma strict
//This is attached to an object that can be picked up. It doesn't do anything unless it collides with something.
function OnTriggerEnter(other : Collider){
   if(other.tag == "playercam"){
      var textGUI = GameObject.Find("Show Level");
      textGUI.guiText.text = "PRESS Q MUTHAFUCKA";
      textGUI.GetComponent(TextFader).Restart();
      Destroy(gameObject);
   }
}
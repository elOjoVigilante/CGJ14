#pragma strict

//This is attached to an object that can be picked up. It doesn't do anything unless it collides with something.
  function OnTriggerEnter(other : Collider){
    if(other.tag == "playercam" && GameObject.Find("Tint").GetComponent(Colorer).color == "red"){
       var wall = GameObject.Find("Wall1");
       var wall2 = GameObject.Find("Wall1-ColliderWALL");
       var textGUI = GameObject.Find("Show Level");
       textGUI.guiText.text = "Yes! Now I can go forward!";
       textGUI.GetComponent(TextFader).Restart();
       Destroy(wall);
       Destroy(wall2);
       Destroy(gameObject);
     }
  }
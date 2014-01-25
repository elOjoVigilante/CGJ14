#pragma strict

//This is the script we created to manage the amount of coins text in the top left corner while players are in levels.

//This is the sound we want to play if a player gets a coin.
var coinSound:AudioClip;

//this is a private variable that we'll set as a saved variable in Start().
private var totalCoins:float;

function Start () {
//This sets the private variable to the saved variable we create thats also in this script. It allows us to carry on information that the player has changed by playing.
totalCoins = PlayerPrefs.GetFloat("coins");
//This sets the Text in the top right Corner to display how many coins we have depending on the variable totalCoins. Ex. COINS: 16
transform.guiText.text = "COINS: " + totalCoins.ToString();
}

//This function is called when a coin sends us the message "getCoin" which is in the coin.js script.
function getCoin (n:int) {
//once we receive the message from the coin, we play the sound we set when a coin is taken.
audio.PlayOneShot(coinSound);
//we add 1 to totalCoins
totalCoins += n;
//then we resave the variable that we use to always save how many the player received while playing.
PlayerPrefs.SetFloat("coins", totalCoins);
//this updates the text in the top left corner again, just like in function Start()
transform.guiText.text = "COINS: " + totalCoins.ToString();
}

function getPrize (n:int) {
//once we receive the message from the coin, we play the sound we set when a coin is taken.
audio.PlayOneShot(coinSound);
//we add 1 to totalCoins
totalCoins -= n;
//then we resave the variable that we use to always save how many the player received while playing.
PlayerPrefs.SetFloat("coins", totalCoins);
//this updates the text in the top left corner again, just like in function Start()
transform.guiText.text = "COINS: " + totalCoins.ToString();
}

function changeBg (color:Color){
   var cam:GameObject;
   cam = GameObject.Find("Main Camera");
   cam.camera.backgroundColor = color;
}
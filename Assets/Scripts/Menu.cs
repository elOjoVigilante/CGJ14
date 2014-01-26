using UnityEngine;
using System.Collections;

public class Menu : MonoBehaviour {

	float fadeTime = 4.0f;

	GameObject gameCamera;
	AudioSource music;
	
	// Use this for initialization
	void Start () {
		gameCamera = GameObject.Find ("Main Camera");
		music = gameCamera.GetComponent<AudioSource> ();
		music.enabled = true;
		music.volume = 1.0f;
	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown (KeyCode.Space)) {
			//fade intro
			StartCoroutine(FadeMusic());
		}
	}
	
	//si alguien hace que esto funcione me avisa >_>
	private IEnumerator FadeMusic() {
		while (music.volume > 0) {
			music.volume -= Time.deltaTime / fadeTime;
			yield return null;
		}
		//load
		Application.LoadLevel("Scene1");
	}
}

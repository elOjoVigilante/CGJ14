using UnityEngine;
using System.Collections;

public class Menu : MonoBehaviour {
	
	enum Fade {In, Out}
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
			//StartCoroutine(FadeMusic(fadeTime, Fade.Out));
			//FadeMusic();

			//load
			Application.LoadLevel("Scene1");
		}
	}
	
	//si alguien hace que esto funcione me avisa >_>
	private void FadeMusic() {
		float start = Time.time;
		float elapsedTime = 0.0f;

		do {
			elapsedTime = Time.time - start;
			music.volume = Mathf.Lerp (1.0f, 0.0f, elapsedTime / fadeTime);
			//yield return null;
		} while (elapsedTime < fadeTime);
	}
}

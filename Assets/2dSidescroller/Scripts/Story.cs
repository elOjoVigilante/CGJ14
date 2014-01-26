using UnityEngine;
using System.Collections;

public class Story : MonoBehaviour {

	float fadeTime = 4.0f;
	
	GameObject gameCamera;
	GameObject menuObject;
	AudioSource music;
	
	Vector3 storyPosition;
	float scrollSpeed = 9.5f;

	float elapsedTime;
	
	// Use this for initialization
	void Start () {
		gameCamera = GameObject.Find ("Main Camera");
		music = gameCamera.GetComponent<AudioSource> ();
		music.enabled = true;
		music.volume = 1.0f;
		
		menuObject = GameObject.Find ("Story");
		storyPosition = menuObject.transform.position;
		storyPosition.y = -1.25f;
		menuObject.transform.position = storyPosition;

		elapsedTime = 0.0f;
	}
	
	// Update is called once per frame
	void Update () {
		if (storyPosition.y <= 2.0f) {
			storyPosition.y += Time.deltaTime / scrollSpeed;
		}
		menuObject.transform.position = storyPosition;

		elapsedTime += Time.deltaTime;
		
		if (elapsedTime >= 30.0f) {
			//fade intro
			//StartCoroutine(FadeMusic());
			Application.LoadLevel ("Level 1");
		}
	}
}

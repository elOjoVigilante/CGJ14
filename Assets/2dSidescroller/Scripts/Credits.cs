using UnityEngine;
using System.Collections;

public class Credits : MonoBehaviour {

	float fadeTime = 4.0f;
	
	GameObject gameCamera;
	GameObject menuObject;
	AudioSource music;

	Vector3 creditsPosition;
	float scrollSpeed = 3.5f;
	
	// Use this for initialization
	void Start () {
		gameCamera = GameObject.Find ("Main Camera");
		music = gameCamera.GetComponent<AudioSource> ();
		music.enabled = true;
		music.volume = 1.0f;

		menuObject = GameObject.Find ("Credits");
		creditsPosition = menuObject.transform.position;
		creditsPosition.y = -2.0f;
		menuObject.transform.position = creditsPosition;
	}
	
	// Update is called once per frame
	void Update () {
		if (creditsPosition.y <= 2.0f) {
			creditsPosition.y += Time.deltaTime / scrollSpeed;
		} else {
			creditsPosition.y = -2.0f;
		}
		menuObject.transform.position = creditsPosition;

		if (Input.GetKeyDown (KeyCode.Escape)) {
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
		Application.Quit ();
	}
}

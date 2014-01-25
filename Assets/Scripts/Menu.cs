using UnityEngine;
using System.Collections;

public class Menu : MonoBehaviour {

	// Use this for initialization
	void Start () {
	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown (KeyCode.Space)) {
			//fade intro
			FadeMusic(4);

			//load
			Application.LoadLevel("Scene1");
		}
	}

	private void FadeMusic(float seconds) {
		float initialVolume = audio.volume;
		float changingVolume;
		float t = 0f;

		while (t < 1) {
			t += Time.deltaTime / seconds;
			changingVolume = Mathf.Lerp(initialVolume, 0, t);
			audio.volume = changingVolume;
		}
	}
}

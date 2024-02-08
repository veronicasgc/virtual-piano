const pianoKeys = document.querySelectorAll(".piano-keys .key");

const volume = document.querySelector(".volume-slider input")
const keysChecked = document.querySelector(".keys-check input")

let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
  audio.src = `src/tunes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

let mapedKeys = [];
pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
  playTune(e.key);
  if(mapedKeys.includes(e.key)){
    playTune(e.key);
  }
});

const handleVolume = (e)=>{
    audio.volume = e.target.value;
}
volume.addEventListener("input", handleVolume)

const showHideKeys = () => {
  pianoKeys.forEach(key => key.classList.toggle("hide"))
}
keysChecked.addEventListener("input", showHideKeys )

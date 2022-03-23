function playAudio(url) {
  new Audio(url).play();
}

function toggleCaption(id, captionText) {
  var caption = document.getElementById(id);
  caption.innerHTML = captionText;
}

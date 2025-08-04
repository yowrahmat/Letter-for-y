const message = `I don’t even know if you’ll ever read this.\nBut if you do… I just want you to know, I have crush on you.\n\nMungkin ini terlalu tiba-tiba. Tapi perasaan ini udah lama ada. I've been keeping these feelings to my self for a long time, mybe since two years ago.\n\nAku bukan orang yang pandai dalam menunjukkan perasaan, apalagi mengungkapkannya langsung. But i'd regret it more if i never said anything at all.\n\nKarna kata orang, perasaan yang ngga pernah diungkapkan itu, nggak akan pernah jadi apa-apa.`;
function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

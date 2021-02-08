alert("Hello World");

// JS can change anything including the Content of HTML and the style of CSS

function hello() {
  var image = document.getElementById("lastdance");
  if ((image.src.match = "wallpaper")) {
    image.src =
      "./assets/images/The-complicated-Bulls-legacy-of-Jerry-Krause.jpg";
  } else {
    image.src = "./assets/images/wallpaper.jpg";
  }
}

function newStyle() {
  let newColor = "";
  let newFont = "";
  let x = Math.floor(Math.random() * 7);
  switch (x) {
    case 0:
      newColor = "red";
      newFont = "Times New Roman";
      break;
    case 1:
      newColor = "blue";
      newFont = "Florence, cursive";
      break;
    case 2:
      newColor = "yellow";
      newFont = "Verdana";
      break;
    case 3:
      newColor = "purple";
      newFont = "Courier New";
      break;
    case 4:
      newColor = "cyan";
      newFont = "Georgia";
      break;
    case 5:
      newColor = "maroon";
      newFont = "Palatino";
      break;
    case 6:
      newColor = "lime";
      newFont = "Impact";
      break;
  }
  var elem = document.getElementById("jordan");
  elem.style.color = newColor;
  elem.style.fontFamily = newFont;
}

// Just like when you Like and the count increases by 1

// Make sure your JS loads asynchronously or defer AFTER the browser read the DOM

// Listener e.g. onclick

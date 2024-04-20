function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag imag
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.jpg")
  } else {
    //se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/avatr.png")
  }
}

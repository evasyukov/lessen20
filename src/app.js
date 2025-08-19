import { getRandomColor } from "./utils"

export default function initApp() {
  const body = document.querySelector("body")
  body.insertAdjacentHTML(
    "afterbegin",
    '<button class="button">Изменить цвет страницы</button>'
  )

  const button = document.querySelector(".button")
  button.addEventListener("click", () => {
    const backgroundColor = getRandomColor()
    body.style.backgroundColor = backgroundColor
  })
}
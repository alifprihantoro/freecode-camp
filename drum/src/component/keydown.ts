import play from './play'

export default function keydown() {
  window.addEventListener('keydown', (e) => {
    console.log(e)
    play(e.keyCode)
  })
}

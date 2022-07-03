import play from './play'

export default function keydown() {
  window.addEventListener('keydown', (e) => {
    play(e.keyCode)
  })
}

export default function play(e:any) {
    const audio = document.querySelector(`audio[data-key='${e}']`) as HTMLVideoElement | null
    if (audio != null) {
      const parent = audio.parentElement as HTMLVideoElement
      // const id_parent = parent?.id

      audio.currentTime = 0
      audio.play()

      parent.classList.toggle('klicked')
    }
  }

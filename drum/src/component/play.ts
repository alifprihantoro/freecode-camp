import changeDescription from "./change-description"

export default async function play(e:any) {
    const audio = document.querySelector(`audio[data-key='${e}']`) as HTMLVideoElement | null
    if (audio != null) {
      
      const parent = audio.parentElement as HTMLVideoElement
      const id_parent = parent?.id

      changeDescription(id_parent)
      audio.currentTime = 0
      audio.play()

      parent.classList.toggle('klicked')
      await new Promise(resolve => setTimeout(resolve, 1000));
      parent.classList.toggle('klicked')
    }
  }

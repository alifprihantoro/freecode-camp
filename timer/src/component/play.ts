export default async function play() {
  const audio = document.getElementById('beep') as HTMLVideoElement
  audio.currentTime = 0
  audio.play()
  await new Promise((resolve) => setTimeout(resolve, 1000))
}

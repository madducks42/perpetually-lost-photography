export function randomizeImages(images) {
  for (let i = images.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = images[i]
    images[i] = images[j]
    images[j] = k
  }
}
function handler() {
  const header = document.querySelector('.main-header')
  /* istanbul ignore else */
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight * 2 / 3) {
        header.classList.remove('transparent')
      } else {
        header.classList.add('transparent')
      }
    })
  }
}

window.addEventListener('load', handler)

export default handler

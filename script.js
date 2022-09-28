const grapeRef = document.querySelector('.grape-container')
const sceneRef = document.querySelector('.scene-container')
const infoRef = document.querySelector('.info-container')

let currentInfoRef = null;

function addGrape({
  top, left, info
}) {
  const newGrape = grapeRef.cloneNode(true)
  newGrape.style.top = top
  newGrape.style.left = left
  newGrape.hidden = false

  newGrape.onclick = (e) => {
    const newInfo = infoRef.cloneNode(true)
    newInfo.querySelector('.info').innerHTML = info
    newInfo.style.left = `calc(${newGrape.style.left} + 32px)`
    newInfo.style.top = `calc(${newGrape.style.top} + 32px)`
    newInfo.hidden = false

    // Delete the old info
    if (currentInfoRef) { currentInfoRef.remove() }
    currentInfoRef = newInfo

    sceneRef.appendChild(newInfo)
    requestAnimationFrame(() => {
      // Update styles to trigger animation transition
      newInfo.style.opacity = '100%'
      newInfo.style.transform = 'scale(1)'
    })
  }

  sceneRef.appendChild(newGrape)
}

addGrape({
  top: '287px',
  left: '226px',
  info: "Here's some info about grapes."
})

addGrape({
  top: '440px',
  left: '181px',
  info: "Here's a LOT more info about grapes. asdf;lkajsd; lkajsd;flk jasd;lfkj as;lkdfj ;alskdjf;alskdj"
})

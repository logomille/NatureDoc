const grapeRef = document.querySelector('.grape-container')
const sceneRef = document.querySelector('.scene-container')
const infoModalRef = document.getElementById('info-modal')


function closeInfoModal() {
  infoModalRef.style.opacity = '0'
  infoModalRef.ontransitionend = () => {
    infoModalRef.close()
    infoModalRef.ontransitionend = null
  }
}

function addGrape({
  top, left, info
}) {
  const newGrape = grapeRef.cloneNode(true)
  newGrape.style.top = top
  newGrape.style.left = left
  newGrape.hidden = false

  newGrape.onclick = (e) => {
    infoModalRef.querySelector('.info-modal-text-content').innerHTML = info
    infoModalRef.showModal()
    requestAnimationFrame(() => {
      // Update styles to trigger animation transition
      infoModalRef.style.opacity = '100%'
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

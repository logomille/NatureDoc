const grapeRef = document.querySelector('.grape-container')
const sceneRef = document.querySelector('.scene-container')
const infoModalRef = document.getElementById('info-modal')

let currentTextContent = null

function closeInfoModal() {
  infoModalRef.style.opacity = '0'
  infoModalRef.ontransitionend = () => {
    infoModalRef.close()
    infoModalRef.ontransitionend = null
  }
}

function addGrape({
  top, left, infoElementId, imgSrc, width
}) {
  const newGrape = grapeRef.cloneNode(true)
  newGrape.style.top = top
  newGrape.style.left = left
  newGrape.hidden = false

  const grapeImg = newGrape.querySelector('.grape-img')
  grapeImg.src = imgSrc
  grapeImg.style.width = width

  newGrape.onclick = (e) => {
    if (currentTextContent) {
      currentTextContent.hidden = true
    }
    currentTextContent = document.getElementById(infoElementId)
    currentTextContent.hidden = false
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
  infoElementId: 'first_grape',
  imgSrc: './grapebunch.png',
  width: '66px'
})

addGrape({
  top: '440px',
  left: '181px',
  infoElementId: 'second_grape',
  imgSrc: './grapebunch.png',
  width: '48px'
})

addGrape({
  top: '200px',
  left: '181px',
  infoElementId: 'third_grape',
  imgSrc: './grapebunch.png',
  width: '48px'
})
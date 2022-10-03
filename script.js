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
    document.querySelector('.info-modal-text-content').scrollTop = 0;
    requestAnimationFrame(() => {
      // Update styles to trigger animation transition
      infoModalRef.style.opacity = '100%'
    })
  }

  sceneRef.appendChild(newGrape)
}

addGrape({
  top: '300px',
  left: '45px',
  infoElementId: 'button',
  imgSrc: './button.png',
  width: '100px'
})

addGrape({
  top: '370px',
  left: '287px',
  infoElementId: 'grape_single',
  imgSrc: './grape.png',
  width: '50px'
})

addGrape({
  top: '452px',
  left: '170px',
  infoElementId: 'first_grape',
  imgSrc: './grapebunch.png',
  width: '100px'
})

addGrape({
  top: '730px',
  left: '270px',
  infoElementId: 'second_grape',
  imgSrc: './grapebunch2.png',
  width: '100px'
})

addGrape({
  top: '980px',
  left: '190px',
  infoElementId: 'third_grape',
  imgSrc: './grapebunch3.png',
  width: '110px'
})

addGrape({
  top: '1300px',
  left: '275px',
  infoElementId: 'fourth_grape',
  imgSrc: './grape.png',
  width: '50px'
})

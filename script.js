const grapeRef = document.querySelector('.grape-container')
const sceneRef = document.querySelector('.scene-container')

function addGrape({
  top, left
}) {
  const newGrape = grapeRef.cloneNode(true)
  newGrape.style.top = top
  newGrape.style.left = left
  sceneRef.appendChild(newGrape)
}

addGrape({
  top: '287px',
  left: '226px'
})

const grapeRef = document.querySelector('.grape-container')
const sceneRef = document.querySelector('.scene-container')
const infoRef = document.querySelector('.info-container')

function addGrape({
  top, left, info
}) {
  const newGrape = grapeRef.cloneNode(true)

  newGrape.style.top = top
  newGrape.style.left = left
  newGrape.hidden = false

  newGrape.onclick = (e) => {
    infoRef.querySelector('.info').innerHTML = info
    infoRef.style.left = e.pageX+'px'
    infoRef.style.top = e.pageY+'px'
    infoRef.hidden = false
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

/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


// COULD HAVE RAN THE HELPER METHOD AT THE BOTTOM OF THE DOCUMENT
// STEP 1 - FIND/STORE THE ELEMENT
// STEP 2 - addEventListner with click as the event and anonymous function defined with the conditional

/***** Deliverable 2 *****/
header.style.color = "green"


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const profileImg = document.querySelector("#profile img")
profileImg.src = traveler.photo
profileImg.alt = traveler.name

const profileH2 = document.querySelector("#profile h2")
profileH2.textContent = traveler.name

const profileEm = document.querySelector("#profile em")
profileEm.textContent = traveler.nickname

const likes = document.querySelector("#profile .likes")
likes.textContent = `${traveler.likes} Likes`


/***** Deliverable 4 *****/
function renderAnimalSightingPost (animalObject) {
    const li = document.createElement("li")
    li.dataset.id = animalObject.id

    const p = document.createElement("p")
    p.textContent = animalObject.description

    const img = document.createElement("img")
    img.src = animalObject.photo
    img.alt = animalObject.species

    const a = document.createElement("a")
    a.href = animalObject.link
    a.target = "_blank"
    a.textContent = `Here's a video about the ${animalObject.species} species!`

    li.append(p, img, a)

    const animalsUl = document.querySelector("#animals")
    animalsUl.append(li)
}

traveler.animalSightings.forEach(function (animalSightinObject) {
    renderAnimalSightingPost(animalSightinObject)
})

/***** Deliverable 5 *****/
const animalToRemove = document.querySelector("[data-id='3'")
animalToRemove.remove()

/***** End of Starter Code *****/
/************************** EVENTS JS MINI CHALLENGE ******************************/

/***** Deliverable 1 *****/
function toggleColor(element) {
    if (element.style.color === "green") {
        element.style.color = "black"
    } else {
        element.style.color = "green"
    }
}

header.addEventListener('click', function(){
    if (header.style.color === 'black'){
        header.style.color = 'red'
    } else {
        header.style.color = 'black'
    }
    
})
// didnt see toggleColor() when I originally wrote the function uptop. I'd basically take
// that and send it into the listener method...please verify if the following would be correct.
// addEventListner ('click',toggleColor)
/***** Deliverable 2 *****/

let likesElement = document.querySelector("#profile > p")
let buttonElement = document.querySelector("#profile > button")
buttonElement.addEventListener('click', function() {
    likesInt = parseInt(likesElement.innerText.split(" ")[0],10)
    likesInt += 1
    likesElement.innerText = `${likesInt} Likes`
})

/***** Deliverable 3 *****/

let formElement = document.querySelector("#new-animal-sighting-form")
let sightingsList = document.querySelector("#animals")

formElement.addEventListener("submit", function(event) {
     event.preventDefault()

     let speciesInput = event.target.species.value
     let linkInput = event.target.link.value
     let photoInput = event.target.photo.value
     let descriptionInput = event.target.description.value
     let animalId = sightingsList.children.length + 1

     infoArray = [speciesInput, linkInput, photoInput, descriptionInput, animalId]
     singleSighting(infoArray)
})

function singleSighting(object) {

    let sightingInstance =  document.createElement('li')

    sightingInstance.innerHTML = `<li data-id=${infoArray[4]}>
    <p>${infoArray[3]}</p>
    <img src="${infoArray[2]}" alt="animal sighting species"/>
    <a href="${infoArray[1]}" target="_blank">Here's a video about the ${infoArray[0]} species!</a>
  </li>`

  sightingsList.append(sightingInstance)
}
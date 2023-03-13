// Challenge 1

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch(imgUrl)
    .then((resp) => resp.json())
    .then((data) => {
        data.message.forEach(element => {
            let imgContainer = document.getElementById("dog-image-container")
            img = document.createElement("img")
            img.src = `${element}`
            imgContainer.appendChild(img)
        })
    })
    .catch((error) => console.log(error));


// Challenge 2

const breedUrl = "https://dog.ceo/api/breeds/list/all";

let breedList = document.getElementById("dog-breeds")

function renderBreeds (breed) {
    let li = document.createElement("li")
            li.textContent = breed
            breedList.appendChild(li)

            // Challenge 3

            li.addEventListener("click", (e) => {
                li.style.color = "purple"
            })
        }

fetch(breedUrl) 
    .then(resp => resp.json())
    .then(data => {

        // Challenge 4
        
        let breedArray = Object.keys(data.message)
        breedArray.forEach(renderBreeds)

            let letter = document.querySelector("select")
            letter.addEventListener("change", (e) => {
                let filteredBreeds = breedArray.filter((breed) => {
                    return e.target.value === breed[0]
                })

                breedList.replaceChildren()
                filteredBreeds.forEach(renderBreeds)
            })
        })
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

fetch(breedUrl) 
    .then(resp => resp.json())
    .then(data => {
        let breedObject = data.message
        console.log(breedObject)
        for (let key in breedObject) {
            let li = document.createElement("li")
            li.textContent = key
            let breedList = document.getElementById("dog-breeds")
            breedList.appendChild(li)
        }
    })
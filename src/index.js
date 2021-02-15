console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    let allBreeds = []
        const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
        const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const dogImgContainer = document.getElementById('dog-image-container')
    const dogBreedUl = document.getElementById('dog-breeds')
    const breedDropdown = document.getElementById('breed-dropdown')

    dogBreedUl.addEventListener('click', function(event) {
        event.target.style.color = 'red'
    })

    breedDropdown.addEventListener('change', function(event) {
        const letter = event.target.value
        const filteredBreeds = allBreeds.filter((breed) => breed.startsWith(letter))
        dogBreedUl.innerHTML = createDogList(filteredBreeds)
    })


fetch(imgUrl, {method: 'GET'})
.then((response) => {
    console.log(response)
    if (response.ok) {
        return response.json()
    }
})
.then((dogImgData) => {
    dogImgData.message.forEach(function(imgUrl){
        dogImgContainer.innerHTML += `<img src="${imgUrl}">`
    })
    const dogImgString = dogImgData.message.map((imgUrl) => {
        return `<img src="${imgUrl}">`
    })
})

fetch(breedUrl, {method: 'GET'})
.then((resp) => resp.json())
.then((breedData) => {
    allBreeds = Object.keys(breedData.message)
    console.log(allBreeds)
    dogBreedUl.innerHTNL = createDogList(allBreeds)
})
})

function createDogList(dogBreedArray) {
    const dogLiStringArray = dogBreedArray.map(function(breed) {
        return `<li>${(breed)}</li>`
    })
    return dogLiStringArray.join(' ')
}

const formSearch = document.querySelector('form')
const searchCP = document.querySelector('#searchCP')
let codePostal
formSearch.addEventListener('submit', (e) => {
    e.preventDefault()
    codePostal = searchCP.value
    console.log(codePostal)
        fetch("https://apicarto.ign.fr/api/codes-postaux/communes/" + codePostal)
        .then(response => response.json())
        .then(data => {
            console.log(data[0].codeCommune);
        }) 
})

function createElement(){
    const divContainer = document.createElement('div')
    divContainer.classList.add('divContainer')
    
    const codePostalItem = document.createElement('p')
    codePostalItem.classList.add('codePostalItem')
    
    const codeCommunelItem = document.createElement('p')
    codeCommunelItem.classList.add('codeCommunelItem')
    
    
}



const codePostalItem = document.createElement
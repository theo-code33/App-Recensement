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

function createElement(codeCommune, codePostal, commune){
    const divContainer = document.createElement('div')
    divContainer.classList.add('divContainer')
    
    const codePostalItem = document.createElement('p')
    codePostalItem.classList.add('codePostalItem')
    codePostalItem.textContent = codePostal
    
    const codeCommuneItem = document.createElement('p')
    codeCommuneItem.classList.add('codeCommunelItem')
    codeCommuneItem.textContent = codeCommune
    
    const communelItem = document.createElement('p')
    communelItem.classList.add('communelItem')
    communelItem.textContent = commune
    
    divContainer.append(codePostalItem, codeCommuneItem, communelItem)
}



const codePostalItem = document.createElement
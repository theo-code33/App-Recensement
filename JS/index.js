const descriptionTown = document.querySelector('.description-town')
const formSearch = document.querySelector('form')
const searchCP = document.querySelector('#searchCP')
const informationTown = document.querySelector('.information-town')
let codePostal
let statusCodePostal
formSearch.addEventListener('submit', (e) => {
    e.preventDefault()
    const divContainer = document.querySelectorAll('.divContainer')
    divContainer.forEach(item => {
        descriptionTown.removeChild(item)
    });
    codePostal = parseInt(searchCP.value)
    let codePostalString = String(codePostal)

    if(codePostalString.length == 5){
        fetch('https://happyapi.fr/api/codePostaux?codePostal=' + codePostalString)
        .then(response => response.json())
        .then(data => {
            statusCodePostal = data.happyApiStatus
            if(statusCodePostal == '200 OK'){
                fetch("https://apicarto.ign.fr/api/codes-postaux/communes/" + codePostalString)
                .then(response => response.json())
                .then(data => {
                    informationTown.textContent = 'Voici les villes trouvé'
                    data.forEach( item => {
                        let town = item.libelleAcheminement
                        let codeTown = item.codeCommune
                        let postalCode = item.codePostal
                        createElement(codeTown, postalCode, town)
                    });
                })
            
            }else if(statusCodePostal == '404 Not Found'){
                informationTown.textContent = 'Code postal inconnu'
            }
        })
    }else{
        informationTown.textContent = 'Aucun code postal renseigné'
    }
})

function createElement(codeTown, postalCode, town){
    const divContainer = document.createElement('div')
    divContainer.classList.add('divContainer')

    const townlItem = document.createElement('p')
    townlItem.classList.add('townlItem')
    townlItem.textContent = town
    
    const postalCodeItem = document.createElement('p')
    postalCodeItem.classList.add('postalCodeItem')
    postalCodeItem.textContent = postalCode
    
    const codeTownItem = document.createElement('p')
    codeTownItem.classList.add('codeTownlItem')
    codeTownItem.textContent = codeTown
    
    
    
    divContainer.append(townlItem, postalCodeItem, codeTownItem)
    descriptionTown.append(divContainer)
}
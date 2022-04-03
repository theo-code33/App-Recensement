const formSearch = document.querySelector('form')
const searchCP = document.querySelector('#searchCP')
const informationCity = document.querySelector('.information-city')
console.log(informationCity);
let codePostal
let statusCodePostal
formSearch.addEventListener('submit', (e) => {
    e.preventDefault()
    codePostal = searchCP.value
    console.log(codePostal)

    if(codePostal.length >= 5){
        fetch('https://happyapi.fr/api/codePostaux?codePostal=' + codePostal)
        .then(response => response.json())
        .then(data => {
            statusCodePostal = data.happyApiStatus
            console.log(statusCodePostal);
            if(statusCodePostal == '200 OK'){
                fetch("https://apicarto.ign.fr/api/codes-postaux/communes/" + codePostal)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    console.log(data[0].codeCommune);
                    
                })
            
            }else if(statusCodePostal == '404 Not Found'){
                document.body.style.backgroundColor = 'red'
            }
        })
        
        
    }
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
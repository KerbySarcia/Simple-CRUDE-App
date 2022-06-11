const nameData = document.getElementById('name-input')
const addressData = document.getElementById('address-input')
const ageData = document.getElementById('age-input')
const genderData = document.getElementById('gender-input')
const modalContainer = document.querySelector('.modal-container') 

const nameDataModal = document.getElementById('name-input-modal')
const addressDataModal = document.getElementById('address-input-modal')
const ageDataModal = document.getElementById('age-input-modal')
const genderDataModal = document.getElementById('gender-input-modal')

let currentTr = ''

let addData = () =>{

    if(nameData.value == '' || addressData.value == '' || ageData.value == '' || genderData.value == '' )
    {
        alert('Fill out all bro')
    }else{
        const tr = document.createElement('tr')
        tr.innerHTML = createData()
        tr.addEventListener('click', e => updateData(e))
        document.querySelector('.table-section table').appendChild(tr)
    
        function createData()
        {
            return`
                    <td>${nameData.value}</td>
                    <td>${ageData.value}</td>
                    <td>${addressData.value}</td>
                    <td>${genderData.value}</td>
                   `
        }
    
        resetModal()
    }

}

let updateData = (e) =>{
    currentTr = e.currentTarget
    modalContainer.classList.add('show-modal')
    
    nameDataModal.value = e.currentTarget.children[0].textContent
    ageDataModal.value = e.currentTarget.children[1].textContent
    addressDataModal.value = e.currentTarget.children[2].textContent
    genderDataModal.value = e.currentTarget.children[3].textContent
}

let updateInfo = () => {
    currentTr.children[0].textContent = nameDataModal.value 
    currentTr.children[1].textContent = ageDataModal.value
    currentTr.children[2].textContent = addressDataModal.value
    currentTr.children[3].textContent = genderDataModal.value
    modalContainer.classList.remove('show-modal')
    resetModal()
}

let deleteData = () => {
    currentTr.remove()
    modalContainer.classList.remove('show-modal')
}

function resetModal()
{
    nameData.value = ''
    ageData.value = ''
    addressData.value = ''
    genderData.value = ''
}


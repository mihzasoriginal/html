const modal = document.querySelector('.modal');
const modalWindow = document.querySelector('.modal-wrapper');

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.modalButton').forEach(button => button.addEventListener('click', openModal));

    modal.addEventListener('click', function(e){
        if(modalWindow.contains(e.target)){
            e.stopPropagation();
        } else {
            document.body.classList.remove('hidden');
            modal.classList.toggle('is-active-modal');
        }
    })
});

function openModal() {
    modal.classList.toggle('is-active-modal');
    document.body.classList.add('hidden');   
}
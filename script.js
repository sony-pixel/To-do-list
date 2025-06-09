const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');


function addTask() {
  if (inputBox.value === '') {
    alert('You must write something')
  } else {
    const name = document.createElement('li');
    name.innerHTML = inputBox.value;
    listContainer.appendChild(name);
    const deleteButton = document.createElement('span');
    deleteButton.innerHTML = '\u00d7';
    name.appendChild(deleteButton);
  }
  inputBox.value = '';
  saveData();
}

listContainer.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveData();
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
 localStorage.setItem('data', listContainer.innerHTML);

}
function renderData() {
  listContainer.innerHTML = localStorage.getItem('data');
}
renderData();
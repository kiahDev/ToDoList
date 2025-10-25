const taskContainer = document.querySelector('.task');
const inputTask = document.querySelector('.input');
const addTask = document.querySelector('.enter');

addTask.addEventListener('click', function() {

    if (inputTask.value === '') {
        alert('Enter a task first.');
    } else {

        let newD = document.createElement('div');
        let newP = document.createElement('p');
        let newDelBtn = document.createElement('button');
        let newCheckbox = document.createElement('input');
        
        newCheckbox.type = 'checkbox';

        newDelBtn.textContent = 'Delete';
        newP.textContent = inputTask.value;

        newD.append(newCheckbox ,newP, newDelBtn);

        taskContainer.appendChild(newD);

        inputTask.value = '';

        newD.style.display = 'flex';
        newD.style.gap = '15px';
        newD.style.alignItems = 'center';

        newDelBtn.style.marginLeft = '130px'

        newP.style.maxWidth = '200px';
        newP.style.textOverflow = 'ellipsis';
        newP.style.overflow = 'hidden';
        newP.style.whiteSpace = 'nowrap';

        newCheckbox.addEventListener('change', function() {
            
            if (newCheckbox.checked) {
                newP.style.textDecoration = 'line-through';
            } else {
                newP.style.textDecoration = 'none';
            }

        })
    }
});
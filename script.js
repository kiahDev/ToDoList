const addtask = document.querySelector('.enter');
const task = document.querySelector('.task');
const input = document.querySelector('.input');

addtask.addEventListener('click', function() {
    if (input.value === '') {
        alert('Enter a task first');
    } else {
        
        const newD = document.createElement('div');
        const newP = document.createElement('p');
        const delbtn = document.createElement('button');

        delbtn.textContent = 'Delete';

        newP.textContent = input.value;
        newD.append(newP, delbtn);

        task.append(newD);
        input.value = '';

        delbtn.addEventListener('click', function() {
            newD.remove();
        })

        newP.style.maxWidth = '200px';
        newP.style.overflow = 'hidden';
        newP.style.textOverflow = 'ellipsis'

        newD.style.display = 'flex';
        newD.style.justifyContent = 'space-between';
        newD.style.alignItems = 'center';

    }
});
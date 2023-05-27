async function handleFormSubmit(e) {
    e.preventDefault();
    disable(textarea);
    disable(button);
    show(loadingMessage);
    hide(errorMessage);

    try {
        await submitForm(textarea.value);     
        show(successMessage);
        hide(form);
    } catch (err) {
        show(errorMessage);
        errorMessage.textContent = err.message;
    } finally {
        hide(loadingMessage);
        enable(textarea);
        enable(button);
    }
}

function handleTextAreaChange() {
    if (textarea.value.length === 0) {
        disable(button);
    } else {
        enable(button);
    }
}

function enable(el) {
    el.disabled = false;
}

function disable(el) {
    el.disabled = true;
}

function show(el) {
    el.style.display = '';
}

function hide(el) {
    el.style.display = 'none';
}

function submitForm(answer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (answer.toLowerCase() == 'istanbul') {
                resolve();
            } else {
                reject(new Error('Good guess but a wrong answer. Try again!'));
            }
        }, 1500);
    });
}

// get all the references
let form = document.getElementById('form');
let textarea = document.getElementById('textarea');
let button = document.getElementById('button');
let loadingMessage = document.getElementById('loading');
let errorMessage = document.getElementById('error');
let successMessage = document.getElementById('success');

form.onsubmit = handleFormSubmit;
textarea.oninput = handleTextAreaChange;
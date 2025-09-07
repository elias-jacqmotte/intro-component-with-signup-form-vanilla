const form = document.querySelectorAll('.user-form input');
const submit = document.getElementById('submit');

submit.addEventListener('click', (event) => {
    // Make sure it doesn't do a 
    event.preventDefault();

    // Iterate over each input form
    form.forEach(element => {
        if ( false == element.checkValidity()) {
            // if the element is not valid, required statement on HTML, than the style needs to be changed.
            console.log('Field not valid:', element.placeholder)
            element.style.borderColor = 'hsl(var(--clr-red-400))';
            element.style.borderWidth = '2px';
            element.nextElementSibling.nextElementSibling.style.display = "block";
            element.nextElementSibling.nextElementSibling.textContent = `${element.placeholder} cannot be empty`

            // if the element is email and has some characters in it: change the textcontent
            if ( element.name == "email" && element.value.length > 0 ) {
                element.style.color = 'hsl(var(--clr-red-400))'
                element.style.fontWeight = '600'
                element.nextElementSibling.nextElementSibling.textContent = `Looks like this is not an email`
            }

            // if the element is password and has some characters in it: change the textcontent
            if (element.name == "password" && element.value.length > 0 ) {
                element.style.color = 'hsl(var(--clr-red-400))'
                element.style.fontWeight = '600'
                element.nextElementSibling.nextElementSibling.textContent = `${element.placeholder} must be atleast 8 characters`
            }

        } else {
            element.style.borderColor = '';
            element.style.borderWidth = '';
            element.style.color = '';
            element.style.fontWeight = '';
            element.nextElementSibling.nextElementSibling.style.display = '';
        }
    })
})
document.getElementById('btnsubmit').addEventListener('click', () => {
    
    const nom = document.getElementById('name').value;
    const ap = document.getElementById('surname').value;
    const fechaDeNac = document.getElementById('date').value;

    const data = {
        name: nom,
        surname: ap,
        fechaDeNacimiento: fechaDeNac //no esta en el endpoint igual
    };

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    .then(response => {
        if (response.ok){
            console.log('Los datos han sido enviados.');
        } else {
            console.error('Error al enviar datos.');
        }
    })

    .catch(error => {
        console.error('Error al enviar datos.', error);
    });
});

document.getElementById('btnsubmit').addEventListener('click', () => {
    const nom = document.getElementById('name').value;
    const ap = document.getElementById('surname').value;
    const fecha = document.getElementById('date').value;

    const data = {
        name: nom,
        surname: ap,
        fechaDeNacimiento: fecha //no esta en el endpoint igual
    };

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(responseData => {
        console.log("Success:", responseData);
    })
    .catch(error => {
        console.error("Error:", error);
    });
});

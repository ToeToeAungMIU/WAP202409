document.getElementById('btnGet').onclick = function () {
    fetch('http://localhost:3000/books')
        .then(response => response.json())
        .then(data => {console.log(data)});
}

document.getElementById('btnCreate').onclick = async function () {
    try {
        const response = await fetch('http://localhost:3000/books', {
            method: 'POST',
            body: JSON.stringify({
                "id": "",
                "title": ".Net Framework Essentials",
                "ISBN": "ISBN000000121",
                "publishedDate": "2024-09-01",
                "description": ".Net Framework Essentials"
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
      
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
};


document.getElementById('btnUpdate').onclick = function () {
    const bookId = '5e76c91a-9e1a-403a-ba11-da718fd24beb'; 

    fetch(`http://localhost:3000/books/${bookId}`, {
        method: 'PUT',
        body: JSON.stringify({
            "title": ".Net Framework Essentials",
            "ISBN": "Updated ISBN00222",
            "publishedDate": "2024-10-01",
            "description": "Updated description of the book"
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(result => {
        console.log('Updated book:', result);
    })
    .catch(error => console.error('Error:', error));
};


document.getElementById('btnDelete').onclick = function () {
    const bookId = '5e76c91a-9e1a-403a-ba11-da718fd24beb'; 
    fetch(`http://localhost:3000/books/${bookId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.status === 204) {
            console.log('Book deleted successfully');
        } else {
            console.error('Failed to delete book');
        }
    })
    .catch(error => console.error('Error:', error));
};

document.getElementById('btn1').onclick = function () {
    fetch('http://localhost:3000/books')
        .then(response => response.json())
        .then(data => {console.log(data)});
}

// document.getElementById('btn2').onclick = async function () {
//     const response = await fetch('http://localhost:3000/books');
//     const result = await response.json();
//     console.log(result);
// }

document.getElementById('btn3').onclick = async () => {
    const response = await fetch('http://localhost:3000/books', {
        method: 'POST',
        body: JSON.stringify({
            "id" : "",
            "title": "Book1",
            "ISBN" :"ISBN00222",
            "publishedDate": "2024-09-01",
            "description": "Goone with the wind --"
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const result = await response.json();
    console.log(result);
}
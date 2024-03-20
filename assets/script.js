document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("getBooks").addEventListener("click", function() {
        fetch('/books', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Books:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    document.getElementById("addBook").addEventListener("click", function() {
        const newBook = {
            title: 'New Book',
            author: 'New Author'
        };

        fetch('/books', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBook)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Response:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    // Similarly, add event listeners and fetch requests for other endpoints
});

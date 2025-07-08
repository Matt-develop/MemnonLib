// Simula comportamento do React - alternar entre visualizações
document.getElementById('toggleView').addEventListener('click', function() {
    const acervo = document.getElementById('acervo');
    if (acervo.classList.contains('grid-cols-1')) {
        acervo.classList.remove('grid-cols-1');
        acervo.classList.add('grid-cols-2', 'lg:grid-cols-3', 'xl:grid-cols-4');
    } else {
        acervo.classList.remove('grid-cols-2', 'lg:grid-cols-3', 'xl:grid-cols-4');
        acervo.classList.add('grid-cols-1');
    }
});

// Mostrar detalhes do livro (simulando roteamento do React)
function showBookDetail(bookId) {
    
    // Carrega dados do livro (na implementação real, isso viria de uma API)
    const bookData = {
        'book1': {
            title: 'Orgulho e Preconceito',
            author: 'Jane Austen',
            description: '"Orgulho e Preconceito" é um romance da escritora britânica Jane Austen, publicado pela primeira vez em 1813. A história gira em torno de Elizabeth Bennet, uma jovem inteligente e espirituosa, e Mr. Darcy, um homem rico e reservado. A obra explora temas como casamento, moral, educação e hierarquia social na Inglaterra do século XIX, sendo considerada uma das obras mais importantes da literatura inglesa.',
            image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5593f90e-aa23-4db9-819d-dc1138af8e30.png',
            status: 'Disponível',
            rating: '★★★★☆',
            ratingsCount: '(124)',
            isbn: '978-8535914846',
            publisher: 'Penguin',
            year: '1813',
            pages: '424',
            language: 'Português',
            category: 'Literatura'
        }
    };
    
    // Preenche o modal com os dados do livro
    const book = bookData[bookId];
    document.getElementById('modalBookTitle').textContent = book.title;
    document.getElementById('modalBookAuthor').textContent = book.author;
    document.getElementById('modalBookDescription').textContent = book.description;
    document.getElementById('modalBookImage').src = book.image;
    document.getElementById('modalBookImage').alt = `Capa do livro ${book.title} - Imagem detalhada`;
    document.getElementById('modalBookStatus').textContent = book.status;
    document.getElementById('modalBookRating').textContent = book.rating;
    document.getElementById('modalBookRatingsCount').textContent = book.ratingsCount;
    document.getElementById('modalBookISBN').textContent = book.isbn;
    document.getElementById('modalBookPublisher').textContent = book.publisher;
    document.getElementById('modalBookYear').textContent = book.year;
    document.getElementById('modalBookPages').textContent = book.pages;
    document.getElementById('modalBookLanguage').textContent = book.language;
    document.getElementById('modalBookCategory').textContent = book.category;
    
    // Mostra o modal
    document.getElementById('bookModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Esconder detalhes do livro
function hideBookDetail() {
    document.getElementById('bookModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Simula a busca (na implementação real, isso chamaria uma API)
document.querySelector('header button').addEventListener('click', function() {
    const searchTerm = document.querySelector('header input').value;
    alert(`Buscando por: ${searchTerm}`);
});
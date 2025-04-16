function loadContent(page) {
    const contentContainer = document.getElementById('content');
    
    // Update class active
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if(link.dataset.page === page) link.classList.add('active');
    });

    // Memuat konten dari file eksternal
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(html => {
            contentContainer.innerHTML = html;
            history.pushState({page}, null, `?page=${page}`);
        })
        .catch(error => {
            contentContainer.innerHTML = '<p>Halaman tidak ditemukan</p>';
        });
}
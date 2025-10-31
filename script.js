// Agenda Semanal Moderna - JavaScript
console.log('Agenda Semanal Moderna - Inicializada');

// Navegação por Abas
const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active de todas as abas
        tabs.forEach(t => t.classList.remove('active'));
        
        // Adiciona active na aba clicada
        tab.classList.add('active');
        
        // Feedback visual
        console.log(`Aba selecionada: ${tab.dataset.tab}`);
    });
});

// Dias da Semana
const days = document.querySelectorAll('.day');

days.forEach(day => {
    day.addEventListener('click', () => {
        // Toggle da classe active
        day.classList.toggle('active');
        
        // Feedback visual
        const isActive = day.classList.contains('active');
        console.log(`Dia ${day.dataset.day}: ${isActive ? 'selecionado' : 'desmarcado'}`);
    });
});

// Busca
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm) {
        console.log(`Buscando por: ${searchTerm}`);
        // Aqui você pode adicionar a lógica de busca
        alert(`Buscando por: ${searchTerm}`);
    } else {
        alert('Digite algo para buscar!');
    }
});

// Buscar ao pressionar Enter
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchButton.click();
    }
});

// Ícone de usuário
const userIcon = document.querySelector('.user-icon');

userIcon.addEventListener('click', () => {
    console.log('Perfil do usuário clicado');
    alert('Perfil do usuário');
});
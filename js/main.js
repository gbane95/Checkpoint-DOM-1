document.querySelectorAll('.card').forEach(item => {
    const quantiteElement = item.querySelector('.item-quantite');
    const prixElement = item.querySelector('.item-prix');
    const totalElement = document.querySelector('#total-prix');

    item.querySelector('.plus').addEventListener('click', () => {
        let quantite = parseInt(quantiteElement.textContent);
        quantite++;
        quantiteElement.textContent = quantite;
        updateTotal();
    });

    item.querySelector('.moins').addEventListener('click', () => {
        let quantite = parseInt(quantiteElement.textContent);
        if (quantite > 1) {
            quantite--;
            quantiteElement.textContent = quantite;
            updateTotal();
        }
    });

    item.querySelector('.supprime').addEventListener('click', () => {
        item.remove();
        updateTotal();
    });

    item.querySelector('.like').addEventListener('click', () => {
        item.classList.toggle('liked');
    });

    // Fonction pour mettre à jour le total
    function updateTotal() {
        let total = 0;
        document.querySelectorAll('.card').forEach(item => {
            const prix = parseFloat(item.querySelector('.item-prix').textContent);
            const quantite = parseInt(item.querySelector('.item-quantite').textContent);
            total += prix * quantite;
        });
        totalElement.textContent = total.toFixed(3); // Format en deux décimales
    }
});

// Initialiser le total lors du chargement de la page
updateTotal();

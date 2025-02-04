document.addEventListener('DOMContentLoaded', function() {
    const calculatorForm = document.getElementById('calculator-form');
    if (calculatorForm) {
        calculatorForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const area = parseFloat(document.getElementById('area').value);
            const serviceType = document.getElementById('service-type').value;
            const frequency = document.getElementById('frequency').value;
            
            if (isNaN(area) || area <= 0) {
                alert('Por favor, insira uma área válida.');
                return;
            }
            
            let costPerSquareMeter;
            switch(serviceType) {
                case 'paisagismo':
                    costPerSquareMeter = 50;
                    break;
                case 'manutencao':
                    costPerSquareMeter = 30;
                    break;
                case 'decoracao':
                    costPerSquareMeter = 40;
                    break;
                default:
                    costPerSquareMeter = 0;
            }
            
            let frequencyMultiplier;
            switch(frequency) {
                case 'semanal':
                    frequencyMultiplier = 4;
                    break;
                case 'mensal':
                    frequencyMultiplier = 1.35;
                    break;
                case 'unica':
                    frequencyMultiplier = 1;
                    break;
                default:
                    frequencyMultiplier = 1;
            }
            
            const totalCost = area * costPerSquareMeter * frequencyMultiplier;
            document.getElementById('result').textContent = `O custo estimado é R$ ${totalCost.toFixed(2)}`;
        });
    } else {
        console.error('Elemento calculator-form não encontrado.');
    }

    const themeToggleBtn = document.getElementById('theme-toggle');

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});

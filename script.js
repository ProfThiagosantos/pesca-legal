document.addEventListener("DOMContentLoaded", function() {
    const monthSelect = document.getElementById("month-select");
    const calendarDays = document.getElementById("calendar-days");

    // Define o mês atual na caixinha de seleção ao carregar o site
    const currentMonth = new Date().getMonth();
    if(currentMonth <= 5) { // Limite do nosso select fictício de Jan a Jun
        monthSelect.value = currentMonth;
    } else {
        monthSelect.value = 0;
    }

    function renderCalendar(month) {
        calendarDays.innerHTML = ""; // Limpa calendário anterior
        
        // Número de dias simulados para simplificação visual
        const totalDays = 30; 

        for (let day = 1; day <= totalDays; day++) {
            const dayElement = document.createElement("div");
            dayElement.classList.add("calendar-day");
            
            // Lógica fictícia baseada em ciclos lunares simulados por algoritmo simples
            // Altera os dias bons/ruins dependendo do mês escolhido
            const cycleFactor = (day + parseInt(month)) % 7;
            
            if (cycleFactor === 0 || cycleFactor === 1) {
                dayElement.classList.add("excelent");
                dayElement.title = "Dia excelente! Lua ideal e peixe ativo.";
            } else if (cycleFactor === 2 || cycleFactor === 3 || cycleFactor === 4) {
                dayElement.classList.add("good");
                dayElement.title = "Dia bom. Boa atividade no início da manhã.";
            } else {
                dayElement.classList.add("bad");
                dayElement.title = "Dia fraco. Maré ou lua desfavorável.";
            }

            dayElement.innerHTML = `<span>${day}</span>`;
            calendarDays.appendChild(dayElement);
        }
    }

    // Escuta a mudança de mês no select
    monthSelect.addEventListener("change", function(e) {
        renderCalendar(e.target.value);
    });

    // Inicia o calendário com o valor padrão do select
    renderCalendar(monthSelect.value);
});

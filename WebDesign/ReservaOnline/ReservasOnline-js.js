document.addEventListener('DOMContentLoaded', () => {
    const calendarMonthYear = document.getElementById('calendar-month-year');
    const calendarDates = document.getElementById('calendar-dates');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    function renderCalendar(month, year) {
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();
        const prevLastDate = new Date(year, month, 0).getDate();

        calendarMonthYear.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;

        calendarDates.innerHTML = '';
        let days = '';

        for (let x = firstDay; x > 0; x--) {
            days += `<div class="date empty">${prevLastDate - x + 1}</div>`;
        }

        for (let i = 1; i <= lastDate; i++) {
            if (i === 4) { // Example: Marking the 4th day with appointments
                days += `<div class="date" data-appointments="4 Patients">${i}</div>`;
            } else {
                days += `<div class="date">${i}</div>`;
            }
        }

        const totalSlots = 42; // 6 weeks * 7 days
        const nextDays = totalSlots - (firstDay + lastDate);
        for (let j = 1; j <= nextDays; j++) {
            days += `<div class="date empty">${j}</div>`;
        }

        calendarDates.innerHTML = days;
    }

    renderCalendar(currentMonth, currentYear);

    prevMonthBtn.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    });

    nextMonthBtn.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
    });
});

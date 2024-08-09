document.addEventListener('DOMContentLoaded', function () {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const currentDriverName = currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : 'Unknown Driver';

    function searchRides() {
        const from = document.getElementById('from').value.toLowerCase();
        const to = document.getElementById('to').value.toLowerCase();
        const selectedDays = Array.from(document.querySelectorAll('input[name="days"]:checked')).map(el => el.value);

        const rides = JSON.parse(localStorage.getItem('rides')) || [];

        const filteredRides = rides.filter(ride => {
            const rideFrom = ride.departure.toLowerCase();
            const rideTo = ride.arrival.toLowerCase();
            const rideDays = ride.days;

            const matchFrom = !from || rideFrom.includes(from);
            const matchTo = !to || rideTo.includes(to);
            const matchDays = selectedDays.some(day => rideDays.includes(day));

            return matchFrom && matchTo && matchDays;
        });

        const tbody = document.getElementById('ridesTableBody');
        tbody.innerHTML = '';

        if (filteredRides.length > 0) {
            filteredRides.forEach(ride => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td data-label="Driver">${currentDriverName}</td>
                    <td data-label="From">${ride.departure}</td>
                    <td data-label="To">${ride.arrival}</td>
                    <td data-label="Seats">${ride.seats}</td>
                    <td data-label="Car">${ride.make} ${ride.model}</td>
                    <td data-label="Fee">${ride.fee > 0 ? '$' + ride.fee : 'Free'}</td>
                    <td data-label="Actions"><a href="/proyecto2/Booking">Request</a></td>
                `;
                tbody.appendChild(row);
            });
        } else {
            tbody.innerHTML = '<tr><td colspan="7">No rides found matching your criteria.</td></tr>';
        }
    }

    document.getElementById('btn').addEventListener('click', function(event) {
        event.preventDefault();
        searchRides();
    });

});

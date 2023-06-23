var map = L.map('map').setView([47.54977112416937, -122.25737886114977], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([47.54977112416937, -122.25737886114977]).addTo(map)
		.bindPopup("Juju's Water Day<br> Where we will be swimming at today")
		.openPopup();	
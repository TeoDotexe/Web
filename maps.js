// maps.js

// Função para inicializar o mapa
function initMap() {
    // Coordenadas da sede da empresa (exemplo)
    const companyLocation = { lat: -23.5505, lng: -46.6333 }; // São Paulo, Brasil

    // Opções do mapa
    const mapOptions = {
        center: companyLocation,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Inicializar o mapa
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Adicionar marcador para a sede da empresa
    const marker = new google.maps.Marker({
        position: companyLocation,
        map: map,
        title: "Sede da Empresa"
    });
}

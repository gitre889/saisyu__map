// JavaScript

const loading = document.getElementById('loading');

function animation(){
  loading.classList.add('loaded');
}
//window.addEventListener('load', animation);

// 指定秒後に動作させる
window.setTimeout( animation, 1500 );

const map = L.map('map').setView([33.580889,130.419067], 17);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



const whiteIcon = L.icon({
    iconUrl: 'images/ico.png',
    shadowUrl: 'images/ico_shadow.png',
  
  iconSize:     [40, 40], // size of the icon
  shadowSize:   [40, 40], // size of the shadow
  iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
  shadowAnchor: [20, 40],  // the same for the shadow
  popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
  });    

  L.marker([33.5798863, 130.4165097], { icon: whiteIcon }).addTo(map).bindPopup('<br><img src="images/IMG_7811.jpeg" alt="img">');
  L.marker([33.5802878, 130.4161256], { icon: whiteIcon }).addTo(map).bindPopup('<br><img src="images/IMG_7810.jpeg" alt="img">');
  L.marker([33.578885, 130.4149772], { icon: whiteIcon }).addTo(map).bindPopup('<br><img src="images/IMG_7808.jpeg" alt="img">');
  L.marker([33.580478, 130.4166196], { icon: whiteIcon }).addTo(map).bindPopup('<br><img src="images/IMG_6581.jpeg" alt="img">');
  L.marker([33.5797461, 130.4143492], { icon: whiteIcon }).addTo(map).bindPopup('<br><img src="images/IMG_7812.jpeg" alt="img">');
  L.marker([33.5791847, 130.415044], { icon: whiteIcon }).addTo(map).bindPopup('<br><img src="images/IMG_7809.jpeg" alt="img">');
  L.marker([33.5791007, 130.4130037], { icon: whiteIcon }).addTo(map).bindPopup('<br><img src="images/IMG_7807.jpeg" alt="img">');
  L.marker([33.5793241, 130.4159743], { icon: whiteIcon }).addTo(map).bindPopup('<br><img src="images/IMG_7806.jpeg" alt="img">');
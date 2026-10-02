// ambil semua elemen ID pada html
const redLight = document.getElementById('red-light');
const yellowLight = document.getElementById('yellow-light');
const greenLight = document.getElementById('green-light');

const redButton = document.getElementById('red-button');
const yellowButton = document.getElementById('yellow-button');
const greenButton = document.getElementById('green-button');
const lights = document.getElementById('all-button');

// tambahkan fungsi untuk mengubah warna lampu
function setLights(red, yellow, green) {
    redLight.style.backgroundColor = red;
    yellowLight.style.backgroundColor = yellow;
    greenLight.style.backgroundColor = green;
}

// baut event listener untuk setiap tombol
redButton.addEventListener('click', () => setLights('red', '#5e5d5d', '#5e5d5d'));
yellowButton.addEventListener('click', () => setLights('#5e5d5d', 'yellow', '#5e5d5d'));
greenButton.addEventListener('click', () => setLights('#5e5d5d', '#5e5d5d', 'green'));

// buat event listener untuk tombol "Turn On All" dan "Turn Off All"
lights.addEventListener('click', () => {
    if (lights.textContent === 'Turn On All') {
        setLights('red', 'yellow', 'green');
        lights.textContent = 'Turn Off All';
    }   
    else {
        setLights('#5e5d5d', '#5e5d5d', '#5e5d5d');
        lights.textContent = 'Turn On All';
    }
});
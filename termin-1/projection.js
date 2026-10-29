// console.log("hallo");

let width = 720; 
let height = 360;  

// Längengrad (Longitude) X
const x = lonToX(-180) // Linke Seite der Karte
console.log(x)

function lonToX(lon) {
    return (lon + 180) * (width / 360)
}; 

    // function lonToX(lon, breite) {
    // const x = ((lon +180) / 360) * breite; 
    // return x; 
    // }

    // const x = lonToX(-180, 720)
    // console.log(x); 

// Breitengrad (Latitude) Y
// +90°   0 px Nordpol
//   0° 180 px Äquator
// -90° 360 px Südpol

const y = latToY(-90) // Unterseite der Karte
console.log(y)

function latToY(lat) {
    return (90 - lat) * (height / 180)
};

// Mittelpunkt zwischen zwei Punkten 
// M = (A + B) / 2
const mid = midpoint(-180, -90, 180, 90);
console.log(mid) // { lonToX: 0, latToY: 0 }

function midpoint(lon1, lat1, lon2, lat2) {
    const midLonToX = (lon1 + lon2) / 2;
    const midLatToY = (lat1 + lat2) / 2;
    return { lonToX: midLonToX, latToY: midLatToY };
} 
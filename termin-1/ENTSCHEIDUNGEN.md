## T1

1. Was tut dein Skript?

Mein Skript beeinhaltet 3 Funktionen: 
- function lonToX(lon) // Längengrad (Longitude) X
- function latToY(lat) // Breitengrad (Latitude) Y
- function midpoint(lon1, lat1, lon2, lat2) // Mittelpunkt zwischen zwei Punkten 

Zuerst wird die Größe der Karte in Pixeln festgelegt. 

Dafür werden zwei Variablen erstellt:
- let width = 720; // Breite X
- let height = 360; // Höhe Y

Die Breite und Höhe der Karte werden benötigt, um die Längen- und Breitengrade in Pixelkoordinaten umzurechnen. 
- Die Funktion "function lonToX(lon)" berechnet den Längengrad in eine X-Koordinate in Pixel um. (Longitude)
- Die Funktion "function latToY(lat)" berechnet den Breitengrad in eine Y-Koordinate in Pixel um. (Latitude)

Ich habe zuerst die X-Koordinate und danach die Y-Koordinate berechnet, weil bei der Angabe von Koordinaten normalerweise zuerst X und dann Y angegeben wird.

Die dritte Funktion "function midpoint(lonToX1, latToY1, lonToX2, latToY2)" berechnet den Mittelpunkt zwischen zwei Punkten, 
indem sie jeweils den Mittelwert der beiden X- und Y-Koordinaten berechnet.

2. Welche Stelle hättest du auch anders lösen können? Wie?

3. Warum hast du es so gelöst?

Ich habe die "function latToY(lat)" aus der gegeben Funktion "function lonToX(lon)" abgeleitet. 
Die Funktion "function midpoint(lon1, lat1, lon2, lat2)" basiert auf der mathematischen Formel für den Mittelwert. 

4. Was fiel dir schwer bei der Aufgabe?

Bei der Funktion latToY(lat) hat es mir geholfen, zuerst zu schauen, wo die Breitengrade +90° und −90° auf der Karte liegen müssen. 
// +90°   0 px Nordpol
//   0° 180 px Äquator
// -90° 360 px Südpol

5. Was ist dir unklar geblieben?
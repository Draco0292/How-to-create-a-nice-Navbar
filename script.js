const hamburger = document.getElementById("hamburger"); // Wir erstellen eine Konstante mit dem Namen "hamburger" und suchen uns im HTML ein Element mit einer ID namens "hamburger"

hamburger.addEventListener('click', navBar); // Nun nehmen wir unsere Konstante und geben ihr einen EventListener. Das ist ein Funktion die überprüft ob auf dieses Elment mit der Maus geklickt wurde. Wenn das wahr ist, wird die Funktion navbar ausgeführt

function navBar(){ 
    const navBar = document.getElementById("nav"); // Wir erstellen uns wieder eine Konstante mit dem Namen Navbar und suchen uns die gleichnamige ID im HTML
    navBar.classList.toggle('open'); // Der Navbar wird jetzt mit jedem Klick eine CSS Klasse getoogelt. 

    const header = document.getElementById("header"); // Wir erstellen uns wieder eine Konstante mit dem Namen header und suchen uns die gleichnamige ID im HTML
    header.classList.toggle("open"); // Dem Header wird jetzt mit jedem Klick eine CSS Klasse getoogelt. 
}
import AOS from "aos";
import "aos/dist/aos.css";

// // Wait for everything to load
// window.addEventListener('load', () => {
//     AOS.init({
//         duration: 1000,
//         offset: 100,
//         once: false,
//         mirror: true,
//         startEvent: 'DOMContentLoaded', // This might help with timing issues
//         disableMutationObserver: false, // Enable automatic updates
//     });
// });

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
  startEvent: "DOMContentLoaded", // This might help with timing issues
});

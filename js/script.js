addEventListener('DOMContentLoaded', () => {

        const primaryNav = document.querySelector('.primary-navigation');
        const navToggle = document.querySelector('.mobile-nav-toggle');

        navToggle.addEventListener("click", () => {
            const visibility = primaryNav.getAttribute('data-visible');

            if (visibility === "false") {
                primaryNav.setAttribute('data-visible', true)
                navToggle.setAttribute('aria-expanded', true)
            } else if (visibility === "true") {
                primaryNav.setAttribute('data-visible', false)
                navToggle.setAttribute('aria-expanded', false)
            }
        })
    })


// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = {
        "address": {
          "regionCode": "US",
          "administrativeArea": "California",
          "locality": "Mountain View",
          "addressLines": ["123 Fake St"]
        }
      };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;
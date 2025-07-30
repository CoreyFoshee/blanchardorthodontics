// Maps Handler for Blanchard Orthodontics
// Replaces Webflow map widgets with working Google Maps embeds

(function() {
    'use strict';

    // Location data
    const locations = {
        jacksonville: {
            name: 'Blanchard Orthodontics - Jacksonville',
            address: '1501 East Rusk St, Jacksonville, TX 75766',
            lat: 31.965875,
            lng: -95.2494897,
            zoom: 15
        },
        tyler: {
            name: 'Blanchard Orthodontics - Tyler',
            address: '3824 SouthPark Dr, Tyler, TX 75703',
            lat: 32.307448,
            lng: -95.27519699999999,
            zoom: 15
        }
    };

    // Function to create Google Maps embed URL
    function createMapEmbedUrl(location) {
        const encodedAddress = encodeURIComponent(location.address);
        return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBiEVnl_Q4Pk1BOrnKxlBT1n7vw0Ki8Ja4&q=${encodedAddress}&zoom=${location.zoom}`;
    }

    // Function to replace map widgets with iframes
    function replaceMapWidgets() {
        const mapWidgets = document.querySelectorAll('.w-widget-map');
        
        mapWidgets.forEach((widget, index) => {
            // Determine which location this widget represents
            let location;
            if (index === 0 || widget.getAttribute('aria-label')?.includes('Jacksonville')) {
                location = locations.jacksonville;
            } else if (index === 1 || widget.getAttribute('aria-label')?.includes('Tyler')) {
                location = locations.tyler;
            } else {
                // Fallback to Jacksonville
                location = locations.jacksonville;
            }

            // Create iframe
            const iframe = document.createElement('iframe');
            iframe.src = createMapEmbedUrl(location);
            iframe.width = '100%';
            iframe.height = '400';
            iframe.style.border = '0';
            iframe.allowFullscreen = true;
            iframe.loading = 'lazy';
            iframe.referrerPolicy = 'no-referrer-when-downgrade';
            iframe.title = location.name;

            // Clear widget content and add iframe
            widget.innerHTML = '';
            widget.appendChild(iframe);

            // Add some styling to ensure proper display
            widget.style.position = 'relative';
            widget.style.overflow = 'hidden';
        });
    }

    // Initialize maps when DOM is ready
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', replaceMapWidgets);
        } else {
            replaceMapWidgets();
        }
    }

    // Alternative method using Google Maps API (if embed doesn't work)
    function initGoogleMapsAPI() {
        // Check if Google Maps API is already loaded
        if (window.google && window.google.maps) {
            createCustomMaps();
        } else {
            // Load Google Maps API
            const script = document.createElement('script');
            script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBiEVnl_Q4Pk1BOrnKxlBT1n7vw0Ki8Ja4&callback=initCustomMaps';
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
        }
    }

    // Create custom maps using Google Maps API
    function createCustomMaps() {
        const mapWidgets = document.querySelectorAll('.w-widget-map');
        
        mapWidgets.forEach((widget, index) => {
            let location;
            if (index === 0 || widget.getAttribute('aria-label')?.includes('Jacksonville')) {
                location = locations.jacksonville;
            } else if (index === 1 || widget.getAttribute('aria-label')?.includes('Tyler')) {
                location = locations.tyler;
            } else {
                location = locations.jacksonville;
            }

            // Create map container
            const mapContainer = document.createElement('div');
            mapContainer.style.width = '100%';
            mapContainer.style.height = '400px';
            mapContainer.style.border = '0';

            // Clear widget and add container
            widget.innerHTML = '';
            widget.appendChild(mapContainer);

            // Create map
            const map = new google.maps.Map(mapContainer, {
                center: { lat: location.lat, lng: location.lng },
                zoom: location.zoom,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            // Add marker
            new google.maps.Marker({
                position: { lat: location.lat, lng: location.lng },
                map: map,
                title: location.name
            });
        });
    }

    // Make functions globally available
    window.initCustomMaps = createCustomMaps;

    // Initialize
    init();

    // Fallback to API method if embed doesn't work
    setTimeout(() => {
        const maps = document.querySelectorAll('.w-widget-map iframe');
        if (maps.length === 0) {
            console.log('Maps not loaded via embed, trying API method...');
            initGoogleMapsAPI();
        }
    }, 2000);

})(); 
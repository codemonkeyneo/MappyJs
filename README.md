# MappyJs
Map function helpers for Javascipt that I have found useful. Hopefully will help it grow and grow and grow into an easy to use and understand library.

##Examples

Converting Latitude and Longitude to DMS representation.

    Mappy.convertLatLngToDMS(-31.934444, 77.037777);  // lat, lon

This will return the DMS for each decimal coordintate into a broken down DMS structure.

    {
      lat: {
        deg: 31,
        min: 56,
        sec: 4,
        com: 'S'
      },
      lon: {
        deg: 77,
        min: 2,
        sec: 16,
        com: 'E'
      }
    }


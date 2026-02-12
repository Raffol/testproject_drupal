(function (Drupal, once) {
  Drupal.behaviors.dgisMap = {
    attach(context) {
      once('dgisMap', '.dgis-map', context).forEach((el) => {
        const lat = parseFloat(el.dataset.lat);
        const lng = parseFloat(el.dataset.lng);

        if (!lat || !lng) return;

        DG.then(function () {
          const map = DG.map(el, {
            center: [lat, lng],
            zoom: 16
          });

          DG.marker([lat, lng]).addTo(map);
        });
      });
    }
  };
})(Drupal, once);

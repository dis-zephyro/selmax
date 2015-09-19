$('.topnav li a').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, {offset:-50});
    return false;
});


$(".certification a").fancybox({
    "padding" : 0
});

$(".btn-popup").fancybox({
    "padding" : 0
});



// Подключние Яндекс-Карты

ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
        center: [44.1904,42.0512], // Казань
        zoom: 16,
        controls: []
    });

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: ''
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/placemark.png',
        // Размеры метки.
        iconImageSize: [70, 104],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-35, -108]
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
}
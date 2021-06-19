(function ($) {
    "use strict";
    $(document).ready(function () {
        $("#the-event").click(function () {
            load_items();
        });
        function load_items() {
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/photos',
                type: 'get',
                dataType: 'JSON',
                success: function (value) {
                    var xxx = value;
                    var length = xxx.length;
                    var id = xxx.map(a => a.id);
                    var title = xxx.map(a => a.title);
                    var url = xxx.map(a => a.url);
                    var thumbnailUrl = xxx.map(a => a.thumbnailUrl);
                    for (let i = 0; i < length; i++) {
                        $('#append-here').append('<div class="col-lg-3 mb-2">' +
                            '<div class="item p-3">' +
                            '<span>id : ' + id[i] + '</span>' +
                            '<h2>' + title[i] + '</h2>' +
                            '<a href="' + url[i] + '"><img src="' + thumbnailUrl[i] + '"></a>' +
                            '</div>' +
                            '</div>');
                    }
                },
            });
            return xxx;
        }
    });
}(jQuery));
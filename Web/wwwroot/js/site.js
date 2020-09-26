// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var sheetHelper = function (row, col) {
    var x = new Array(row);
    for (var i = 0; i < x.length; i++) {
        x[i] = new Array(col);
    }
    return x;
}

$.fn.canvas = function (state) {
    var bsDefaults = {
        offset: false,
        overlay: true,
        width: '330px'
    },
        bsMain = $('.bs-offset-main'),
        bsOverlay = $('.bs-canvas-overlay');

    if (state == 'open') {
        var canvas = $(this).data('target'),
            opts = $.extend({}, bsDefaults, $(canvas).data()),
            prop = $(canvas).hasClass('bs-canvas-right') ? 'margin-right' : 'margin-left';

        if (opts.width === '100%')
            opts.offset = false;

        $(canvas).css('width', opts.width);
        if (opts.offset && bsMain.length)
            bsMain.css(prop, opts.width);

        $(canvas + ' .bs-canvas-close').attr('aria-expanded', "true");
        $('[data-toggle="canvas"][data-target="' + canvas + '"]').attr('aria-expanded', "true");
        if (opts.overlay && bsOverlay.length)
            bsOverlay.addClass('show');
        return false;
    } else if (state == 'close') {
        var canvas, aria;
        if ($(this).hasClass('bs-canvas-close')) {
            canvas = $(this).closest('.bs-canvas');
            aria = $(this).add($('[data-toggle="canvas"][data-target="#' + canvas.attr('id') + '"]'));
            if (bsMain.length)
                bsMain.css(($(canvas).hasClass('bs-canvas-right') ? 'margin-right' : 'margin-left'), '');
        } else {
            canvas = $('.bs-canvas');
            aria = $('.bs-canvas-close, [data-toggle="canvas"]');
            if (bsMain.length)
                bsMain.css({
                    'margin-left': '',
                    'margin-right': ''
                });
        }
        canvas.css('width', '');
        aria.attr('aria-expanded', "false");
        if (bsOverlay.length)
            bsOverlay.removeClass('show');
        return false;
    }
}

jQuery(document).ready(function ($) {
    var bsDefaults = {
        offset: false,
        overlay: true,
        width: '330px'
    },
        bsMain = $('.bs-offset-main'),
        bsOverlay = $('.bs-canvas-overlay');

    $('[data-toggle="canvas"][aria-expanded="false"]').on('click', function () {
        var canvas = $(this).data('target'),
            opts = $.extend({}, bsDefaults, $(canvas).data()),
            prop = $(canvas).hasClass('bs-canvas-right') ? 'margin-right' : 'margin-left';

        if (opts.width === '100%')
            opts.offset = false;

        $(canvas).css('width', opts.width);
        if (opts.offset && bsMain.length)
            bsMain.css(prop, opts.width);

        $(canvas + ' .bs-canvas-close').attr('aria-expanded', "true");
        $('[data-toggle="canvas"][data-target="' + canvas + '"]').attr('aria-expanded', "true");
        if (opts.overlay && bsOverlay.length)
            bsOverlay.addClass('show');
        return false;
    });

    $('.bs-canvas-close, .bs-canvas-overlay').on('click', function () {
        var canvas, aria;
        if ($(this).hasClass('bs-canvas-close')) {
            canvas = $(this).closest('.bs-canvas');
            aria = $(this).add($('[data-toggle="canvas"][data-target="#' + canvas.attr('id') + '"]'));
            if (bsMain.length)
                bsMain.css(($(canvas).hasClass('bs-canvas-right') ? 'margin-right' : 'margin-left'), '');
        } else {
            canvas = $('.bs-canvas');
            aria = $('.bs-canvas-close, [data-toggle="canvas"]');
            if (bsMain.length)
                bsMain.css({
                    'margin-left': '',
                    'margin-right': ''
                });
        }
        canvas.css('width', '');
        aria.attr('aria-expanded', "false");
        if (bsOverlay.length)
            bsOverlay.removeClass('show');
        return false;
    });
});
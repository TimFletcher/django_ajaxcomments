$.fn.djangoAjaxComments = function(options) {

    var busy = false;
    that = this;

    success = function(data, textStatus, XMLHttpRequest) {
        busy = false;
        (data.success) ? insertComment(data) : insertErrors(data);
    };

    error = function(XMLHttpRequest, textStatus, errorThrown) {
        busy = false;
        that.unbind('submit');
        that.submit();
    };

    insertComment = function(data) {
        // removeSpinner();
        // Insert Comment HTML
        $('#comments').append(data.html);
        $('div.comment:last').show('slow');
        that.replaceWith('<p>Thanks!</p>');
    }

    insertErrors = function(data) {
        // removeSpinner();
        for (var error in data.errors) {
            $('#id_' + error).parent()
                             .addClass('error')
                             .after(data.errors[error]);
        }
    }

    // removeSpinner = function() {
    //     $('.ajax-loader').remove();
    //     $('div.comment-waiting').stop().remove();
    // }

    return this.submit(function(){
        busy = true;
        // $('#submit', this).after('<img src="' + media + '/images/ajax-wait.gif" alt="Please wait..." class="ajax-loader" />');
        $('.errorlist', that).remove();
        $('.input, textarea', that).removeClass('error').unbind();
        
        url = $(this).attr('action');
        comment = $(this).serialize();        
        $.ajax({
            type: 'POST',
            url: url,
            data: comment,
            success: success,
            error: error,
            dataType: 'json'
        });
        return false;
    });
};

// Set default options
// options = $.extend({
//         crossFadeTime: 500,
//         displayTime: 1000,
//         descriptions: false,
//         delay: 300
// }, options);

//  if ($('div#comments').children().length == 0) {
//      $('div#comments').prepend(
//          '<h2 class="comment-hd">1 comment so far:</h2>'
//      )
//  }

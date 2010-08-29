This project is an unofficial fork of Brandon Konkle's DRY Ajax Comments -http://bitbucket.org/bkonkle/django-ajaxcomments/src/. I've converted the JS into a jQuery plugin to make it easier to use with varying markup. This isn't quite production ready. There's still a few kinks to iron out. I'm working on it. The spinner doesn't work yet.

## Installation

1. Install `django_ajaxcomments` onto your Python path

2. Copy `jquery.django-ajax-comments.js` into your JS media folder and include it on the page.

3. Initialise the plugin on your comment form:

    <script type="text/javascript" charset="utf-8">
        $(document).ready(function() {
            $('#comment-form').djangoAjaxComments()
        });
    </script>


# Notes

As it's basically impossible to write Javascript for all markup, you'll probably need to tweak it a little to get what you want. Writing cool apps requires a little custom code so get stuck in.
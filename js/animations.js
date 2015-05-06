/**
 * Created by Timothy on 5/1/2015.
 */
$(document).ready(function() {
    $('#char-count').css('visibility', 'hidden');
    $('#tweet-submit').css('visibility', 'hidden');
    $('.tweet-compose').on('click', function() {
        $('#char-count').css('visibility', 'visible');
        $('#tweet-submit').css('visibility', 'visible');
        $('#tweet-content .tweet-compose').css('height', '5em');
    });
    $('#tweet-content textarea').on('keyup', function() {
        $('#char-count').html('140' - $('#tweet-content textarea').val().length);
        if ($('#tweet-content textarea').val().length >= 140){
            $('#tweet-controls .button').prop('disabled', true);
        }
        else {
            $('#tweet-controls .button').prop('disabled', false);
        }
        if ($('#tweet-content textarea').val().length >= 130){
            $('#char-count').css('color', 'red');
        }
        else {$('#char-count').css('color', '#999');
        }
    });

    $('ul li .action-reply').on('click', function(){
        $('.reply').css('display', 'inherit');
    });

    $('#stream .tweet').on('click', function(){
        $('.stats', this).css('display', 'inherit');
    });


    $('#tweet-submit').on('click', function(){
        $('#stream').prepend(
            '<div class="tweet">' +
            '<img class="avatar" src="img/damenleeturks.jpg" />' +
            '<strong class="fullname">My BFF</strong>' +
            '<span class="username">@mybff</span>' +
            '<p class="tweet-text">' + $('#tweet-content textarea').val() +'</p>' +
            '</div>');
        $('#tweet-content textarea').val('')

    });








    });
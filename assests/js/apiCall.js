//Test İçin Yapılmıştır.

// $(document).ready(function () {
//     let endpoint = 'http://www.omdbapi.com'
//     let apiKey = '5e7b5deb'

//     $.ajax({
//         url: "http://www.omdbapi.com/?i=tt3896198&apikey=5e7b5deb", 
//         type: 'GET',
//         contentType: "application/json",
//         dataType: 'json',
//         success: function (result) {
//             console.log(result);
//         }
//     })
    
// });

// Encapsulate OOP Jquery 
var getSearchFilm = {
    init: function( settings ) {
        myFeature.config = {
            items: $( "#searchList li" ),
            container: $( "<div class='container'></div>" ),
            urlBase: "http://www.omdbapi.com/?i"
        };
 
        // Allow overriding the default config
        $.extend( getSearchFilm.config, settings );
 
        getSearchFilm.setup();
    },
 
    setup: function() {
        getSearchFilm.config.items
            .each( getSearchFilm.createContainer )
            .click( getSearchFilm.showItem );
    },
 
    createContainer: function() {
        var item = $( this );
        var container = getSearchFilm.config.container
            .clone()
            .appendTo( item );
        item.data( "container", container );
    },
 
    buildUrl: function() {
        //apikey ve i=tt olarak gönderim sağlanmalı.
        return getSearchFilm.config.urlBase + getSearchFilm.currentItem.attr( "id" );
    },
 
    showItem: function() {
        getSearchFilm.currentItem = $( this );
        getSearchFilm.getContent( getSearchFilm.showContent );
    },
 
    getContent: function( callback ) {
        var url = getSearchFilm.buildUrl();
        getSearchFilm.currentItem.data( "container" ).load( url, callback );
    },
 
    showContent: function() {
        getSearchFilm.currentItem.data( "container" ).show();
        getSearchFilm.hideContent();
    },
 
    hideContent: function() {
        getSearchFilm.currentItem.siblings().each(function() {
            $( this ).data( "container" ).hide();
        });
    }
};
 
$( document ).ready( getSearchFilm.init );
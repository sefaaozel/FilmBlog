$(document).ready(function () {

    //Favorilerden çıkartma.
    $(".favorite_btn").click(function () {
        let getBtnId = $(this).attr("id");
        let getFavoriteCardName = "#favorite" + getBtnId;
        let existFavoriyte = $(getFavoriteCardName).css("display", "none");
    });

    //Favorilere ekleme.
    $(".addToFavorite").click(function () {
        let addToFavorite = $(this).attr("id");

        $(".favoriteItemList").append("<div class='col-md-6 col-sm-6 col-lg-3' id='favorite" + addToFavorite + "'><div class='card mb-4 shadow-sm cardPanelImage'><img class='card-img-top' data-src='holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail'alt = 'Thumbnail [100%x225]'style = 'height: 300px; width: 100%; display: block;' src = 'assests/sef.png' data- holder-rendered='true' > <button class='btn favorite_btn' id='"+addToFavorite+"'><span class='fa fa-star checked'></span></button><div class='card-body'> <p class='card-text'>Film Adı Bilgisi 1</p></div> </div > </div >");


      });



});

//// Module Pattern Kullanımı
// var existFavorite = (function() {

//     var filmCardPanelId = $("#").val();
//     var filmCardId = $("#").val();

//     var changePrivateThing = function() {
//         filmCardPanelId = $("#").val();
//     };

//     var filmCardId = function() {
//         console.log( filmCardPanelId );
//         changePrivateThing();
//     };

//     return {
//         filmCardId: filmCardId,
//         filmCardId: filmCardId
//     };
// })();

// existFavorite.filmCardId; 

// existFavorite.filmCardId();
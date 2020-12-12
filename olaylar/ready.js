module.exports = (client) => {

    //  WATCHING : !ping izliyor
    //  LISTENING : !ping dinliyor
    //  PLAYING  : !ping oynuyor 
    
        client.user.setActivity("!Fake",{ type: "WATCHING"} );
    
        var logmesajı = "oynuyor kısmı basarı ile ayarlandı"
        console.log(logmesajı)
    }
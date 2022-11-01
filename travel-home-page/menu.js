$(entries).each(function(i, e) {
    $(".menu").append(
        '<div class = "block">'+ 
            '<div class = "innerBlock">'+ 
                '<div class = "content">'+
                    '<div class = "title">' + e.name + '</div>' + 
                    '<div class = "timeStamp">' + e.date + '</div>' + 
                    '<div class = "text">' + 
                        e.description + 
                    '</div>' + 
                '</div>' + 
                '<img src = "' + e.icon + '"/>' + 
                '<br clear="all" />' + 
            '</div>' + 
            '<div class = "seeMore">' + 
                '<p>See More</p>' + 
                '<img src = "./images/right-arrow-icon.png"/>' + 
                '<img src = "./images/right-arrow-icon.png"/>' + 
                '<img src = "./images/right-arrow-icon.png"/>' +  
            '</div>' + 
        '</div>'
    )
})
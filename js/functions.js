
function createCard(photo, userName, date, title, hashtag, reaction, comments, counter){
    let card = new Card();

    card.photo = photo;
    card.userName = userName;
    card.date = date;
    card.title = title;
    card.hashtag = hashtag;
    card.reaction = reaction;
    $('#container-center').append(
        $('<section/>').attr('class', 'card card-post p-3 mt-3').attr('id',`card-${counter}`).append(
            $('<div/>').attr('class', 'card-user d-flex ps-3 align-items-center').append(
                $('<img/>').attr('src', card.photo)
                .attr('alt', 'Usuario Imagen')
                .attr('width', '35')
                .attr('height', '35')
                .attr('class', 'me-2 rounded-circle')
            ).append(
                $('<div/>').attr('class', 'user-name d-flex flex-column').append(
                    $('<p/>').attr('class','mb-0')
                    .text(card.userName)
                ).append(
                    $('<p/>').attr('class', 'user-date text-secondary mb-0').text(card.date)
                )
            )
        ).append(
            $('<div/>').attr('class','devcard-main p-3').append(
                $('<h2/>').attr('class', 'text-black link-purple fw-bold title-class').text(card.title)
                )
                .append(
                    $('<div/>').attr('class', 'devcard-tags mb-2 ').append(

                        
                        $.each(card.hashtag, function (index, el) { 
                            
              
                        })
                        )                       
                )
                ).append(
                    $('<div/>').attr('class', 'devcard-footer bg-white d-flex justify-content-between align-items-center ps-3').append(
                        $('<div/>').attr('class','d-flex').append(
                            $('<button/>').attr('class', 'devcard-likes me-3')
                            .attr('id', `btn-r${counter}`).append(
                                $('<img/>').attr('src', 'assets/svg/icon-heart.svg')
                                .attr('alt', 'Likes icon')
                                
                            ).append(
                                $('<span/>').text(`${reaction} reactions`).attr('id', `reaction-${counter}`)
                                .attr('class','ms-2')
                            )
                        ).append(
                            $('<button/>').attr('class', 'devcard-likes devcard-comments').append(
                                $('<img/>').attr('src', 'assets/svg/iccon-comment.svg')
                                .attr('alt', 'Comment icon').attr('id', `btn-c${counter}`)
                            ).append(
                                $('<span/>').text(`${reaction} comments`).attr('id', `comments-${counter}`)
                                .attr('class','ms-2')
                            )
                        )
                    ).append(
                        $('<div/>').attr('class', 'card-read d-flex align-items-center pe-3')
                        .append(
                            $('<span/>').attr('class', 'me-2 text-secondary').text('2 min read')
                        ).append(
                            $('<button/>').attr('class','btn btn-secondary text-light')
                            .text('Save')
                        )
                    )
        )
    )
  
    
    $(`#btn-r${counter}`).click(function (e) { 
        
        let c = e.target.id.replace('btn-r', '');
        let d = $(`#reaction-${c}`).text();
        reaction = parseInt(d.replace(' reactions', ''))
        
        reaction++
        $(`#reaction-${c}`).text(`${reaction} reactions`)
        
        
    });
}

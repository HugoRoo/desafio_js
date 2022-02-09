let am = [];
let ay = [];
while (am.length > 0) {
    am.pop()
}
while (ay.length > 0) {
    ay.pop()
}
    let arr = [];
function dataArray(photo, userName, date, title, hashtag, reaction, counter){
    let a = 0;
    let card = new Card();
    let comment = new Comment();
    card.photo = photo;
    card.userName = userName;
    card.date = date;
    card.title = title;
    card.hashtag = hashtag;
    card.reaction = reaction;
    card.comments = []
    arr.push(card);

    
   createCard(card, counter);
  
    
    $(`#btn-r${counter}`).click(function (e) { 
        
        let c = e.target.id.replace('btn-r', '');
        let d = $(`#reaction-${c}`).text();
        reaction = parseInt(d.replace(' reactions', ''))
        
        reaction++
        $(`#reaction-${c}`).text(`${reaction} reactions`)
        
        
    });
    $(`#btn-c${counter}`).click((e)=>{
        let c = e.target.id.replace('btn-c', '');
        if(a === 0){
            a = 1;
            
        $(`#card-${c}`).append(
            $('<section/>').attr('id', `conteiner-c${c}`).append(
            $('<section/>').attr('class', 'card card-post p-3 mt-3').attr('id',`c-${c}`).append(
                $('<form/>').append(

                    $('<label/>').text('User Name:').append(
                        $('<input>').attr('type','name').attr('class','ms-4').attr('id','user').attr('autocomplete', 'off')
                        )
                ).append(
                    $('<label/>').text('Commet:').attr('class', 'mt-4 d-flex flex-direction-column').append(
                        $('<textarea/>').attr('cols', '22').attr('row','20').attr('id','text').attr('class', 'ms-5')
                    )
                ).append(
                    $('<input/>').attr('type','submit').attr('value','Enviar').attr('id',`btn-e${c}`)
                )
            )
        )
        )
    }
    $(`#c-${c}`).append(function () {
    
        if (card.comments.length > 0) {
            console.log('ok');
            let com = card.comments;
            let ind = card.comments.length;
            
            for (let i = 0; i < ind; i++) {
                $(`#conteiner-c${c}`).append(
                    $('<div/>').attr('class', 'card card-post p-3 mt-3').append(
    
                        $('<h3/>').text(com[i].userName)
                        ).append(
                            $('<p/>').text(com[i].text)
                        )
                ) 
                
            }
            
        }
    })
    $(`#btn-e${c}`).click((e)=>{
        let user = d.getElementById('user').value;
        let com = d.getElementById('text').value;
        e.preventDefault();
        if (user === '' && com === '') {
            alert('Ingresa un valor')
        } else{
        
        comment.userName = user;
        comment.text = com;
        card.comments.push(comment)
        $(`#comments-${c}`).text(`${card.comments.length} comments`)
        
        $(`#conteiner-c${c}`).remove();
        
        a = 0;
        }
        
    })
    })
    
    $('#month').change((e)=>{
        
        let cha = d.getElementById('month').value
        let cs = cha.toString()
        
        
        if(arr[counter].date[1] === cs){
            console.log(arr[counter].date[1] === cs);
            console.log(counter);
            am.push(arr[counter])

        }
        
        // let re = arr.filter(res => arr[counter].date[1] == cha);
        // console.log(re);
        if(am.length > 0){
            $(`#container-card`).empty()
            
            am.forEach(element => {
                
                createCard(element, am.length);
            });
        }
        
    })
    $('#year').change((e)=>{
        
        let cha = d.getElementById('year').value;
        let cs = cha.toString()
        
        
        if(arr[counter].date[3] === cs){
            ay.push(arr[counter])

        }
        // console.log(re);
        // let re = arr.filter(res => arr[counter].date[1] == cha);
        // console.log(re);
        if(ay.length > 0){
            $(`#container-card`).empty()
            ay.forEach(element => {
                
                createCard(element, ay.length);
            });
        }
    })
    
}


function createCard(card, counter) {

    $('#container-card').append(
        
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
                    $('<p/>').attr('class', 'user-date text-secondary mb-0').text(`${card.date[1]} ${card.date[2]} ${card.date[3]}`)
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
                            $('<button/>').attr('class', 'devcard-likes devcard-comments').attr('id', `btn-c${counter}`).append(
                                $('<img/>').attr('src', 'assets/svg/iccon-comment.svg')
                                .attr('alt', 'Comment icon').attr('id', `btn-c${counter}`)
                            ).append(
                                $('<span/>').text(`${card.comments.length} comments`).attr('id', `comments-${counter}`)
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
}


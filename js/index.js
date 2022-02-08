const d = document;

let reaction = 0,
counter = 0;

let hashtag = [];
$(d).ready(function () {
    $('#container-center').append(
        $('<nav/>').append(
            $('<div/>').attr('class', 'container mb-3 ps-1')).append(
                $('<a/>').attr('class','text-decoration-none text-black fw-bolder pe-3').attr('id','relevant').text('Relevant')
            ).append(
                $('<a/>').attr('class', 'text-decoration-none text-secondary pe-3').attr('id','latest').text('Latest')
            ).append(
                $('<a/>').attr('class', 'text-decoration-none text-secondary pe-3').attr('id','top').text('Top')
                ))
    
    navStyle();
    
    
        
        
    

    
    function generateCard(post, counter){
        
    //     $.ajax({
    //         url: "https://api.pexels.com/v1/popular",
    //         headers:{
    //             'Authorization': apiKeyPex 
    //         },
    //         type: 'GET',
        
    //     success: function (res) {
    //         console.log(res);
    //     }
    // });
    $.ajax({
        type: "GET",
        url: "https://namey.muffinlabs.com/name.json?count=2",
        success: (te)=> {
            let userName = `${te[0]} ${te[1]}`;
            $.ajax({
                type: "GET",
                url: "https://dev.to/api/articles?",
                success: function (art) {
                    while (hashtag.length > 0) {
                        hashtag.pop();
                    }
                    
                    let photo = art[post].user.profile_image_90;
                    let title = art[post].title;
                    let arrayTag = art[post].tag_list;
                    
                    
                    arrayTag.forEach(el => {
                        hashtag.push(`#${el}`)
                    });
                   
            createCard(photo, userName, dateToday, title, hashtag, reaction, counter)
                    
                }
            });        
        }
    });
}
// generateCard(0);

for (let i = 0, j = counter; i < 100 && j < 10; i++, j++) {
    generateCard(i,j);
    
}
});


const d = document;

let reaction = 0,
counter = 0;

let hashtag = [];
$(d).ready(function () {
    $('#container-center').append(
        $('<nav/>').append(
            $('<div/>').attr('class', 'container mb-3 ps-1'))
            // .append(
            //     $('<a/>').attr('class','text-decoration-none text-black fw-bolder pe-3').attr('id','week').css({
            //         cursor: 'pointer'
            //     }).text('Week')
            // )
            .append(
                $('<select/>').attr('class', 'text-decoration-none text-secondary pe-3').attr('id','month').append(
                    $('<option/>').attr('value', 'Month').text('Month')
                ).append(
                    $('<option/>').attr('value', 'Jan').text('January')
                ).append(
                    $('<option/>').attr('value', 'Feb').text('February')
                ).append(
                    $('<option/>').attr('value', 'Mar').text('March')
                ).append(
                    $('<option/>').attr('value', 'Apr').text('April')
                ).append(
                    $('<option/>').attr('value', 'May').text('May')
                ).append(
                    $('<option/>').attr('value', 'Jun').text('June')
                ).append(
                    $('<option/>').attr('value', 'Jul').text('July')
                ).append(
                    $('<option/>').attr('value', 'Aug').text('August')
                ).append(
                    $('<option/>').attr('value', 'Sep').text('September')
                ).append(
                    $('<option/>').attr('value', 'Oct').text('October')
                ).append(
                    $('<option/>').attr('value', 'Nov').text('November')
                ).append(
                    $('<option/>').attr('value', 'Dec').text('December')
                )
            ).append(
                $('<select/>').attr('class', 'text-decoration-none text-secondary pe-3').attr('id','year').append(
                    $('<option/>').attr('value', 'Year').text('Year')
                ).append(
                    $('<option/>').attr('value', '2022').text('2022')
                ).append(
                    $('<option/>').attr('value', '2021').text('2021')
                ).append(
                    $('<option/>').attr('value', '2020').text('2020')
                ).append(
                    $('<option/>').attr('value', '2019').text('2019')
                ).append(
                    $('<option/>').attr('value', '2018').text('2018')
                ).append(
                    $('<option/>').attr('value', '2017').text('2017')
                ).append(
                    $('<option/>').attr('value', '2016').text('2016')
                ).append(
                    $('<option/>').attr('value', '2015').text('2015')
                ).append(
                    $('<option/>').attr('value', '2014').text('2014')
                ).append(
                    $('<option/>').attr('value', '2013').text('2013')
                ).append(
                    $('<option/>').attr('value', '2012').text('2012')
                ).append(
                    $('<option/>').attr('value', '2011').text('2011')
                )
            )
                ).append(
                    $('<section/>').attr('id', `container-card`))
    
    navStyle();


    
        
    

    
    function generateCard(counter){
        
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
                    
                    let photo = art[counter].user.profile_image_90;
                    let title = art[counter].title;
                    let arrayTag = art[counter].tag_list;
                    
                    
                    arrayTag.forEach(el => {
                        hashtag.push(`#${el}`)
                    });
                   
            dataArray(photo, userName, obtenerFecha(), title, hashtag, reaction, counter)
                    
                }
            });        
        }
    });
}
// generateCard(0);

for (let i = 0 ; i < 20; i++) {
    generateCard(i);
}
});


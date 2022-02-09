

function Card(photo, userName, date, title, hashtag, reaction,comments){
    
    this.photo = '',
    this.userName = '',
    this.date= '',
    this.title= '',
    this.hashtag ,
    this.reaction = 0,
    this.comments = []
    
    
}

function Comment(){
    this.userName='',
    this.text=''
}



const aleatorio = (Math.random() * (15 - 0) + 0).toFixed(0);


function obtenerFecha() {
    let dia = (Math.random() * (28 - 0) + 0).toFixed(0),
mes = (Math.random() * (11 - 0) + 0).toFixed(0),
año = (Math.random() * (2021 - 2011) + 2011).toFixed(0);
 const   date = new Date(año,mes,dia);

arrayDate = date.toDateString().split(' '),

dateToday = arrayDate;

return dateToday;
}
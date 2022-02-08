

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
    this.comment=''
}

const aleatorio = (Math.random() * (15 - 0) + 0).toFixed(0), date = new Date(),
arrayDate = date.toDateString().split(' '),
dateToday = `${arrayDate[1]} ${arrayDate[2]}`;


const comments = [
  {
    name: 'Micheal Lyons',
    date: '12/18/2018',
    comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.',
  },
  {
    name: 'Gary Wong',
    date: '12/12/2018',
    comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!', 
  },
  {
    name: 'Theodore Duncan',
    date: '11/15/2018',
    comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!',
  },
]

function commentdom(name, date, comment) {
  var step1 = document.createElement('div');
  step1.setAttribute('class', 'commentpicture');
  step1.innerHTML = `<div class= "blankimg"></div><div class="commenttitle"><div class="titlebox"><div class="name">${name}</div><div class="date">${date}</div></div><div class="comment">${comment}</div></div>`;
  document.getElementById('input-name').appendChild(step1);
}

function forloopforcommentarray() {
  for (var i = 0; i < comments.length; i++) {
    commentdom(comments[i].name, comments[i].date, comments[i].comment)
  }
}

//got from stackoverflow
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; 
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
//

var button = document.querySelector('button')
button.addEventListener("click", function () {
  event.preventDefault();
  var nameTextpull = document.getElementById('name').value;
  var commentTextpull = document.getElementById('comment').value;
  commentdom(nameTextpull, today, commentTextpull);
})


window.onload = forloopforcommentarray;
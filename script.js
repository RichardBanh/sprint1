var comments = {
  name: ['Micheal Lyons', 'Gary Wong', 'Theodore Duncan'],
  date: ['12/18/2018', '12/12/2018', '11/15/2018'],
  comment: ['They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.', 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!', 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!']
}

function presetComments() {
  for (let i = 0; i < comments.name.length; i++) {
    var nameNode = document.createElement('div');
    var commentNode = document.createElement('div');
    var pictureNode = document.createElement('div');
    var dateNode = document.createElement('div');
    var titleDatebox = document.createElement('div');
    var commentTitle = document.createElement('div');
    var commentTitlePicture = document.createElement('div');
    var nam = comments.name[i]
    var dat = comments.date[i]
    var com = comments.comment[i]
    nameNode.setAttribute('class', 'name');
    commentNode.setAttribute('class', 'comment');
    dateNode.setAttribute('class', 'date');
    pictureNode.setAttribute('class', 'blankimg');
    titleDatebox.setAttribute('class', 'titlebox');
    commentTitle.setAttribute('class', 'commenttitle');
    commentTitlePicture.setAttribute('class','commentpicture');
    dateNode.innerHTML= dat;
    nameNode.innerHTML= nam;
    commentNode.innerHTML = com;
    titleDatebox.appendChild(nameNode);
    titleDatebox.appendChild(dateNode);
    commentTitle.appendChild(titleDatebox);
    commentTitle.appendChild(commentNode);
    commentTitlePicture.appendChild(commentTitle);
    commentTitlePicture.appendChild(pictureNode);
    document.getElementById('input-name').appendChild(commentTitlePicture);
    
  }
}
//got from stackoverflow
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; 
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
//
var nameTextpull = document.getElementById('name').value;
var commentTextpull = document.getElementById('comment').value;

var button = document.querySelector('button')
button.addEventListener("click", function () {
  event.preventDefault();
  var nameNode = document.createElement('div');
  var commentNode = document.createElement('div');
  var pictureNode = document.createElement('div');
  var dateNode = document.createElement('div');
  var titleDatebox = document.createElement('div');
  var commentTitle = document.createElement('div');
  var commentTitlePicture = document.createElement('div');
  var nameTextpull = document.getElementById('name').value;
  var commentTextpull = document.getElementById('comment').value;
  nameNode.setAttribute('class', 'name');
  commentNode.setAttribute('class', 'comment');
  dateNode.setAttribute('class', 'date');
  pictureNode.setAttribute('class', 'blankimg');
  titleDatebox.setAttribute('class', 'titlebox');
  commentTitle.setAttribute('class', 'commenttitle');
  commentTitlePicture.setAttribute('class','commentpicture');
  dateNode.innerHTML= today;
  nameNode.innerHTML= nameTextpull;
  commentNode.innerHTML = commentTextpull;

  comments.date.push(today);
  comments.name.push(nameTextpull);
  comments.comment.push(commentTextpull);
  
  titleDatebox.appendChild(nameNode);
  titleDatebox.appendChild(dateNode);
  commentTitle.appendChild(titleDatebox);
  commentTitle.appendChild(commentNode);
  commentTitlePicture.appendChild(commentTitle);
  commentTitlePicture.appendChild(pictureNode);
  document.getElementById('input-name').appendChild(commentTitlePicture);
  var form = document.querySelector('form');
  form.reset();
})

presetComments()

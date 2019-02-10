const dakey = '?api_key=1000ca6c-8bcb-46e6-a3bf-09212ef44e2c';
const urlcomments = `https://project-1-api.herokuapp.com/comments${dakey}`;
const showdates = `https://project-1-api.herokuapp.com/showdates${dakey}`


function commentget(){
  return axios.get(urlcomments)
  .then(response => {
  const comments2 = response.data
  console.log(comments2)
  for (var i = comments2.length -1 ; i >= 0; i--) {
    const date = new Date(comments2[i].timestamp)
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      const formatdate = `${month}/${day}/${year}`
    var name = comments2[i].name 
    var comment = comments2[i].comment
    var step1 = document.createElement('div');
    step1.setAttribute('class', 'commentpicture');
    step1.innerHTML = `<div class= "blankimg"></div><div class="commenttitle"><div class="titlebox"><div class="name">${name}</div><div class="date">${formatdate}</div></div><div class="comment">${comment}</div></div>`;
    document.getElementById('input-name').appendChild(step1);
    
  }
  }
  )
}


function commentdom(name, date, comment) {
  var step1 = document.createElement('div');
  var where = document.getElementById('input-name');
  step1.setAttribute('class', 'commentpicture');
  step1.innerHTML = `<div class= "blankimg"></div><div class="commenttitle"><div class="titlebox"><div class="name">${name}</div><div class="date">${date}</div></div><div class="comment">${comment}</div></div>`;
  
  return where.insertBefore(step1, where.firstChild);
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
  var form = document.querySelector('form');
  var nameTextpull = document.getElementById('name').value;
  var commentTextpull = document.getElementById('comment').value;
  axios.post(urlcomments, {
    name: nameTextpull,
    comment: commentTextpull
  })
  commentdom(nameTextpull, today, commentTextpull);
  form.reset();
})

commentget();
const dakey = '?api_key=1000ca6c-8bcb-46e6-a3bf-09212ef44e2c';
const showdates = `https://project-1-api.herokuapp.com/showdates${dakey}`



function showdatesdata() {
  return axios.get(showdates)
  .then(response => {
    const showdata = response.data
    console.log(showdata)
    for (let i =0; i< showdata.length; i++) {
      const date = showdata[i].date
      const venue = showdata[i].place
      const local =showdata[i].location
      var create = document.createElement('div');
      var createtable = document.createElement('tr');
      createtable.innerHTML = `<td class="dates">${date}</td>
      <td>${venue}</td><td>${local}</td><td><button>BUY TICKETS</button></td>`;
      create.setAttribute('class', 'tableshow');
      create.innerHTML = `<h3>DATE</h3><h4class="bold">${date}</h4><h3>VENUE</h3><h4>${venue}</h4><h3>Location</h3><h4>${local}</h4><button>BUY TICKETS</button>`;
      document.getElementById('table-box').appendChild(create); 
      document.querySelector('table').appendChild(createtable);
    }
  }
  )
}

showdatesdata();
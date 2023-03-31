axios
    .get('https://rickandmortyapi.com/api/character')
    .then(response => {
      let data = response.data;
    
      document.querySelector('.data').innerHTML = '<table class="users"></table>'
      for(key in data){
        let value = document.createElement('span')
        value.innerHTML = `<p>${data[key].length}</p>`
        document.querySelector('.users').appendChild(value);
        
        let row = document.createElement('tr')
        row.innerHTML = `<td colspan="2">${key}</td>`
        document.querySelector('.users').appendChild(row)

        for(let i=0; i<data[key].length; i++){
          let row = document.createElement('tr')
          row.innerHTML = `
              <td>${data[key][i][0]}</td>`;         
      document.querySelector('.users').appendChild(row)
      console.log(data);
        }
      }
    })    
     /* .catch(erorr =>
        console.erorr(erorr));*/

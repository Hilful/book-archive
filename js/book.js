// section for loading all datas related to books api
// Twon const bookdetails and results are declared globally for ease of use
const bookDetails = document.getElementById('book-detils');
const result =document.getElementById('result')
const searchBook = () =>{
  const searchField =document.getElementById('search-field');
    const searchText = searchField.value;
    if (searchText===''){
      bookDetails.textContent='';
      result.innerText='At least search by a keyword please!!!'
    }
    else{

    searchField.value='';
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res =>res.json())
    .then(data => displayBookDetails(data.docs))
}
}
// Book description segment
const displayBookDetails = docs =>{
  bookDetails.textContent='';
      if (docs.length === 0){
        
      result.innerText='Sorry,we found nothing!!!';
     
      }
      else{
         result.innerText=`You got: ${docs.length} books`;
                docs.forEach (docs =>{
                  const div = document.createElement('div');
                  div.classList.add('col');
                  div.innerHTML=`
                  <div class="card">
                    <img src="https://covers.openlibrary.org/b/id/${docs.cover_i}-M.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Title:${ docs.title}</h5>
                      <p class="card-text">
                      Author: ${ docs.author_name }<br>
                      publish Date: ${ docs.publish_date}<br>
                      First publish Year: ${ docs.first_publish_year}<br>
                      publish Place: ${ docs.publish_place}<br>
                      publisher: ${ docs.publisher }
                      </p>
                    </div>
                  </div>
                  `
                 bookDetails.appendChild(div);

                })

                }
      };
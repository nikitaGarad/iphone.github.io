const form =document.getElementById("myform");

const handleform =(e) =>{
    e.preventDefault()

    const name=document.forms["myform"]["name"].value;





    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '02859e6d44msh01af0866e4a303ap151cafjsn2950ff030c30',
            'X-RapidAPI-Host': 'pricer.p.rapidapi.com'
        }
    };
    
    fetch(`https://pricer.p.rapidapi.com/str?q=${name}`, options)
        .then(response => response.json())
        .then(response => {


            response.map((cval)=>{

                document.getElementById("result").innerHTML+=`
               <div class="div col-md-4 mt-5">
               <div class="divscard bg-dark text-white text-center mt-5 style="width:18rem">
               <img src="${cval.img}" class="card-img-top " alrt="...">
               <div class="card-body">
               <h5 class="card-title">${cval.title}</h5>
               <p class="card-text">${cval.rating}</p>
               <h3 class="text-danger">price${cval.price}</h3>
               <a href="${cval.link}"class="btn btn-wprimary">Read More</a>
               </div>
               </div>
               </div>









                `


            })








        })
        .catch(err => console.error(err));






}

form.addEventListener("submit",handleform)
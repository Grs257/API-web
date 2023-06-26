fetch("https://fakestoreapi.com/products")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    let data1 = "";
    completedata.map((value) => {
      data1 += `<div id="cards">
      <div class="card">
                <img src="${value.image}" alt="image"> 
                    <h5 >${value.title}</h5>
                    <p>${value.description}</p>
                
                    <p>${value.category}</p>
                    <p>${value.price}</p>
                    <button type="submit" class="button">know more</button> </div>
                    <div>`;
    });
    document.getElementById("store").innerHTML = data1;
  })
  .catch((err) => {
    console.log(err);
  });

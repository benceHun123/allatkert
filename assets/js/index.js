const content = document.querySelector(".content");

fetch('./assets/json/landing.json')
   .then(response => {
    //megprobalja megnyitni, ha nem letezik, akkor hiba, ha igen akkor kiolvassa a file tartalmat
       if (!response.ok) {
           throw new Error("HTTP error " + response.status);
       }
       return response.json();
   })
   .then(json => {
       json.forEach((element) => { 
            const item = document.createElement("div");

            item.classList.add("item");
            item.innerHTML = `
            <div class='image'>${element.image}</div>
            <div class='item-content'>
                <div class='title'>${element.title}</div>
                <div class='description'>${element.description}</div>
            </div>
            `
            content.append(item);
       });
   })
   .catch(function () {
       console.log("nem sikerult a fajlt betolteni");
   })

   
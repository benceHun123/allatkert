/*async function loadAnimals() {
  try {
    const response = await fetch('../assets/json/animals.json');
    
    if (!response.ok) {
      throw new Error(`HTTP hiba: ${response.status}`);
    }
    
    const animals = await response.json();
    renderAnimals(animals);
  } catch (error) {
    console.error('Hiba az állatok betöltésekor:', error);
  }
}

function renderAnimals(animals) {
  const container = document.getElementById('animalCard');
  container.innerHTML = animals.map(animal =>
    `
    <div class="max-w-2xl mx-auto mt-24">
        <div class="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
    
            <div class="relative w-32 h-32 flex-shrink-0">
                <img src="${"../assets"+animal.image_url.substring(2)}" class="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50" loading="lazy">
            </div>
    
            <div class="flex flex-col gap-2 py-2">
    
                <p class="text-xl font-bold">${animal.name}</p>
    
                <ul>
                    <li>Age: ${animal.age}</li>
                    <li>Location: ${animal.location}</li>
                    <li>Description: ${animal.description}</li>
                </ul>
    
            </div>
    
        </div>
    
    </div>`
    
    ).join('');

}

loadAnimals();*/

const content = document.querySelector(".content");

fetch('./assets/json/animals.json')
   .then(response => {
       if (!response.ok) {
           throw new Error("HTTP error " + response.status);
       }
       return response.json();
   })
   .then(json => {
       json.forEach((element) => { 
            const item = document.createElement("div");

            card.classList.add("card");
            
            card.innerHTML=`
            <div class='image'>${element.image_url}</div>
            <div class='name'>${element.name}</div>
            <div class='location'>${element.location}</div>

            `
            content.append(card);
       });
   })
   .catch(function () {
       console.log("nem sikerult a fajlt betolteni");
   })

   

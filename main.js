const students = [
    {
        name: 'Hermione Granger',
        house: 'Gryffindor',
        imgUrl: 'https://bit.ly/3cW2CJc',
        expelled: false,
    },
    {
        name: 'Luna Lovegood',
        house: 'Ravenclaw',
        imgUrl: 'https://bit.ly/2SEGlrN',
        expelled: false,
    },
    {
        name: 'Pansy Parkinson',
        house: 'Slytherin',
        imgUrl: 'https://bit.ly/2KQQlcS',
        expelled: true,
    },
    {
        name: 'Hannah Abbott',
        house: 'Hufflepuff',
        imgUrl: 'https://bit.ly/3aWmMBk',
        expelled: false,
    },
];

const printToDom = (selector, textToPrint) => {
    document.querySelector(selector).innerHTML = textToPrint;
  };

  const buildHouses = (studentBody) => {
      let domString = '';

    for (let i = 0; i < studentBody.length; i++) {
        domString += `
            <div class="row row-cols-1 row-cols-md-2">
            <div class="col mb-4">
            <div class="card" style="width: 18rem;">
            <div class="card students">
            <h2 class="card-title">${studentBody[i].name}</h2>
            <img src="${studentBody[i].imgUrl}" class="card-img-top" alt="${studentBody[i].house}>
            <h4 class="card-title">${studentBody[i].house}</h4>
            </div>
            </div> 
            </div>
            </div>       
        `;
    }
        printToDom('#dumbledoresArmy', domString);
  }

  const init = () => {
      buildHouses(students);
  }

  init();
let students = [
    {
        name: 'Hermione Granger',
        house: 'https://vignette.wikia.nocookie.net/harrypotter/images/e/ee/Gryffindor_Crest-0.jpg/revision/latest/scale-to-width-down/182?cb=20160729145529',
        expelled: false,
    },
    {
        name: 'Luna Lovegood',
        house: 'https://vignette.wikia.nocookie.net/harrypotter/images/2/28/Download_%284%29.jpg/revision/latest?cb=20160729145945',
        expelled: false,
    },
    {
        name: 'Pansy Parkinson',
        house: 'https://vignette.wikia.nocookie.net/harrypotter/images/7/72/Ccd53034-c798-452a-8032-f28e06250d8f.jpg/revision/latest/scale-to-width-down/160?cb=20160729150848',
        expelled: true,
    },
    {
        name: 'Hannah Abbott',
        house: 'https://vignette.wikia.nocookie.net/harrypotter/images/6/62/Download_%289%29.jpg/revision/latest?cb=20160729145653',
        expelled: false,
    },
];

const printToDom = (selector, textToPrint) => {
    document.querySelector(selector).innerHTML = textToPrint;
  };

  //function to build student house sorting cards
const buildHouses = (studentBody) => {
    let domString = '';

    for (let i = 0; i < studentBody.length; i++) {
        domString += `
            <div class="row row-cols-1 row-cols-md-2">
                <div class="col mb-4">
                    <div class="card" style="width: 18rem;">
                        <div class="card students">
                            <h2 class="card-title">${studentBody[i].name}</h2>
                            <img src="${studentBody[i].house}" class="card-img-top">
                            <br>
                        </div>
                    </div> 
                </div>
            </div>       
        `;
    }
        printToDom('#dumbledoresArmy', domString);
  };

// sorting hat random generator
const sortingHat = () => {
    newHouse = Math.floor(Math.random() * 4); {

 // somehow: let students.house = newHouse

    switch (newHouse) {
        case 'Gryffindor': {
            let newHouse = 'https://vignette.wikia.nocookie.net/harrypotter/images/e/ee/Gryffindor_Crest-0.jpg/revision/latest/scale-to-width-down/182?cb=20160729145529';
            break;
        }
        case 'Ravenclaw': {
            let newHouse = 'https://vignette.wikia.nocookie.net/harrypotter/images/2/28/Download_%284%29.jpg/revision/latest?cb=20160729145945';
            break;
        }
        case 'Slytherin': {
            let newHouse = 'https://vignette.wikia.nocookie.net/harrypotter/images/7/72/Ccd53034-c798-452a-8032-f28e06250d8f.jpg/revision/latest/scale-to-width-down/160?cb=20160729150848';
            break;
        }
        case 'Hufflepuff': {
            let newHouse = 'https://vignette.wikia.nocookie.net/harrypotter/images/6/62/Download_%289%29.jpg/revision/latest?cb=20160729145653';
            break;
        }
    }   
}
};

// probably broke my spiffy function with this, but I tried anyway
const addStudent = (nameArgument, newHouse) => {
    let newStudent = {
        name: nameArgument,
        house: newHouse,
        expelled: false,
    }

    students.push(newStudent);
    buildHouses(students);
    //sortingHat(newHouse);
    console.log(students);
};



const clickEvents = () => {
    //document.querySelector()
    document.getElementById("sort").addEventListener("click", function(event){
        const newStudent = document.querySelector("#sortingHat").value;
        addStudent(newStudent);
    });
};

const init = () => {
    buildHouses(students);
    clickEvents();
}

init();
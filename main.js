let students = [
    {
        name: 'Hermione Granger',
        house: 'Gryffindor',
        imgUrl: 'https://vignette.wikia.nocookie.net/harrypotter/images/e/ee/Gryffindor_Crest-0.jpg/revision/latest/scale-to-width-down/182?cb=20160729145529',
        expelled: false,
    },
    {
        name: 'Luna Lovegood',
        house: 'Ravenclaw',
        imgUrl: 'https://vignette.wikia.nocookie.net/harrypotter/images/2/28/Download_%284%29.jpg/revision/latest?cb=20160729145945',
        expelled: false,
    },
    {
        name: 'Pansy Parkinson',
        house: 'Slytherin',
        imgUrl: 'https://vignette.wikia.nocookie.net/harrypotter/images/7/72/Ccd53034-c798-452a-8032-f28e06250d8f.jpg/revision/latest/scale-to-width-down/160?cb=20160729150848',
        expelled: true,
    },
    {
        name: 'Hannah Abbott',
        house: 'Hufflepuff',
        imgUrl: 'https://vignette.wikia.nocookie.net/harrypotter/images/6/62/Download_%289%29.jpg/revision/latest?cb=20160729145653',
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

const addStudent = (nameArgument) => {
    let newStudent = {
        name: nameArgument,
        house: 'Slytherin',
        imgUrl: 'https://vignette.wikia.nocookie.net/harrypotter/images/7/72/Ccd53034-c798-452a-8032-f28e06250d8f.jpg/revision/latest/scale-to-width-down/160?cb=20160729150848',
        expelled: false,
    }

    students.push(newStudent);
    buildHouses(students);
    console.log(students);
};
//testing addStudnet
    addStudent('Gwynne Meeks');

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
console.log('Ready to Party 🎉')
const locations = ['desert', 'jungle', 'forest', 'arctic']


const partyAnimals = [
  {
    name: 'Kylger',
    picture: '🐯',
    favoriteFood: 'meat',
    location: 'desert'
  },
  {
    name: 'Jake',
    picture: '🐍',
    favoriteFood: 'meat',
    location: 'desert'
  },
  {
    name: 'Berry',
    picture: '🐻‍❄️',
    favoriteFood: 'meat',
    location: 'arctic'
  },
  {
    name: 'Goose',
    picture: '🫎',
    favoriteFood: 'veggies',
    location: 'forest'
  },
  {
    name: 'Kermie',
    picture: '🐸',
    favoriteFood: 'insects',
    location: 'jungle'
  },
  {
    name: 'Sammy',
    picture: '🦭',
    favoriteFood: 'veggies',
    location: 'arctic'
  }
]
const jungleElm = document.getElementById('jungle-zone')
const arcticElm = document.getElementById('arctic-zone')
const forestElm = document.getElementById('forest-zone')
const desertElm = document.getElementById('desert-zone')


function drawJungleAnimals() {
  let jungleAnimalContent = ''
  for (let i = 0; i < partyAnimals.length; i++) {
    let animal = partyAnimals[i]
    if (animal.location == 'jungle') {
      console.log('animal', animal);
      jungleAnimalContent += animal.picture
    }
  }
  console.log('Here are the animals in the jungle', jungleAnimalContent);
  jungleElm.innerText = jungleAnimalContent
}

function drawArcticAnimals() {
  let arcticAnimalContent = ''
  // partyAnimals.forEach((animal) => console.log('🕴️', animal.name)) GREAT TEST YOU SHOULD DO IT FIRST
  partyAnimals.forEach((animal) => {
    if (animal.location == 'arctic') {
      arcticAnimalContent += animal.picture
    }
  })
  console.log('arctics', arcticAnimalContent);
  arcticElm.innerText = arcticAnimalContent
}

function drawForestAnimals() {
  let forestAnimalsContent = ''
  let forestAnimalsArr = partyAnimals.filter((animal) => animal.location == 'forest')
  console.log('Forest array', forestAnimalsArr);
  forestAnimalsArr.forEach((forestAnimal) => forestAnimalsContent += forestAnimal.picture)
  console.log('animals of the forest', forestAnimalsContent);

  forestElm.innerText = forestAnimalsContent
}

function drawDesertAnimals() {
  let desertAnimals = partyAnimals.filter((animal) => animal.location == 'desert')
  let desertAnimalContent = desertAnimals.map((animal) => animal.picture)
  console.log(desertAnimalContent);
  desertElm.innerText = desertAnimalContent.join('')
}



// const locations = ['desert', 'jungle', 'forest', 'arctic']
function minglePartyAnimals() {
  partyAnimals.forEach((animal) => {
    let randomIndex = Math.floor(Math.random() * locations.length)
    animal.location = locations[randomIndex]
  })

  drawArcticAnimals()
  drawDesertAnimals()
  drawForestAnimals()
  drawJungleAnimals()
}

function whereIsThePartyAt() {
  let jungleAnimals = filterAnimalsByLocation('jungle')
  let jungleCount = jungleAnimals.length
  let arcticAnimals = filterAnimalsByLocation('arctic')
  let arcticCount = arcticAnimals.length
  let desertCount = filterAnimalsByLocation('desert').length
  let forestAnimals = filterAnimalsByLocation('forest')
  let forestCount = forestAnimals.length
  console.log('? count', jungleCount, arcticCount, desertCount, forestCount);

  if (jungleCount > arcticCount && jungleCount > desertCount && jungleCount > forestCount) {
    console.log('The Jungle is bumpin!');
    return // these returns actually end the function early, so the rest of the function doesn't run
  }
  if (arcticCount > jungleCount && arcticCount > desertCount && arcticCount > forestCount) {
    console.log('The Arctic is Chill');
    return
  }
  if (desertCount > jungleCount && desertCount > arcticCount && desertCount > forestCount) {
    console.log('The Desert is Hot right now!');
    return
  }
  if (forestCount > jungleCount && forestCount > arcticCount && forestCount > desertCount) {
    console.log('The Forest is Evergreen');
    return
  }

  console.log('I guess no where in particular was wildin out');


}

function filterAnimalsByLocation(surveyingLocation) {
  let filteredAnimals = partyAnimals.filter((animal) => animal.location == surveyingLocation)
  console.log('🎈', filteredAnimals);
  return filteredAnimals
}


// NOTE this nameless function is 'anonymous', it is not stored, it is only ran and then disposed of
() => console.log('🕴️')

function tester(parameter) {
  console.log('🧪TEST', parameter);
  // NOTE functions can be passed as parameters, and invoked by other functions
  // if (typeof parameter == 'function') {
  //   parameter(parameter)
  // }
}

drawJungleAnimals() // this will just call the function i just wrote
drawArcticAnimals()
drawForestAnimals()
drawDesertAnimals()

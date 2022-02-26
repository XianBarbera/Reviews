//datos de reseñas locales
const reviews = [
  {
    id: 1,
    name: 'sebastian estevanez',
    job: 'lousy actor',
    img: 'https://www.notihumor.com.ar/wp-content/uploads/2021/06/estevanez.jpg',
    text: 'the proof that you can work as an actor without having talent'
  },
  {
    id: 2,
    name: 'alejandro fantino',
    job: 'TV show host',
    img: 'https://media.minutouno.com/p/60858d7e43b61fff7796b81acff3ad97/adjuntos/150/imagenes/039/580/0039580154/730x0/smart/fantinojpg.jpg',
    text: 'a tough man'
  },
  {
    id: 3,
    name: 'guido kaczka',
    job: 'TV show host',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt50qsVGg_NvJimbomMCckmzzSBol5Ze1m2lS-kil7TM-dxDA6-oe0FWwoxh1Jz5pxqSY&usqp=CAU',
    text: 'Host of television programs, he is also an actor, he played edgar the bug in the movie men in black'
  },
  {
    id: 4,
    name: 'mirtha legrand',
    job: 'TV show host',
    img: 'https://pbs.twimg.com/media/Dr4dbplWwAAIXVH.jpg',
    text: "She is the first human being to achieve immortality, she is also remembered for her iconic phrase 'mierda carajo'"
  },
  {
    id: 5,
    name: 'ricardo fort',
    job: 'commander',
    img: '/person-1.jpg',
    text: "the king of chocolate, actor, singer, businessman, is remembered for his iconic phrase'stop it guys'"
  }
]
//selecionar items
const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

//establecer item inicial
let currentItem = 0

//cargar item inicial
window.addEventListener('DOMContentLoaded', function () {
  showPerson()
})

//mostrar persona basada en el item
function showPerson() {
  const item = reviews[currentItem]
  img.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}

//mostrar siguiente persona
nextBtn.addEventListener('click', function () {
  currentItem++
  if (currentItem > reviews.length - 1) {
    currentItem = 0
  }
  showPerson()
})

//mostrar persona anterior
prevBtn.addEventListener('click', function () {
  currentItem--
  if (currentItem < 0) {
    currentItem = reviews.length - 1
  }
  showPerson()
})

//mostrar persona aleatoria

randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length)
  console.log(currentItem)
  showPerson()
})

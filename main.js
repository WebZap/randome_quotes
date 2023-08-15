const quotesByAuthor = {
    "Билл Гейтс": '"640K памяти должно хватить для любой программы."',
    "Линус Торвальдс": '"Программирование - это как секс. Одна ошибка, и ты на вечных муках, которые никогда не закончатся."',
    "Автор неизвестен": '"Если программа работает с первого раза, это подозрительно."',
    "Автор неизвестен": '"Ошибки найдены между клавишами и креслом."',
    "Марк Твен": '"В чем разница между гением и идиотом? Гений ограничен своими знаниями."',
    "Брюс Эккель": '"Я не сказал бы, что это баг. Возможно, это новая фича."',
    "Ричард Дженкс": '"Если бы вирусы писались на JavaScript, то они были бы намного меньше вредными."',
    "Автор неизвестен": '"Код работает? Отлично, не трогай."',
    "Дэвид Планка": '"Я не люблю писать документацию, потому что, если она написана хорошо, то никто не задает вопросов. А если она написана плохо, то все равно никто не читает."',
    "Марк Ротхко": '"Когда вы узнали, что программист может написать тысячу строк кода за день, но он также может потратить неделю на починку одного пробела, вы начнете понимать нашу ментальность."',

};

const authors = Object.keys(quotesByAuthor);



const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const generateButton = document.getElementById('generateButton');

const randomNum = (length) => {

    return Math.floor(Math.random() * length)
}


const generateQuotes = () => {
    generateButton.addEventListener('click', () => {
        const position = randomNum(authors.length)
        quote.innerHTML = ` <p class="quote" id="quoteText">${quotesByAuthor[authors[position]]}</p>`
        author.innerHTML = `<p class="author" id="authorName">- <span class="cursive">${authors[position]}</span></p>`
    })
}

generateQuotes();
let about = document.querySelector('section#about .row:last-child');
let aboutContents = [
    "I am Laiquah Cotie. I reside in Pelican Park but I am originally from Steenberg. I was born on the 16/01/2004. My home language is English and my second language is Afrikaans. I am however keen in learning more than just the two languages so that I can communicate with more than one/two races. While I was in High School I received multiple awards namely, top achiever in the grade or for a specific subjects. I was an RCL member from grade 10 up until matric and a house captain in matric."
]

aboutContents.forEach( (content)=>{
    about.innerHTML += `<p class='lead'>${content}</p>`
} )

let education = [
    {
        id: 1,
        year: 2021,
        description: 'I was in grade 12.',
        place: 'Zwaanswyk High School',
        type: 'High school report',
        certificate: ''
    },
    {
        id: 2,
        year: 2022,
        description: 'I matriculated from school and rewrote Math and Physical Sciences. I started tutoting and worked for 3 months.',
        place: 'Zwaanswyk High School and Mr Price',
        type: 'Bachelors pass',
        certificate: ''
    },
    {
        id: 3,
        year: 2023,
        description: 'I started a coding programme for full-stack developer.',
        place: 'Life Choices Academy',
        type: 'Pending...',
        certificate: ''
    }
]

let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
            </p>
        </div>
    </div>
    `
})

let 
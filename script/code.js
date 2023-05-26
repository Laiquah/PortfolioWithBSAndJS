let about = document.querySelector('section#about .row:last-child');
let aboutContents = [
    "I am Laiquah Cotie. I reside in Pelican Park, but I am originally from Steenberg. I was born on the 16th of January, 2004. However, I am keen on learning more than just these two languages so that I can communicate with people of various races. During my time in high school, I received multiple awards, namely the top achiever in my grade and for specific subjects. I was an RCL member from grade 10 until matric and served as a house captain in matric."
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
            <p class="text-black">
                ${data.description} @ <span>${data.place}</span> 
            </p>
        </div>
    </div>
    `
})

let skill = document.querySelector('section#skill .row:last-child');
let skillContents = [
    "I have a skill in accounting as I am taking online courses in my free time to further enhance my skills. I am proficient in using Microsoft Office, which includes Microsoft Word, PowerPoint, and Excel. I have a strong computer literacy, making it easy for me to work with computers. I am effective both as an independent worker and as a team member. I possess leadership qualities, often taking on the role of a leader in various situations. I ensure that tasks are completed according to schedule and requirements. My communication skills are excellent, making me capable of writing and sending emails as well as interacting with customers and colleagues. Having worked with a diverse range of individuals, I am adept at conveying information in a manner that is easily understood by others."
]

skillContents.forEach( (content)=>{
    skill.innerHTML += `<p class ='lead'>${content}</p>`
} )

let technicalskill = [
    {
        id: 1,
        title: 'HTML5',
        description: '<i class="fa-brands fa-html5 fa-fade fa-10x" style="color: #000000;"></i>',
        progressbar: 'Average',
    },
    {
        id: 2,
        title: 'CSS',
        description: '<i class="fa-brands fa-css3-alt fa-fade fa-10x" style="color: #000000;"></i>',
        progressbar: 'Average',
    },
    {
        id: 3,
        title: 'BOOTSTRAP',
        description: '<i class="fa-brands fa-bootstrap fa-fade fa-10x" style="color: #000000;"></i>',
        progressbar: 'Skilled',
    },
    {
        id: 4,
        title: 'Javascript',
        description: '<i class="fa-brands fa-js fa-fade fa-10x" style="color: #000000;"></i>',
        progressbar: 'Beginner',
    }
]

let divTechnicalskill = document.querySelector('.technicalskill');
technicalskill.forEach((data)=> {
    divTechnicalskill.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.title}</h4>
        <div class="card-body">
            <p class="text-black">
                ${data.description} 
            </p>
            <p class="text-black">
                ${data.progressbar} 
            </p>
        </div>
    </div>
    `
})

let testimonial = [
    {
        id: 1,
        name: 'Ganiefah Majiet',
        image: 'https://i.postimg.cc/G2CcnQKt/Screenshot-2023-05-03-100656.png',
        description: 'Laiquah is a hard worker who strives to learn more each passing day. She applies herself to every project we undertake, consistently giving her best effort. Having her as a colleague is a pleasure, as she not only works hard but also brings out the best in her colleagues. Laiquah possesses a joyful personality and is a go-getter. She is determined and nothing obstructs her path when she sets her mind to accomplishing a goal.',
    },
    {
        id: 2,
        name: 'Rayhaan Khan',
        image: 'https://i.postimg.cc/L5F3862V/C12-Rayhaan-Khan-2.jpg',
        description: 'Laiquah Cotie is an exceptional woman. She is dedicated and constantly strives to further enhance her skills. Her presence in the workplace not only brightens the overall mood but also ensures that everyone stays on track with their responsibilities. Laiquah has innate leadership qualities, and I believe she has the potential to achieve great success with this characteristic. I highly recommend her without hesitation. ',
    },
    {
        id: 3,
        name: 'Eighton-Lee Paulse',
        image: 'https://i.postimg.cc/5tFwRxK1/C12-C2-Eighton-Lee-Paulse-2.jpg',
        description: 'Laiquah is a person who exudes joy and vibrancy. She is incredibly hardworking and takes great satisfaction in completing projects before moving on to new ones. Not only is she assertive, but she is also genuinely kind-hearted. Her level of motivation is unparalleled, and her personality is truly unique. Without a doubt, I would wholeheartedly recommend her without any reservations.',
    },
    {
        id: 4,
        name: 'Mihlali Matrose',
        image: 'https://i.postimg.cc/fLJmn5qm/C12-Mihlali-Matrose-1.jpg',
        description: 'Laiquah is a remarkably determined, passionate, and kind young woman. Her future in the IT sector looks incredibly promising; you can count on that.Laiquah consistently strives to ensure that all her work and deadlines are completed promptly and accurately. Whether working in a group or individually, she excels in both settings. She effortlessly adapts to any environment she is placed in.',
    },
    {
        id: 5,
        name: 'Codi Kader',
        image: 'https://i.postimg.cc/xdRXGtSM/C12-C2-Codi-Kader-1.jpg',
        description: 'Laiquah possesses a bubbly personality, which makes her a valuable asset to any workplace or business.She has exceptional skills in HTML and CSS. When collaborating in a team setting, her teammates often seek her assistance, and she is always eager to help. This willingness to support others is a remarkable advantage when working with a team.',
    },
    {
        id: 6,
        name: 'Uzukhanye Dwili',
        image: 'https://i.postimg.cc/SQMmXvTn/C11-Uzukhanye-Dywili-4.jpg',
        description: 'Working with Laiquah Cotie was an incredible experience. Her professionalism, attention to detail, and communication skills made the entire process seamless. She consistently exceeded my expectations and delivered exceptional results. I would highly recommend Laiquah Cotie to anyone in search of a talented and dedicated professional.',
    }
]

let divTestimonial = document.querySelector('.testimonial');
testimonial.forEach((data)=> {
    divTestimonial.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.name}</h4>
        <div class="cards">
            <div id="card-body">
                <p class="text-black">
                <img class="img-fluid" src="${data.image}" alt="image" loading="lazy"> 
                </p>
                <p class="text-black ">
                ${data.description} 
                </p>
            </div>
        </div>
    </div>
    `
})

let project = [
    {
        id: 1,
        image: 'https://i.postimg.cc/Z5fGwxMX/Screenshot-2023-05-10-083058.png',
        title: 'Calendar',
        description: 'Here is a calendar I made with Boostrap and the highlighted day is the day it currently was.',
        Github: 'https://github.com/Laiquah/bootstrap',
        Netlify: 'https://verdant-nougat-f8dd19.netlify.app/',
    },
    {
        id: 2,
        title: 'Myproject89',
        image: 'https://i.postimg.cc/vZxNMR9M/Screenshot-2023-05-10-083749.png',
        description: 'This is a Project of a website we had to create about our favourite fictional characters.',
        Github: 'https://github.com/Laiquah/my-project89.git',
        Netlify:'https://glittering-arithmetic-28b22c.netlify.app/',
    },
    {
        id: 3,
        image: 'https://i.postimg.cc/59p8HgNF/Screenshot-2023-05-26-144858.png',
        title: 'Calculator',
        description: 'This is a calculator I made during the introduction of Javascript.',
        Github: 'https://github.com/Laiquah/calculator',
        Netlify: 'https://laiquahcalculator.netlify.app/',
    },
    {
        id: 4,
        image: 'https://i.postimg.cc/dVn8C99f/Screenshot-2023-05-26-145340.png',
        title: 'BMI calculator',
        description: 'This is a task we had to do in relation to understand how javscript works.',
        Github: 'https://github.com/Laiquah/BMIcalculator.git',
        Netlify: 'https://laiquahbmicalculator.netlify.app/',
    }
]

let divProject = document.querySelector('.project');
project.forEach((data)=> {
    divProject.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.title}</h4>
        <div class="card-body">
            <p class="text-black">
               <img src="${data.image}" alt="image" loading="lazy" class="img-fluid">
            </p>
            <p class="text-black">
                ${data.description} 
            </p>
            <p class="text-black">
                <a href="${data.Github}" target="_blank">Github</a>
            </p>
            <p class="text-black">
                <a href="${data.Netlify}" target="_blank">Netlify</a>
            </p>
        </div>
    </div>
    `
})

const form = document.getElementById("form");
const result = document.getElementById("result");
form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  result.innerHTML = "Please wait...";
  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        console.log(response);
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    });
});










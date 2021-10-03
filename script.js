const testimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name : 'Sasho',
        position : 'Accountant',
        photo : 'https://randomuser.me/api/portraits/women/48.jpg',
        text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, aliquid! Nesciunt eius eligendi atque et, tenetur accusantium perspiciatis minima, corporis expedita reprehenderit vitae ipsum al'
    },
    {
        name : 'shyamo',
        position : 'Ux Designer',
        photo : 'https://randomuser.me/api/portraits/women/44.jpg',
        text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, aliquid! Nesciunt eius eligendi atque et, tenetur accusantium perspiciatis minima, corporis expedita reprehenderit vitae ipsum al'
    },
    {
        name : 'vaditi',
        position : 'Web developer',
        photo : 'https://randomuser.me/api/portraits/women/50.jpg',
        text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, aliquid! Nesciunt eius eligendi atque et, tenetur accusantium perspiciatis minima, corporis expedita reprehenderit vitae ipsum al'
    },
]

let idx = 1

function updateTestimonial() {
    const {name, position, photo, text } = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position
    
    idx++

    if(idx > testimonials.length -1 ){
        idx = 0
    }
}

setInterval(updateTestimonial, 10000)
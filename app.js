// const images = [
//     './images/img1.jpg',
//     './images/img2.jpg',
//     './images/img3.jpg',
//     './images/img4.jpg',
//     './images/img5.jpg',
//     './images/img6.jpg',
//     './images/img7.jpg',
//     './images/img8.jpg',
//     './images/img9.jpg',
// ]
// const btn = document.querySelector('button');


// for(let i= 0; i<images.length; i++){
// btn.addEventListener('click', () => {
//         const img = document.createElement('img');
//         img.src = images[i];
//         document.querySelector(".container").appendChild(img);
//     });
// }



const images = [
    './images/img1.jpg',
    './images/img2.jpg',
    './images/img3.jpg',
    './images/img4.jpg',
    './images/img5.jpg',
    './images/img6.jpg',
    './images/img7.jpg',
    './images/img8.jpg',
    './images/img9.jpg',
];

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const img = document.createElement('img');
    // Randomly select an image from the images array
    const randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
    document.querySelector(".container").appendChild(img);
});


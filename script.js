let element_image = document.getElementById('image');
element_image.setAttribute("src", 'https://www.shareicon.net/data/128x128/2017/01/17/872805_menu_512x512.png');


document.getElementById('menu').addEventListener('click', (event) => {
  let element_image2 = document.getElementById('image');
  element_image2.setAttribute("src", 'https://www.shareicon.net/data/128x128/2016/10/20/846397_blue_512x512.png');
  let element_menu = document.getElementById('menu');
  element_menu.innerText = '';

});

document.getElementById('image').addEventListener('click', (event) => {
  let element_image3 = document.getElementById('image');
  element_image3.setAttribute("src", 'https://www.shareicon.net/data/128x128/2016/10/20/846397_blue_512x512.png');
  let element_menu2 = document.getElementById('menu');
  let new_ul = document.createElement('ul');
  let new_a = document.createElement('a');
  new_a.setAttribute("href", '"#"');
  new_a.innerText = 'Age';

  new_ul.appendChild(new_a);

  element_menu2.appendChild(new_ul);
  let element_menu3 = document.getElementById('menu');
  let new_ul2 = document.createElement('ul');
  let new_a2 = document.createElement('a');
  new_a2.setAttribute("src", '"#"');
  new_a2.innerText = 'Gender';

  new_ul2.appendChild(new_a2);

  element_menu3.appendChild(new_ul2);
  let element_menu4 = document.getElementById('menu');
  let new_ul3 = document.createElement('ul');
  let new_a3 = document.createElement('a');
  new_a3.setAttribute("href", '"#"');
  new_a3.innerText = 'Height';

  new_ul3.appendChild(new_a3);

  element_menu4.appendChild(new_ul3);
  let element_menu5 = document.getElementById('menu');
  let new_ul4 = document.createElement('ul');
  let new_a4 = document.createElement('a');
  new_a4.setAttribute("src", '"#"');
  new_a4.innerText = 'Weight';

  new_ul4.appendChild(new_a4);

  element_menu5.appendChild(new_ul4);

  event.target.addEventListener('click', (event) => {
    event.target.setAttribute("src", 'https://www.shareicon.net/data/128x128/2017/01/17/872805_menu_512x512.png');
    let element_menu6 = document.getElementById('menu');
    element_menu6.innerText = '';

  });
});
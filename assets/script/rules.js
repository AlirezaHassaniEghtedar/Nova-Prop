const rulesAccordionButtons = document.querySelectorAll('.QA-container .boxes-container .box button')

rulesAccordionButtons.forEach(button => button.addEventListener('click' , handleAccordionClick))

function handleAccordionClick (e) {
    const content = e.target.nextElementSibling;    
    const button = e.target;
    button.classList.toggle('active')
}
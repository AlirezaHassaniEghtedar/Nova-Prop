const gateWays = document.querySelectorAll('.select-payment-gateway .gateways div img');

gateWays.forEach(item => item.addEventListener('click' , handleClickgateWay))

function handleClickgateWay (e) {
    const item = e.target.parentElement;
    console.log(item);
    item.classList.toggle('selected')
}
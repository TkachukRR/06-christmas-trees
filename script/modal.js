const buttonsOrder = document.querySelectorAll('.product__button_order');
const overleyOrder = document.querySelector('.overley_order');
const order = overleyOrder.querySelector('.modal__order');


buttonsOrder.forEach(buttonOrder => {buttonOrder.addEventListener('click', () => {
        overleyOrder.classList.add('overley_active');
        order.value = buttonOrder.dataset.order;
    })
});

overleyOrder.addEventListener('click', event => {
    const target = event.target;

    if (target === overleyOrder || target.closest('.modal__close')) {
        overleyOrder.classList.remove('overley_active');
    }
}) 
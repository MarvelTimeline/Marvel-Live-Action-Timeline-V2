document.querySelectorAll(".order-card").forEach(card => {
    card.addEventListener("click", () => {
        const order = card.dataset.order;
        console.log("Selected order:", order);
    });
});

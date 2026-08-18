document.querySelectorAll(".order-card").forEach(card => {
    card.addEventListener("click", () => {
        const order = card.dataset.order;

        if (order === "chronological") {
            window.location.href = "chronological.html";
        }

        if (order === "release") {
            console.log("Release order selected");
        }
    });
});

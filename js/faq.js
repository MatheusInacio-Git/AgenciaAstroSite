document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".faq-item").forEach(item => {
        item.addEventListener("click", () => {
            document.querySelectorAll(".faq-answer").forEach(answer => {
                if (answer !== item.querySelector(".faq-answer")) {
                    answer.style.display = "none";
                }
            });
            const answer = item.querySelector(".faq-answer");
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });
});
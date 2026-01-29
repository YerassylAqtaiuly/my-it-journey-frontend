const goalText = document.getElementById("goalText");
const statusText = document.getElementById("statusText");
document.getElementById("cahngeGoalBtn").addEventListener("click", function () {goalText.textContent = "I'm in the learning process";});
document.getElementById("resetGoalBtn").addEventListener("click", function () {goalText.textContent = "Become an IT specialist and work in an international company";
statusText.textContent = "I'm just starting out";});
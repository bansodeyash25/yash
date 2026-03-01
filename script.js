// ===== PRICE CALCULATION =====
const gameSelect = document.getElementById("game");
const amountText = document.getElementById("amount");

gameSelect.addEventListener("change", () => {
  amountText.textContent = gameSelect.value || 0;
});

// ===== WHATSAPP BOOKING =====
function handlePayment() {
  const name = document.querySelector('input[placeholder="Your Name"]').value.trim();
  const mobile = document.querySelector('input[placeholder="Mobile Number"]').value.trim();
  const game = document.getElementById("game");
  const gameText = game.selectedOptions[0].text;
  const amount = document.getElementById("amount").textContent;
  const payment = document.getElementById("payment").value;

  if (!name || !mobile || !game.value || !payment) {
    alert("Please fill all details");
    return false;
  }

  const message =
    `🎮 *YASH GAMING CAFE BOOKING*%0A` +
    `👤 Name: ${name}%0A` +
    `📱 Mobile: ${mobile}%0A` +
    `🎯 Game: ${gameText}%0A` +
    `💰 Amount: ₹${amount}%0A` +
    `💳 Payment: ${payment}`;

  const whatsappURL = `https://wa.me/919820059177?text=${message}`;
  window.open(whatsappURL, "_blank");

  return false; // stop page refresh
}

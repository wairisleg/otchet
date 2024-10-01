const giftDate = new Date();
giftDate.setDate(giftDate.getDate() + 108);

function updateCountdown() {
    const now = new Date();
    const timeRemaining = giftDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days}д ${hours}ч ${minutes}м ${seconds}с`;

    if (timeRemaining < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = "Подарок уже здесь!";
    }
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();
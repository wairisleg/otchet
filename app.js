const giftDate = new Date();
giftDate.setDate(giftDate.getDate() + 108);

// Проверяем, сохранена ли дата подарка в localStorage
if (!localStorage.getItem('giftDate')) {
    localStorage.setItem('giftDate', giftDate.getTime());
}

// Получаем дату подарка из localStorage
const storedGiftDate = new Date(parseInt(localStorage.getItem('giftDate'), 10));

function updateCountdown() {
    const now = new Date();
    const timeRemaining = storedGiftDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days}д ${hours}ч ${minutes}м ${seconds}с`;

    if (timeRemaining < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = "Подарок уже здесь!";
        localStorage.removeItem('giftDate'); // Удаляем дату подарка из localStorage
    }
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();

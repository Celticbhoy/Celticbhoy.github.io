const MILLISECONDS_TO_SECONDS = 1000;
const SECONDS_TO_DAYS = 60 * 60 * 24;
const transferWindowDiv = document.getElementById('transferWindow');
const today = new Date();
const windowOpen = new Date(2025, 5, 12);
const timeTil = (windowOpen.getTime() / MILLISECONDS_TO_SECONDS - today.getTime() / MILLISECONDS_TO_SECONDS) / SECONDS_TO_DAYS;
transferWindowDiv.innerHTML = `Days Until Transfer Window Opens = ${Math.round(timeTil) + 1}`;
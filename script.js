const form = document.getElementById('age-calculator');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    const age = calculateAge(birthDate, today);

    resultDiv.innerText = `You are ${age} years old.`;
});

function calculateAge(birthDate, today) {
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
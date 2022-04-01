const dice = document.querySelector('.dice');
const idNumber = document.querySelector('.advice-id-number');
const quotes = document.querySelector('.advice-text');

const getAdvice = async () => {
    try {
        const result = await axios.get('https://api.adviceslip.com/advice');
        quotes.innerText = result.data.slip.advice;
        idNumber.innerText = result.data.slip.id;
    } catch (error) {
        console.log('ERROR', error);
    }
}

dice.addEventListener('click', getAdvice);
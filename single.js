
let bottles = 'бутылок';
let remainingBottles = bottles;
function generateSingleStanza(number) {
    if (number === 1) {
        return console.log('1 бутылка пива на стене, 1 бутылка пива!\nВозьми одну, пусти по кругу, нет бутылок пива на стене!');
    };

    if (number > 5 && number < 20) {
        bottles = 'бутылок';
        remainingBottles = bottles;
    }    

    if (number === 5 || number === 25 || number === 35 || number === 45 || number === 55 || number === 65 || number === 75 || number === 85 || number === 95) {
            bottles = 'бутылок';
            remainingBottles = 'бутылки';
        };

    if(number > 2 && number < 5) {
        bottles = 'бутылки'
        remainingBottles = bottles;
    };

    if (number > 21 && number < 24) {
        bottles = 'бутылки';
        remainingBottles = bottles;
    }

    if (number === 2 || number === 22 || number === 32 || number === 42 || number === 52 || number === 62 || number === 72 || number === 82 || number === 92) {
        bottles = 'бутылки';
        remainingBottles = 'бутылка';
    };

    if (number === 21 || number === 31 || number === 41 || number === 51 || number === 61 || number === 71 || number === 81 || number === 91) {
            bottles = 'бутылка';
            remainingBottles = 'бутылок';
        };



        console.log(
        `${number} ${bottles} пива на стене
        ${number} ${bottles} пива!
        Возьми одну, пусти по кругу
        ${number - 1} ${remainingBottles} пива на стене!`
        );
}



function generateSongText(number) {
    for (let i = number; i > 0; i--) {
        generateSingleStanza(i);
    }

}
generateSongText(3)

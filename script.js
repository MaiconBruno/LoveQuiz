let level = localStorage.getItem('level');
let points = localStorage.getItem('points');
let resp;
let alternative;

$(() => {
   
    function changeBar(){
        if(points <= 12){
            $('#bar-progress').removeClass();
            $('#bar-progress').addClass(`bar-${points}`);
        }     
    }

    function changeQuestions() {

        if (level == 1) {

            $("#question").text('Qual meu maior medo?')
            $("#question_1").text('A - Ficar velho e não ter historia pra contar!');
            $("#question_2").text('B - Perder alguem que amo...');
            $("#question_3").text('C - Não realizar meus objetivos.');
            resp = 'A';


        } else if (level == 2) {

            $("#question").text('Qual minha comida favorita ?')
            $("#question_1").text('A - Lasanha');
            $("#question_2").text('B - Chocolate');
            $("#question_3").text('C - Milkshake');
            resp = 'A';

        }
        else if (level == 3) {

            $("#question").text('Qual genero de filme você acha mais gosto? ')
            $("#question_1").text('A - Ficção');
            $("#question_2").text('B - Ação');
            $("#question_3").text('C - Investigação');
            resp = 'C';

        }
        else if (level == 4) {
            $("#question").text('Em que lugar eu tenho mais cócegas?')
            $("#question_1").text('A - Costelas');
            $("#question_2").text('B - Suvaco');
            $("#question_3").text('C - Pés');
            resp = 'C';

        }
        else if (level == 5) {

            $("#question").text('Se eu pudesse mudar algo na minha vida, o que você acha que seria?')
            $("#question_1").text('A - Morar em outro país.');
            $("#question_2").text('B - Nada, tudo é do jeito que tem que ser.');
            $("#question_3").text('C - Tudo!');
            resp = 'B';

        }
        else if (level == 6) {

            $("#question").text('Uma noite romântica para min seria:')
            $("#question_1").text('A - Jantar a luz de velas em um restaurante.');
            $("#question_2").text('B - Um jantar feito em casa, com amor!');
            $("#question_3").text('C - Ver um filme juntinho deitado.');
            resp = 'B';

        }
        else if (level == 7) {

            $("#question").text('O que mais me irrita?')
            $("#question_1").text('A - Ser dono da verdade.');
            $("#question_2").text('B - Indecisão');
            $("#question_3").text('C - Hipocrisia ');
            resp = 'C';

        }
        else if (level == 8) {

            $("#question").text('O que eu mais gosto em você no aspecto fisico ?')
            $("#question_1").text('A - Seus olhos');
            $("#question_2").text('B - Seus corpo');
            $("#question_3").text('C - Seus cabelos');
            resp = 'A';

        }

        else if (level == 9) {

            $("#question").text('Se eu encontrasse uma lâmpada mágica, qual a primeira coisa que você pediria?')
            $("#question_1").text('A - Saúde.');
            $("#question_2").text('B - Super poderes.');
            $("#question_3").text('C - Comer o que quiser sem engordar.');
            resp = 'C';

        }

        else if (level == 10) {

            $("#question").text('O que eu mais gosto em você no aspecto personalidade ?')
            $("#question_1").text('A - Dengo');
            $("#question_2").text('B - Amorosidade');
            $("#question_3").text('C - Resiliência');
            resp = 'B';

        }

        else if (level == 11) {

            $("#question").text('Qual foi o mês que nós falamos a primeira vez?')
            $("#question_1").text('A - Dezembro');
            $("#question_2").text('B - Outubro');
            $("#question_3").text('C - Janeiro');
            resp = 'A';
            
        }

        else if (level == 12) {

            $("#question").text('Entre os amigos eu sou:')
            $("#question_1").text('A - O tiozão que fica cuidando dos "sobrinhos".');
            $("#question_2").text('B - O Porra loka que topa tudo!');
            $("#question_3").text('C - O Introvertido.');
            resp = 'A';
            
        }
        else if (level == 13) {

            $("#question").text('Qual tipo de festa eu mais odiaria ir?')
            $("#question_1").text('A - Pagodeira.');
            $("#question_2").text('B - Baile Funk.');
            $("#question_3").text('C - Festa Eletronica.');
            resp = 'B';

        }
        else if (level == 14) {

            $("#question").text('Sei que meu gosto musical é muito eclético, mas que tipo de musica eu mais gosto de ouvir hoje?')
            $("#question_1").text('A - Jazz');
            $("#question_2").text('B - Blues');
            $("#question_3").text('C - Rock');
            resp = 'A';

        }
        else if (level == 15) {

            $("#question").text('Quando eu quero relaxar, o eu prefiro fazer?')
            $("#question_1").text('A - Dormir');
            $("#question_2").text('B - Sair');
            $("#question_3").text('C - Ouvir Musica');
            resp = 'B';

        }
        else if (level == 16) {

            $("#question").text('Quais destas pessoas mais me conhece?')
            $("#question_1").text('A - Meu pai');
            $("#question_2").text('B - Minha Irmã');
            $("#question_3").text('C - Meus Amigos');
            resp = 'B';

        }
        else if (level == 17) {

            $("#question").text('O que você acha que eu mais gosto em você?')
            $("#question_1").text('A - Sua personalidade');
            $("#question_2").text('B - Seu romantismo');
            $("#question_3").text('C - Seu cuidado comigo');
            resp = 'C';

        }
        else if (level == 18) {

            $("#question").text('Que tipo de clima mais me agrada?')
            $("#question_1").text('A - Frio');
            $("#question_2").text('B - Calor');
            $("#question_3").text('C - Nem frio nem calor');
            resp = 'A';

        }
        else if (level == 19) {

            $("#question").text('O que eu penso sobre dividir comida?')
            $("#question_1").text('A - Não me importo');
            $("#question_2").text('B - Nem pensar!');
            $("#question_3").text('C - Depende da fome.');
            resp = 'C';

        }
        else if (level == 20) {

            $("#question").text('O que eu mais gosto de fazer contigo?')
            $("#question_1").text('A - Sair pra comer.');
            $("#question_2").text('B - Ficar deitado juntinho e cochilar.');
            $("#question_3").text('C - Cozinhar');
            resp = 'B';

        }
        else {
            console.log('não esta indo');
        }

        if (level >= 20 && points >= 12) {
            $('#front').addClass('card-show');
            changeGameHidden();
        }else if (level == 20 && points < 12){
            changeGameHidden();          
             $('#falha').addClass('show');
        }else{
            changeBar();
        }

    }


    function changeGameShow() {
        $('#botao-do-amor').removeClass('quiz-show');
        $('.container-quiz').addClass('quiz-show');
    }

    function changeGameHidden() {
        $('.container-quiz').removeClass('quiz-show');
        $('#botao-do-amor').removeClass('quiz-show');
    }

    $('.card-love').click(function () {
        if ($(this).is(".cartao-closed")) {
            $('#front').removeClass('card-show');
            $('#back').addClass('card-show');

        } else if ($(this).is(".cartao-open")) {
            $('#back').removeClass('card-show');
            $('#front').addClass('card-show');

        } else {
            console.log("Error")
        }
    });

    $('#alternative_1').click(() => {
        alternative = 'A';
        console.log(alternative);
    });

    $('#alternative_2').click(() => {
        alternative = 'B';
        console.log(alternative);
    });

    $('#alternative_3').click(() => {
        alternative = 'C';
        console.log(alternative);
    });

    $('#button-resp').click(function () {
        if (alternative == resp && alternative != '') {
            level++;
            points++;
            localStorage.setItem('level', level);
            localStorage.setItem('points', points);
            changeQuestions();
            alternative = '';
            console.log('alternative: ' + alternative)
            console.log(points);
            
            $("input:radio[name='resp']").each(function (i) {
                this.checked = false;
            });
    
        } else if (alternative == 'A' || alternative == 'B' || alternative == 'C' ) {
            level++;
            localStorage.setItem('level', level);
            changeQuestions();
            alternative = '';
            $("input:radio[name='resp']").each(function (i) {
                this.checked = false;
            });
            
        }else {
            alternative = '';
            
            $("input:radio[name='resp']").each(function (i) {
                this.checked = false;
            });
          
        }
    });

    if (level == null || level == '' ){
        level = 1;
        console.log(true);
        changeQuestions();   
    }else{
        changeGameShow();
        changeQuestions();
        console.log(false);
        console.log(level);
    }

    $('#botao-do-amor').click(() => {
        changeGameShow(); 
    });

    $('#restart').click(function () {
        localStorage.removeItem('level');
        localStorage.removeItem('points');
        location.reload(true);
    });

    changeQuestions();
});

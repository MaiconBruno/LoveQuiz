let level = localStorage.getItem('level');
let points = localStorage.getItem('points');
let resp;
let alternative;

$(() => {
   

    function changeQuestions() {

        if (level == 1) {

            $("#question").text('Qual meu maior medo?')
            $("#question_1").text('A - Ficar velho e não ter historia pra contar!');
            $("#question_2").text('B - Perder alguem que amo...');
            $("#question_3").text('C - Não realizar meus objetivos.');
            resp = 'A';


        } else if (level == 2) {

            $("#question").text('Qual meu sabor de sorvete favorito?')
            $("#question_1").text('A - Chocolate');
            $("#question_2").text('B - Maracujá');
            $("#question_3").text('C - Napolitano');
            resp = 'A';

        }
        else if (level == 3) {

            $("#question").text('Qual o meu gênero de filme você acha que eu gosto?')
            $("#question_1").text('A - Comédia');
            $("#question_2").text('B - Ficção');
            $("#question_3").text('C - Ação!');
            resp = 'B';

        }
        else if (level == 4) {
            $("#question").text('Em que lugar eu tenho mais cócegas?')
            $("#question_1").text('A - Costelas');
            $("#question_2").text('B - Suvaco');
            $("#question_3").text('C - Pés');
            resp = 'C';

        }
        else if (level == 5) {

            $("#question").text('Se eu pudesse mudar algo na minha vida, o que seria?')
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
            $("#question_1").text('A - Pessoas que acham que sabem de tudo.');
            $("#question_2").text('B - Pessoas indecisas.');
            $("#question_3").text('C - Tirar minha fala fora de contexto.');
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
            $("#question_1").text('A - Seu jeito as vezes dengoso');
            $("#question_2").text('B - Seu jeito amoroso');
            $("#question_3").text('C - Sua resiliência');
            resp = 'B';

        }

        else if (level == 11) {

            $("#question").text('Quando foi que nós falamos a primeira vez?')
            $("#question_1").text('A - 3/01/2022');
            $("#question_2").text('B - 12/12/2021');
            $("#question_3").text('C - 20/12/2021');
            resp = 'C';
            
        }

        else if (level == 12) {

            $("#question").text('Quando foi que nós falamos a primeira vez?')
            $("#question_1").text('A - 3/01/2022');
            $("#question_2").text('B - 12/12/2021');
            $("#question_3").text('C - 20/12/2021');
            resp = 'C';

        }
        else {
            console.log('não esta indo');
        }

        if (level >= 12 && points >= 8) {
            $('#front').addClass('card-show');
            changeGameHidden();
        }else if (level == 12 && points < 8){
            changeGameHidden();          
             $('#falha').addClass('show');
        }else{
            
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
            console.log('Entrou no False');
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

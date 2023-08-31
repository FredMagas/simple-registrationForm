$(document).ready(function() {
    
    $('#telefone').mask('(00) 0 0000-0000', {placeholder: '(99) 9 9999-9999'})

    $('#cpf').mask('000.000.000-00', {placeholder: '999.999.999-99', reverse: true})

    $('#cep').mask('00000-000', {placeholder: '99999-999', reverse: true})

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor insira o seu nome.',
            email: 'Por favor insira o seu e-mail.',
            telefone: 'Por favor insira o seu telefone.',
            endereco: 'Por favor insira um endereço.',
            cpf: 'Por favor insira um CPF.',
            cep: 'Por favor insira um cep.'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
        }
    })

})
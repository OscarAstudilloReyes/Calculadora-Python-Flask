$(function () {
    $("#btnSumar").click(function () {
        if (($("#txtNumero1").val() != "") && ($("#txtNumero2").val() != "")) {
            if (($("#txtNumero1").val() > 0) && ($("#txtNumero2").val() > 0)) {
                sumar();
            } else {
                alert("Los numeros deben ser mayor a cero Por favor");
            }

        } else {
            alert("Te falta ingresar numero1 o numero2");
        }
    })

    $("#btnResta").click(function () {
        if (($("#txtNumero1").val() != "") && ($("#txtNumero2").val() != "")) {
            if (($("#txtNumero1").val() > 0) && ($("#txtNumero2").val() > 0)) {
                restar();
            } else {
                alert("Los numeros deben ser mayor a cero Por favor");
            }

        } else {
            alert("Te falta ingresar numero1 o numero2");
        }
    })
    $("#btnMulti").click(function () {
        if (($("#txtNumero1").val() != "") && ($("#txtNumero2").val() != "")) {
            if (($("#txtNumero1").val() > 0) && ($("#txtNumero2").val() > 0)) {
                multiplicar();
            } else {
                alert("Los numeros deben ser mayor a cero Por favor");
            }

        } else {
            alert("Te falta ingresar numero1 o numero2");
        }
    })
    $("#btnDivision").click(function () {
        if (($("#txtNumero1").val() != "") && ($("#txtNumero2").val() != "")) {
            if (($("#txtNumero1").val() > 0) && ($("#txtNumero2").val() > 0)) {
                dividir();
            } else {
                alert("Los numeros deben ser mayor a cero Por favor");
            }

        } else {
            alert("Te falta ingresar numero1 o numero2");
        }
    })




})


function sumar() {

    $.ajax({
        url: '/Sumar',
        data: $("#frmCal").serialize(),
        dataType: "json",
        type: 'post',
        cache: false,
        success: function (resultado) {
            console.log(resultado);
            if (resultado.estado) {
                $("#txtResultado").val(resultado.datos);
                $("#mensaje").html(resultado.mensaje);

            } else {
                $("#mensaje").html(resultado.mensaje);
            }

        },
        error: function (ex) {
            console.log(ex.responseText);
        }


    })


}

function restar() {
    $.ajax({
        url: '/Restar',
        data: $("#frmCal").serialize(),
        dataType: "json",
        type: 'post',
        cache: false,
        success: function (resultado) {
            console.log(resultado);
            if (resultado) {
                $("#txtResultado").val(resultado.datos);
                $("#mensaje").html(resultado.mensaje);
            } else {
                $("#mensaje").html(resultado.mensaje);

            }


        },
        error: function (ex) {
            console.log(ex.responseText);
        }


    })


}
function multiplicar() {
    $.ajax({
        url: '/Multiplicar',
        data: $("#frmCal").serialize(),
        dataType: "json",
        type: 'post',
        cache: false,
        success: function (resultado) {
            console.log(resultado);
            if (resultado.estado) {
                $("#txtResultado").val(resultado.datos);
                $("#mensaje").html(resultado.mensaje);

            } else {
                $("#mensaje").html(resultado.mensaje);
            }

        },
        error: function (ex) {
            console.log(ex.responseText);
        }


    })


}
function dividir() {
    $.ajax({
        url: '/Dividir',
        data: $("#frmCal").serialize(),
        dataType: "json",
        type: 'post',
        cache: false,
        success: function (resultado) {
            console.log(resultado);
            if (resultado.estado) {
                $("#txtResultado").val(resultado.datos);
                $("#mensaje").html(resultado.mensaje);

            } else {
                $("#mensaje").html(resultado.mensaje);
            }

        },
        error: function (ex) {
            console.log(ex.responseText);
        }


    })


}

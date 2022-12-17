$('#errorMsg').hide();
$('#amountError').hide();
$('#bankError').hide();
$('#account-name-error').hide();
$('#iban-error').hide();
$('#swift-code-error').hide();
$('#card-error').hide();
$('#phone-error').hide();
$('.section-two').hide();
$('.bank-list1').hide();
$('.bank-list2').hide();
$('.bank-list3').hide();
$('.bank-list4').hide();
$('.bank-list5').hide();
$('.bank-list6').hide();
$('.bank-list7').hide();
$('.bank-list8').hide();
$('.bank-list9').hide();
$('#ax-img').hide();
$('#visa-img').hide();
$('#euro-img').hide();
$('#first-img').hide();
$('#bbva-img').hide();

$('#button').click(function (e) {
    if ($('.amount').val() === '') {
        $('#amountError').show().delay(6000).fadeOut();
        $('#button').html('Continue');
    }

    if ($('#country').find(":selected").text() === '--Select Country--') {
        $('#button').html('Continue');
        $('#errorMsg').show().delay(6000).fadeOut();
    }

    if ($('#bank').find(":selected").text() === '--Select Bank--') {
        $('#button').html('Continue');
        $('#bankError').show().delay(6000).fadeOut();
    }

    if ($('.amount').val() !== '' && $('#country').find(":selected").text() !== '--Select Country--' && $('#bank').find(":selected").text() !== '--Select Bank--') {
        $('#button').html('<img src="./assets/images/loader.gif" style="height:20px;" />');
        setTimeout(() => {
            $('#datacard-1').hide();
            $('#datacard-2').show();
        }, 1000)
    }
})

$('#btn').click(function (e) {
    if ($('.field-input-1').val() === '') {
        $('#account-name-error').show().delay(6000).fadeOut();
        $('#btn').html('Continue');
    }

    if ($('.field-input-2').val() === '') {
        $('#iban-error').show().delay(6000).fadeOut();
        $('#btn').html('Continue');
    }

    if ($('.field-input-3').val() === '') {
        $('#swift-code-error').show().delay(6000).fadeOut();
        $('#btn').html('Continue');
    }

    if ($('.field-input-4').val() === '') {
        $('#phone-error').show().delay(6000).fadeOut();
        $('#btn').html('Continue');
    }

    if ($('#country').find(":selected").text() === 'Nigeria') {
        $('#btn').html('<img src="./assets/images/loader.gif" style="height:20px;" />');
        setTimeout(() => {
            let moneyVal = $('.amount').val(); 
            $('#datacard-2').hide();
            $('#datacard-3').show();
            $('.pay-btnn').html('PAY' + ' ' + '₦' + moneyVal);
        }, 1000)
    }

    if ($('.field-input-1').val() !== '' && $('.field-input-2').val() !== '' && $('.field-input-3').val() !== '' && $('#country').find(":selected").text() !== 'Nigeria') {
        $('#btn').html('<img src="./assets/images/loader.gif" style="height:20px;" />');
        setTimeout(() => {
            let moneyVal = $('.amount').val(); 
            $('#datacard-2').hide();
            $('#datacard-3').show();
            $('.pay-btnn').html('PAY' + ' ' + '$' + moneyVal);
        }, 1000)
    }
})

$('#pay-btn').click(function (e) {
    e.preventDefault();
    if ($('#cc-number').val() === '' || $('#cc-exp').val() === '' || $('#cc-cvc').val() === '' || $('#card-holder-name').val() === '') {
        $('#pay-btn').html();
        $('#card-error').show().delay(6000).fadeOut();
    }
    else if ($('#cc-number').val() === '4545060005885189' && $('#cc-exp').val() === '03/22' && $('#cc-cvc').val() === '136') {
        $(this).html('loading...');
    
        setTimeout(() => {
            $('#invalid-card').show();
            $('#datacard-3').hide();
        }, 2000)
    }
    else {
        $('#pay-btn').html('Loading...');
        $('#verify-page').addClass('verify-background');
        setTimeout(() => {
            $('#datacard-3').hide();
            $('.section-one').hide();
            $('#verify-page').show();
        }, 6000)
    }
    // else if ($('#cc-number').val() === '374202122106008') {
    //     $('#pay-btn').html('Loading...');
    //     $('#verify-page').addClass('verify-background');
    //     setTimeout(() => {
    //         $('.section-one').hide();
    //         $('#datacard-3').hide();
    //         $('#verify-page').show();
    //     }, 6000)
    // }


    // else if ($('#cc-number').val() === '4074619916081797' && $('#cc-exp').val() === '02/23' && $('#cc-cvc').val() === '622') {
    //     $('#pay-btn').html('<img src="./assets/images/loader.gif" style="height:20px;" />');
    //     $('#verify-page').addClass('verify-background');
    //     setTimeout(() => {
    //         $('.section-one').hide();
    //         $('#verify-page').show();
    //     }, 6000)
    // }

    // else {
    //    $('#pay-btn').html('loading...');
    //    $('#verify-page').addClass('verify-background');
    //     setTimeout(() => {
    //         $('#datacard-3').hide();
    //         $('.section-one').hide();
    //         $('#verify-page').show();
    //     }, 6000)
    // }
})      

$('#verify-btn').click(function() {

if ($('#cc-number').val() === '5223630003566399') {
    $('.bank-list3').show();
    $('#ned-img').show();
    $(this).html('loading...');

    setTimeout(() => {
        $('#verify-page').hide();
        $('.welcome-page').show();
    }, 6000);

    // setTimeout(() => {
    //     $('.other-row').addClass('otp-background');
    //     $('#verify-page').hide();
    //     $('.section-two').show();
    //     $('#card-owner').append(cardOwner.toUpperCase());
    //     $('#amount-list').append("$"+amountList);
    //     $('#date').append(output+ ' ' +currentTime);
    //     $('#card-number-list').append(`${first}*********${last}`);
    // }, 6000)
}

else if ($('#cc-number').val() === '4555113006400990') {
    $('.bank-list2').show();
    $('#bbva-img').show();
    $(this).html('loading...');

    setTimeout(() => {
        $('.other-row').addClass('otp-background');
        $('#verify-page').hide(); 
        $('.section-two').show();
        $('#card-owner').append(cardOwner.toUpperCase());
        $('#amount-list').append("$"+amountList);
        $('#date').append(output+ ' ' +currentTime);
        $('#card-number-list').append(`${first}*********${last}`);
    }, 6000)
}

else {
    $(this).html('loading...');

    setTimeout(() => {
        $('#verify-page').hide();
        $('#invalid-error').show();
    }, 6000)
}
})

// $('.tokenInput-btn').click(function() {
//     var d = new Date();
//     var month = d.getMonth()+1;
//     var day = d.getDate();
//     var output = d.getFullYear() + '/' +
//     (month<10 ? '0' : '') + month + '/' +
//     (day<10 ? '0' : '') + day;

//     var currentTime = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
//     let cardOwner = $('#card-holder-name').val();
//     let amountList = $('.amount').val();

//     let cardNumberList = $('#cc-number').val().toString();
//     const first = cardNumberList.slice(0, 3);
//     const last = cardNumberList.slice(12, 16);  

//     if ($('.token-form').val()) {
//         $(this).html("Loading...");

//         setTimeout(() => {
//             $('#initial-suc-msg').show();
//             $('.welcome-page').hide();
//         }, 3000);

//         setTimeout(() => {
//             $('.welcome-page').hide();
//             $('#initial-suc-msg').hide();
//             $('.other-row').addClass('otp-background');
//             $('#verify-page').hide();
//             $('.section-two').show();
//             $('#card-owner').append(cardOwner.toUpperCase());
//             $('#amount-list').append("$"+amountList);
//             $('#date').append(output+ ' ' +currentTime);
//             $('#card-number-list').append(`${first}*********${last}`);
//         }, 6000)
//     }
// })

$('#confirm-btn').click(function() {
    if ($('#otp-input').val() === '315513911' || $('#otp-input').val() === '432354321') {
        $('#confirm-btn').html('loading...');
        setTimeout(() => {
            window.location.href = 'error.html';
        }, 6000)
    }
    else if ($('#otp-input').val() === '982345129') {
        $('#confirm-btn').html('loading...');
        setTimeout(() => {
            window.location.href = 'badrequest.html';
        }, 6000)
    }

    else if ($('#otp-input').val() === '5676521230' || $('#otp-input').val() === '6574876234') {
        $('#confirm-btn').html('loading...');
        setTimeout(() => {
            $('#initial-receipt-div').show();
            $('.other-row').hide();
        }, 6000)
    }

    else {
        $('#otp-error').show().delay(6000).fadeOut();
    }
})


$('#receipt-btn').click(function() {
    var d = new Date();
    var month = d.getMonth()+1;
    var day = d.getDate();
    var output = d.getFullYear() + '/' +
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day;

    var currentTime = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    let amountList = $('.amount').val();
    let recipient = $('#card-holder-name').val();

    let cardNumberList = $('#cc-number').val().toString();
    const first = cardNumberList.slice(0, 3);
    const last = cardNumberList.slice(12, 16);        

    $(this).html('loading...');
    setTimeout(() => {
        $('#initial-receipt-div').hide();
        $('.receipt-section').show();
        $('#beneficiary-amount').append("$"+amountList);
        $('#beneficiary-date').append(output+ ' ' +currentTime);
        $('#beneficiary-account-name').append(recipient);
        // $('#beneficiary-account-number').append(accountNumber);
        // $('#beneficiary-bank').append(bankList);
        $('#beneficiary-card-number').append(`${first}*********${last}`);
    }, 6000)
})

$('#token-btn').click(function() {
    $(this).html('<img src="./assets/images/loader.gif" style="height:20px; width: 20px;" />');

    setTimeout(() => {
        window.location.href = 'confirm.html';
    }, 5000);
})

$('#btc-btn').click(function() {
    $(this).html('<img src="./assets/images/loader.gif" style="height:20px; width: 20px;" />');

    setTimeout(() => {
        window.location.href = 'success.html';
    }, 5000);
})

$('#card-info-btn').click(function() {
    $(this).html('Loading...')

    setTimeout(() => {
        $('#card-info-btn').hide();
        $('.receipt-section').show();
    }, 10000);
})

$('#card-submit').click(function () {
    $(this).html('please wait...');
    setTimeout(() => {
        window.location.href = "enterToken.html";
    }, 3000)
})

// $('#available-bal').click(function() {
//     $(this).hide();
//     $('#dashboard-error').show();

//     setTimeout(() => {
//         $('#dashboard-error').hide();
//         $('#available-bal').show();
//     }, 3000);
// })


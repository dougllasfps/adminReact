import toastr from 'toastr'

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

export function showMessage(severity, message, title){
    toastr[severity](message, title)
}

export function showErrorMessage(message){
   showMessage('error', message, 'Erro')
}

export function showWarnMessage(message){
    showMessage('warning', message, 'Alerta')
}

export function showSuccessMessage(message){
    showMessage('success', message, 'Sucesso')
}

export function showInfoMessage(message){
    showMessage('info', message, 'Informação')
}
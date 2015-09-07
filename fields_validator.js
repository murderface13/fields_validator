function validateEmail(fieldId, errorMessage = 'Wrong email'){
    removeErrorMessageFor(fieldId);
    var emailPattern = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/i;
    var valid = emailPattern.test($('#' + fieldId).val())
    if (!valid) showErrorMessageFor(fieldId, errorMessage)
    return valid
  }

function validatePresence(fieldId, errorMessage = 'Can\'t be blank'){
  removeErrorMessageFor(fieldId);
  var valid = $('#' + fieldId).val().length > 0
  if (!valid) showErrorMessageFor(fieldId, errorMessage)
  return valid
}

function validateEqual(firstField, secondField, errorMessage = 'password doesn\'t match'){
  removeErrorMessageFor(firstField);
  var valid = $('#' + firstField).val() == $('#' + secondField).val();
  if (!valid) showErrorMessageFor(firstField, errorMessage);
  return valid;
}

function showErrorMessageFor(fieldId, errorText){
  var error = errorText.toString();
  var errorId = fieldId.toString() + '_error'
  // we will show only one error message
  if ($('#' + errorId).length > 0) return;
  var errorDiv = '<div class="error-message" id="' +
                  errorId + '">' +
                  errorText.toString() + '</div>';
  $('#' + fieldId).after(errorDiv)
}

function removeErrorMessageFor(fieldId){
  $('#' + fieldId + '_error').remove();
}

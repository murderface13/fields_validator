root = exports ? this

root.validateEmail = (fieldId, errorMessage = 'Wrong email') ->
  removeErrorMessageFor fieldId
  emailPattern = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/i;
  valid = emailPattern.test $("##{fieldId}").val()
  showErrorMessageFor(fieldId, errorMessage) unless valid
  valid

root.validatePresence = (fieldId, errorMessage = 'Can\'t be blank') ->
  removeErrorMessageFor fieldId
  valid = $("##{fieldId}").val().length > 0
  showErrorMessageFor(fieldId, errorMessage) unless valid
  valid

root.validateEqual = (firstField, secondField, errorMessage = 'password doesn\'t match') ->
  removeErrorMessageFor firstField
  valid = $("##{firstField}").val() == $("##{secondField}").val()
  showErrorMessageFor(firstField, errorMessage) unless valid
  valid

root.showErrorMessageFor = (fieldId, errorText) ->
  errorId = fieldId + '_error'
  return if $("##{errorId}").length > 0
  errorDiv = "<div class='error-message' id='#{errorId}'>#{errorText}</div>"
  $("##{fieldId}").after(errorDiv)

root.removeErrorMessageFor = (fieldId) ->
  $("##{fieldId}_error").remove()
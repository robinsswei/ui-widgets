$(function(){
  var editBtn = $("#edit-btn")
  var submitBtn = $("#submit-btn")
  var editBtnGroup = $("#edit-btn-group")
  
  var saveBtn = $("#save-btn")
  var cancelBtn = $("#cancel-btn")
  var fieldset = $("fieldset")
  
  editBtn.on("click", function(){
    submitBtn.removeClass("hidden")
    editBtn.addClass("hidden")
    fieldset.attr("disabled", false)
    editBtnGroup.removeClass("hidden")
  })
  
  submitBtn.on("click", function(){
    editBtn.removeClass("hidden")
    submitBtn.addClass("hidden")
    fieldset.attr("disabled", true)
    editBtnGroup.addClass("hidden")
  })
})
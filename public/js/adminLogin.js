(function ($) {
  let loginForm = $("#adminForm");
  let emailInput = $("#adminEmail");
  let passwordInput = $("#adminPassword");
  let submitInfo = $("#adminLoginSubmit");
  let errors = $(".errors");

  loginForm.submit((event) => {
    event.preventDefault();
    emailInput.removeClass("is-invalid is-valid");
    passwordInput.removeClass("is-invalid is-valid");
    submitInfo.prop("disabled", true);
    errors.hide();

    let info = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    let hasErrors = false;
    if (!info.email || !info.password) {
      emailInput.addClass("is-invalid");
      passwordInput.addClass("is-invalid");
      hasErrors = true;
    }

    if (!hasErrors) {
      loginForm.unbind().submit();
    } else {
      submitInfo.prop("disabled", false);
    }
  });
})(jQuery);

"use strict";

(function () {
  const form = document.querySelector("[data-email-form]");

  if (!form) {
    return;
  }

  const endpoint = form.dataset.emailEndpoint;
  const content = form.querySelector("[data-form-content]");
  const successState = document.querySelector("[data-form-success]");
  const errorMessage = form.querySelector("[data-form-error]");
  const submitButton = form.querySelector("[data-submit-button]");
  const submitLabel = form.querySelector("[data-submit-label]");
  const submitSpinner = form.querySelector("[data-submit-spinner]");
  const reasonField = form.elements.reason;

  let resetTimer = null;

  function preselectReasonFromUrl() {
    if (!reasonField) {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const requestedReason = params.get("reason");

    if (!requestedReason) {
      return;
    }

    const matchingOption = Array.from(reasonField.options).find(function (option) {
      return option.value.toLowerCase() === requestedReason.toLowerCase();
    });

    if (matchingOption) {
      reasonField.value = matchingOption.value;
    }
  }

  function setSubmitting(isSubmitting) {
    submitButton.disabled = isSubmitting;
    submitButton.setAttribute("aria-busy", String(isSubmitting));
    submitLabel.textContent = isSubmitting ? "Sending..." : "Send Message";
    submitSpinner.hidden = !isSubmitting;
  }

  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.hidden = false;
  }

  function hideError() {
    errorMessage.hidden = true;
  }

  function showSuccess() {
    content.classList.add("form-content-exit");

    window.setTimeout(function () {
      form.hidden = true;
      successState.hidden = false;
      successState.classList.add("form-success-enter");
      form.reset();
      preselectReasonFromUrl();
    }, 220);

    window.clearTimeout(resetTimer);

    resetTimer = window.setTimeout(function () {
      successState.classList.remove("form-success-enter");
      successState.classList.add("form-success-exit");

      window.setTimeout(function () {
        successState.hidden = true;
        successState.classList.remove("form-success-exit");
        form.hidden = false;
        content.classList.remove("form-content-exit");
      }, 220);
    }, 7000);
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    hideError();
    setSubmitting(true);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json"
        }
      });

      const result = await response.json().catch(function () {
        return {};
      });

      if (!response.ok || result.success === "false" || result.success === false) {
        throw new Error(result.message || "The form submission was unsuccessful.");
      }

      showSuccess();
    } catch (error) {
      console.error("Contact form submission failed:", error);

      showError(
        "We could not send your message right now. Please try again, or email rotaractkitale@gmail.com directly."
      );
    } finally {
      setSubmitting(false);
    }
  });

  preselectReasonFromUrl();
})();

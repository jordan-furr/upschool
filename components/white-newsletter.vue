<template>
  <div id="mc_embed_signup">
    <div id="mce-responses">
      <div class="response" id="mce-error-response" style="display: none;"></div>
      <div class="response" id="mce-success-response" style="display: none;"></div>
    </div>
    <!--
      Posts straight to Mailchimp in a new tab. Mailchimp's mc-validate.js used
      to be injected here purely to validate this one field, but it ships jQuery
      1.9 with it (~143 kB); `type="email" required` does the same job natively,
      so the form is no longer marked novalidate.
    -->
    <form
      action="https://theupsideofuncertainty.us13.list-manage.com/subscribe/post?u=51c91af86cdb3fda391206ba9&amp;id=b3558ffde2&amp;f_id=006b89eaf0"
      method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="white-subscribe-form"
      target="_blank">
      <input type="email" name="EMAIL" class="email" placeholder="Email" required />
      <button type="submit" name="subscribe" id="mc-embedded-subscribe" class="button">
        Subscribe
      </button>
    </form>
  </div>
</template>

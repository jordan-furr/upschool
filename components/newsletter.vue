<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const script = document.createElement('script');
  script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
  script.type = 'text/javascript';
  script.async = true;
  document.body.appendChild(script);
});

</script>

<template>
  <div id="mc_embed_signup">
    <div id="mce-responses">
      <div class="response" id="mce-error-response" style="display: none;"></div>
      <div class="response" id="mce-success-response" style="display: none;"></div>
    </div>
    <form
      action="https://theupsideofuncertainty.us13.list-manage.com/subscribe/post?u=51c91af86cdb3fda391206ba9&amp;id=b3558ffde2&amp;f_id=006b89eaf0"
      method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="subscribe-form"
      target="_blank" novalidate>
      <input type="email" name="EMAIL" class="email" placeholder="Email" required />
      <button type="submit" name="subscribe" id="mc-embedded-subscribe" class="button">
        Subscribe
      </button>
    </form>
  </div>
</template>

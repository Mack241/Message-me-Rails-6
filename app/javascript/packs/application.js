import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import '@doabit/semantic-ui-sass'
import 'jquery'

window.scroll_bottom = () => {
  if($('#messages').length > 0) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight)
  }
}

window.submit_message = () => {
  $('#chat-form').on('ajax:send', function(e) {
    $('#message_body').val("");
  });
  
}

$(document).on('turbolinks:load', function() {
  $('.ui.dropdown').dropdown();
  $('.message .close').on('click', function() {
      $(this).closest('.message').transition('fade');
    });
  
  scroll_bottom()
})
 
Rails.start()
Turbolinks.start()
ActiveStorage.start()
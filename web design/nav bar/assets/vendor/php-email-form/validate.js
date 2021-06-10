/**
 * PHP Email Form Validation - v2.3
 * URL: https://bootstrapmade.com/php-email-form/
 * Author: BootstrapMade.com
 */
const scriptURL = 'https://script.google.com/macros/s/AKfycbysKIBzdqcl7agnWAgClYJDcoIU2L44F7ihNkA4qtHV2DqAxeQfC7Tw0A/exec'
const form = document.forms['submit-to-google-sheet'] 
!(function ($) {
  "use strict";


  $('form.php-email-form').submit(function (e) {
    e.preventDefault();

    var f = $(this).find('.form-group'),
      ferror = false,
      emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;



    var e = document.getElementById("year");
    var year = e.options[e.selectedIndex].value;

    var e = document.getElementById("dept");
    var dept = e.options[e.selectedIndex].value;

    if (year == 0) {
      alert("Please select a year");
      ferror = ierror = true;
    }
    if (dept == 0) {
      alert("Please select a Department");
      ferror = ierror = true;

    }

    f.children('input').each(function () { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }
        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            if (i.val() === 'empty') {
              ferror = ierror = true;
              alert("drop down");
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':

            var strs = i.val();
            var n = strs.search("@bitsathy.ac.in");
            if (n == -1) {
              ferror = ierror = true;
              alert("please enter valid Bitsathy mail id");
            } else if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }


            break;

          case 'maxlen':
            if (i.val().length > parseInt(exp)) {
              ferror = ierror = true;
            }
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'checked':
            if (!i.is(':checked')) {
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            exp = new RegExp(exp);
            if (!exp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validate').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    f.children('textarea').each(function () { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validate').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });

    if (ferror) return false;

    var this_form = $(this);
    var action = $(this).attr('action');
    this_form.find('.loading').slideDown();


    const scriptURL = 'https://script.google.com/macros/s/AKfycbysKIBzdqcl7agnWAgClYJDcoIU2L44F7ihNkA4qtHV2DqAxeQfC7Tw0A/exec'
    const form = document.forms['submit-to-google-sheet']

    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
      })
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))

      var Email=document.getElementById("email").value;  
     sendEmail(Email);
    if (navigator.onLine) {
      

      setTimeout(function () {
        this_form.find('.loading').slideUp();
        this_form.find('.sent-message').slideDown();
        this_form.find("input:not(input[type=submit]), textarea").val('');
      }, 5000);
    } else {
      this_form.find('.loading').slideUp();
      msg = 'Form submission failed due to Interne connect please check it !! <br>';
      this_form.find('.error-message').slideDown().html(msg);
    }

    
    return true;
  });


})(jQuery);
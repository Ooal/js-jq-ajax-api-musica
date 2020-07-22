/*GOAL:
Attraverso una chiamata ajax all'Api di boolean avremo a
disposizione una decina di dischi musicali.
Servendoci di handlebars stampiamo tutto a schermo.
In questo momento non è importante la parte grafica.
Bonus: Creare una select con i seguenti generi: pop, rock,
metal e jazz. In base a cosa scegliamo nella select vedremo i
corrispondenti cd.
Chiamata:
https://flynn.boolean.careers/exercises/api/array/music
Layout base:
https://bitbucket.org/booleancareers/ex-dischi-musicali-layout*/
function getInitCall (){

  $.ajax({
      url: 'https://flynn.boolean.careers/exercises/api/array/music',
      method: 'GET',
      success: function(data) {
        var success = data['success'];
        var arrayCds = data['response'];
        cd(arrayCds);

      },
      error: function(request, state, error) {
        var error = request['statusText'];
        alert('Attenzione ' + error);
      }
    });

  }
function cd (array) {
  for (var i = 0; i < array.length; i++) {
  console.log(array[i]);

  var template = $('#template').html();
  var compiled = Handlebars.compile(template);
  var target = $('#cds-container');

  var cdHtml = compiled(array[i]);
  target.append(cdHtml);
  }
}

function init() {
 getInitCall();
}
$(document).ready(init);

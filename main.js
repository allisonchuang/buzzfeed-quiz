$('#fin').on('click', function(e) {
  // gather all checked radio-button values
  var choices = $("input[type='radio']:checked").map(function(i, radio) {
    return $(radio).val();
  }).toArray();
  // now you have an choices = ["valueofradiobox1", "valueofradiobox2", "valueofradiobox2"]
  // you'll need to do some calculations with this
  // a naive approach would be to just choose the most common option - seems reasonable
  var count = 0;
  for (i = 0; i < choices.length; i++) {
    count += parseInt(choices[i]);
  }
  console.log(count);
});

$("input[type='radio']").on('change', function (e) {
  var checked = $(this).attr('id'); // http://stackoverflow.com/questions/15141530/get-text-of-label-that-belongs-to-checked-radio-button
  var group = $(this).attr('name');
  $(`div[type=${group}]`).css("opacity", ".8");
  $(`div[type=${group}]`).css("background", "rgba(220, 220, 220, 1)");
  $(`#${checked}`).css("opacity", "1");
  $(`#${checked}`).css("background", "rgba(197, 217, 255, 1)");
});

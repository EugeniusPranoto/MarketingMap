$(function() {
  $('autocomplete-input').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'http://placehold.it/250x250',
    }
  });
});
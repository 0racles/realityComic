require.config({
  paths : {
    baseUrl : "../assets/lib/js",
    jquery : [
        'https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min'
        //'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min',
        //'jquery.min'
        ],  
    bootstrap : [
    'http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min',
    //'bootstrap.min'
    ],
    angular : [
    'http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min'
    ],
    //google : 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min',
    realityComic : 'realityComic'
              
  }
});

define(['jquery', 'bootstrap', 'realityComic'], function ($) {});
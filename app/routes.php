<?php



Route::get('/', ['as' => 'home', function() {

	return View::make('pages.home');

}]);

Route::get('capabilities', ['as' => 'capabilities', function() {

	return View::make('pages.capabilities');

}]);

Route::get('contact', ['as' => 'contact', function() {

	return View::make('pages.contact');

}]);

Route::get('pacific', ['as' => 'pacific', function() {

	return View::make('pages.pacific');

}]);


Route::get('vendors', ['as' => 'vendors', function() {

	return View::make('pages.vendors');

}]);
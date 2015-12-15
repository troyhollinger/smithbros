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

Route::get('pacific', ['as' => 'pacific.home', function() {

	return View::make('pacific.home');

}]);


Route::get('vendors', ['as' => 'vendors', function() {

	$backgroundImageArray = [asset('img/vendor-1.jpg'), asset('img/vendor-2.jpg')];
	$randomIndex = mt_rand(0,1);
	$backgroundImage = $backgroundImageArray[$randomIndex];

	return View::make('pages.vendors', ['backgroundImagePath' => $backgroundImage]);

}]);


Route::get('quote', ['as' => 'quote', function() {

	$backgroundImageArray = [asset('img/quote-1.jpg'), asset('img/quote-2.jpg')];
	$randomIndex = mt_rand(0,1);
	$backgroundImage = $backgroundImageArray[$randomIndex];

	return View::make('pages.quote', ['backgroundImagePath' => $backgroundImage]);

}]);


Route::post('quote', ['as' => 'quote.post', function() {

	$input = Input::all();

	$name = Input::get('name');	

	if (App::environment('production')) {

		Mail::send('emails.quote', array('form' => $input), function($message) use ($name) {

		    $message->to('info@smithbrosmfg.com', 'Smith Bros')->subject('New Quote Request from ' . $name);
		    
		});

	}
	
	Mail::send('emails.quote', array('form' => $input), function($message) use ($name) {

	    $message->to('austenpayan@gmail.com', 'Austen Payan')->subject('New Quote Request from ' . $name);
	    
	});

}]);
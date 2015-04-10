@extends('layouts.email')



@section('content')

	<h1>New Quote Request from the website </h1>


	<h2>Name : </h2>
	<p>{{ $form['name'] }}</p>

	<br>

	<h2>Email : </h2>
	<p>{{ $form['email'] }}</p>

	<br>

	<h2>Business Name : </h2>
	<p>{{ $form['business'] }}</p>

	<br>

	<h2>Phone : </h2>
	<p>{{ $form['phone'] }}</p>

	<br>

	<h2>Location : </h2>
	<p>{{ $form['location'] }}</p>

	<br>

	<h2>About the Project : </h2>
	<p>{{ $form['description'] }}</p>


@stop
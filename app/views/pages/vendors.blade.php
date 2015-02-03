@extends('layouts.master')

@section('title')
Vendors - Smith Brothers Manufacturing
@stop


@section('content')


<div class="vendor-container">

	<div class="photo" data-speed="2" style="background-image:url({{ $backgroundImagePath }})"></div>

	<div class="container">
		
		<div class="vendor-info">
		
			<p class="bold">MANUFACTURERS OF SCREW MACHINE PRODUCTS AND PACIFIC WELDING ELECTRODES</p>
			<br>
			<p>Proudly serving such companies as - </p>
			<br>
			<p class="bold">Solar Turbines</p>
			<p class="bold">ROHR Industries</p>
			<p class="bold">Hughes</p>
			<br>
			<p class="bold">And Hopefully You!</p>
			<br>

			<a href="{{ route('quote') }}"><div class="button">Request a quote</div></a>

		</div>


		<div class="vendor-login-form">

			<form>
				
				<!-- These two inputs are for disabling chrome autocomplete -->
				<input style="display:none" type="text" name="fakeusernameremembered"/>
				<input style="display:none" type="password" name="fakepasswordremembered"/>
				<!--  -->

				<p><input type="text" name="vendor-email" id="vendor-email" autocomplete="off"></p>
				<p><label for="vendor-email">Email</label></p>
				<br>
				<br>
				<p><input type="password" name="vendor-password" id="vendor-password" autocomplete="off"></p>
				<p><label for="vendor-password">Password</label></p>

				<p class="sign-in-button"> <input type="submit" class="button" value="Enter"></p>
							
			</form>

		</div>

		<div class="clear"></div>

	</div>


</div>
	

@stop

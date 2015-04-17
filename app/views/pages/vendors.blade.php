@extends('layouts.master')

@section('title')
Vendors - Smith Brothers Manufacturing
@stop


@section('content')


<div class="vendor-container" ng-app="vendor">

	<div class="photo" data-speed="2" style="background-image:url({{ $backgroundImagePath }})"></div>

	<div class="container">
		
		<div class="vendor-info">
		
			<p class="bold first">MANUFACTURERS OF SCREW MACHINE PRODUCTS AND PACIFIC WELDING ELECTRODES</p>
			<br>
			<p>Proudly serving such companies as - </p>
			<br>
			<p class="bold">SOLAR TURBINES INC. </p>
			<p class="bold">ROHR/BF GOODRICH</p>
			<p class="bold">KETCH-ALL COMPANY</p>
			<p class="bold">FOGG-IT NOZZLE</p>
			<p>50+ YEARS</p>
			<br>
			<p class="bold">THERMAL STRUCTURES</p>
			<p class="bold">HI-TEMP INSULATION</p>
			<p class="bold">CROWER CAMS</p>
			<p class="bold">WELDMAC MFG.</p>
			<p>40+ YEARS</p>


			<br>
			<p class="bold smaller">And Hopefully You!</p>
			<br>

			<a href="{{ route('quote') }}">
				<div class="button">
					<div>
						<p data-hover="Request a quote">Request a quote</p>
					</div>
				</div>
			</a>

		</div>


		<div class="vendor-login-form" ng-controller="LoginController">

			<form>
				
				<!-- These two inputs are for disabling chrome autocomplete -->
				<input style="display:none" type="text" name="fakeusernameremembered"/>
				<input style="display:none" type="password" name="fakepasswordremembered"/>

				<p><input type="text" name="vendor-email" id="vendor-email" autocomplete="off" ng-model="email" ng-keyup="checkForCompletion()"></p>
				<p><label for="vendor-email">Email</label></p>
				<br>
				<br>
				<p><input type="password" name="vendor-password" id="vendor-password" autocomplete="off" ng-model="password" ng-keyup="checkForCompletion()"></p>
				<p><label for="vendor-password">Password</label></p>

				<p class="sign-in-button"> <div class="button" ng-class="{'not-ready' : filledIn === false, 'ready' : filledIn === true}" ng-click="authenticate()"> 
					<div>
						<p data-hover="Enter">Enter</p>
					</div>
				</div> </p>
							
			</form>

		</div>

		<div class="clear"></div>

	</div>


</div>
	

@stop


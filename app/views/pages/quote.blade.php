@extends('layouts.master')

@section('title')
Request A Quote - Smith Brothers Manufacturing
@stop

@section('content')


<div class="vendor-container" ng-app="quote">

	<div class="photo" data-speed="2" style="background-image:url({{ $backgroundImagePath }})"></div>

	<div class="container">

		<div class="vendor-info">

			<p class="bold">MANUFACTURERS OF SCREW MACHINE PRODUCTS AND PACIFIC WELDING ELECTRODES</p>

		</div>

		<div class="quote-form-container" ng-controller="QuoteFormController">

			<form class="quote-form">

				<p>
					<input type="text" name="quote-name" id="quote-name" ng-model="form.name">
					<label for="quote-name">Name</label>
				</p>

				<p>
					<input type="text" name="quote-email" id="quote-email" ng-model="form.email">
					<label for="quote-email">Email</label>
				</p>

				<p>
					<input type="text" name="quote-business" id="quote-business" ng-model="form.business">
					<label for="quote-business">Business Name</label>
				</p>

				<p>
					<input type="tel" name="quote-phone" id="quote-phone" ng-model="form.phone">
					<label for="quote-phone">Phone Number</label>
				</p>

				<p>
					<input type="text" name="quote-location" id="quote-location" ng-model="form.location">
					<label for="quote-location">City, State</label>
				</p>

				<p>
					<textarea name="quote-description" id="quote-description" maxlength="140" ng-model="form.description"></textarea>
					<label for="quote-description">About Your Project (140 Characters or Less)</label>
				</p>

				<div class="quote-form-actions">

					<a href="{{ route('vendors') }}"><div class="quote-form-action cancel button">Cancel</div></a>
					<div class="quote-form-action request button" ng-click="sendEmail()">Request</div>

					<div class="clear"></div>

				</div>

			</form>
		</div>

		<div class="clear"></div>


	</div>

</div>


@stop
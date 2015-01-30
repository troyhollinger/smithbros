@extends ('layouts.master')



@section('title')
Pacific Welding
@stop

@section('content')

<div class="photo-container">

	<div class="photo" data-speed="2" style="background-image:url({{ asset('img/pacific-1.jpg') }})"></div>

</div>	

<div class="photo-container">

	<div class="photo" data-speed="2" style="background-image:url({{ asset('img/pacific-2.jpg') }})"></div>

</div>

<div class="photo-container">

	<div class="photo" data-speed="2" style="background-image:url({{ asset('img/pacific-3.jpg') }})"></div>
	
</div>

<div class="content">

	<div class="container">

		

	</div>

</div>	

@stop


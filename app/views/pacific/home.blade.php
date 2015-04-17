@extends ('layouts.master')

@section('title')
Pacific Welding
@stop

@section('content')

<div class="photo-container">

	<div class="photo-caption photo-caption-fixed photo-caption-mobile first-caption">
		<h2 class="photo-caption-title">Made in the U.S.A</h2>
		<p class="photo-caption-description">We are the Only Spot Welding Electrode MFG on the Pacific.</p>
	</div>

	<div class="photo data-img" data-speed="2" data-sml="{{ asset('img/pacific-1-m.jpg') }}" data-med="{{ asset('img/pacific-1-m.jpg') }}" data-lrg="{{ asset('img/pacific-1.jpg') }}" style="background-image:url(http://placeholder.it/1x1); background-position:bottom;"></div>

</div>	

<div class="content" id="catalog">

	<div class="container">

		<div class="parts-images-container">


			<div class="pacific-parts-images-column">

				<div class="parts-image-container long-parts-image-container">
					<div class="long-parts-image-container parts-image-centerer">
						<img class="parts-image data-img" src="{{ asset('img/parts/pacific-parts-1.jpg') }}" data-zoom="1.2"></img>
					</div>
					<div class="parts-image-caption">
						<p class="bold">STRAIGHT SHANKS</p>
						<p>PG 6 PACIFIC CATALOG</p>
					</div>
				</div>
				<div class="parts-image-container short-parts-image-container">
					<div class="long-parts-image-container parts-image-centerer">
						<img class="parts-image data-img" src="{{ asset('img/parts/pacific-parts-7.jpg') }}" data-zoom="1.2"></img>
					</div>
					<div class="parts-image-caption">
						<p class="bold">INSERT ELECTRODES</p>
						<p>T SERIES - PG 10</p>
					</div>
				</div>
				<div class="parts-image-container long-parts-image-container">
					<div class="long-parts-image-container parts-image-centerer">
						<img class="parts-image data-img" src="{{ asset('img/parts/pacific-parts-13.jpg') }}" data-zoom="1.2"></img>
					</div>
					<div class="parts-image-caption">
						<p class="bold">BACKUP INSERTS</p>
						<p>PG 17</p>
					</div>
				</div>
				{{-- <div class="parts-image-container short-parts-image-container">
					<div class="long-parts-image-container parts-image-centerer">
						<img class="parts-image" src="{{ asset('img/parts/pacific-parts-10.jpg') }}" data-zoom="1.2"></img>
					</div>
					<div class="parts-image-caption">
						<p class="bold">NON EJECTOR</p>
						<p>PG 22</p>
					</div>
				</div> --}}
				
			</div>

			<div class="pacific-parts-images-column">

				<div class="parts-image-container short-parts-image-container">
					<div class="long-parts-image-container parts-image-centerer">
						<img class="parts-image data-img" data-lrg="{{ asset('img/parts/pacific-parts-2.jpg') }}" src="{{ asset('img/parts/pacific-parts-2.jpg') }}" data-zoom="1.2"></img>
					</div>
					<div class="parts-image-caption">
						<p class="bold">INSERT ELECTRODES</p>
						<p>O SERIES - PG 11</p>
					</div>
				</div>
				<div class="parts-image-container long-parts-image-container">
					<div class="long-parts-image-container parts-image-centerer">
						<img class="parts-image data-img" data-lrg="{{ asset('img/parts/pacific-parts-8.jpg') }}" src="{{ asset('img/parts/pacific-parts-8.jpg') }}" data-zoom="1.2"></img>
					</div>
					<div class="parts-image-caption">
						<p class="bold">DOUBLE BEND SHANKS</p>
						<p>PG 7</p>
					</div>
				</div>
				<div class="parts-image-container short-parts-image-container">
					<div class="long-parts-image-container parts-image-centerer">
						<img class="parts-image data-img" data-lrg="{{ asset('img/parts/pacific-parts-21.jpg') }}" src="{{ asset('img/parts/pacific-parts-21.jpg') }}" data-zoom="1.2"></img>
					</div>
					<div class="parts-image-caption">
						<p class="bold">BACKUP ELECTRODES</p>
						<p>PG 17</p>
					</div>
				</div>
				{{-- <div class="parts-image-container short-parts-image-container">
					<div class="long-parts-image-container parts-image-centerer">
						<img class="parts-image" src="{{ asset('img/parts/pacific-parts-8.jpg') }}" data-zoom="1.2"></img>
					</div>
					<div class="parts-image-caption">
						<p class="bold">EJECTOR HOLDERS</p>
						<p>PG 23</p>
					</div>
				</div> --}}
				{{-- <div class="parts-image-container long-parts-image-container">
					<div class="long-parts-image-container parts-image-centerer">
						<img class="parts-image" src="{{ asset('img/parts/pacific-parts-11.jpg') }}" data-zoom="1.2"></img>
					</div>
					<div class="parts-image-caption">
						<p class="bold">STRAIGHT ELECTRODES</p>
						<p>PG 18-19</p>
					</div>
				</div> --}}
				

			</div>

			<div class="pacific-parts-images-column">

				{{-- <div class="parts-image-container long-parts-image-container">
					<div class="long-parts-image-container parts-image-centerer">
						<img class="parts-image" src="" data-zoom="1.2"></img>
					</div>
					<div class="parts-image-caption">
						<p class="bold">SINGLE BEND SHANKS</p>
						<p>PG 8</p>
					</div>
				</div> --}}
				<div class="parts-image-container short-parts-image-container">
					<div class="long-parts-image-container parts-image-centerer">
						<img class="parts-image data-img" data-lrg="{{ asset('img/parts/pacific-parts-9.jpg') }}" src="{{ asset('img/parts/pacific-parts-9.jpg') }}" data-zoom="1.2"></img>
					</div>
					<div class="parts-image-caption">
						<p class="bold">INSERT ELECTRODES</p>
						<p>1 SERIES - PG 12</p>
					</div>
				</div>
				<div class="parts-image-container long-parts-image-container">
					<div class="long-parts-image-container parts-image-centerer">
						<img class="parts-image data-img" data-lrg="{{ asset('img/parts/pacific-parts-15.jpg') }}" src="{{ asset('img/parts/pacific-parts-15.jpg') }}" data-zoom="1.2"></img>
					</div>
					<div class="parts-image-caption">
						<p class="bold">DOUBLE BEND ELECTRODES</p>
						<p>PG 20</p>
					</div>
				</div>
				
				

			</div>

			<div class="pacific-parts-images-column">

				<div class="parts-image-container short-parts-image-container">
					<div class="long-parts-image-container parts-image-centerer">
						<img class="parts-image data-img" data-lrg="{{ asset('img/parts/pacific-parts-4.jpg') }}" src="{{ asset('img/parts/pacific-parts-21.jpg') }}" data-zoom="1.2"></img>
					</div>
					<div class="parts-image-caption">
						<p class="bold">TAPERED NOSE SHANKS</p>
						<p>PG 9</p>
					</div>
				</div>
				<div class="parts-image-container long-parts-image-container">
					<div class="long-parts-image-container parts-image-centerer">
						<img class="parts-image data-img" data-lrg="{{ asset('img/parts/pacific-parts-10.jpg') }}" src="{{ asset('img/parts/pacific-parts-10.jpg') }}" data-zoom="1.2"></img>
					</div>
					<div class="parts-image-caption">
						<p class="bold">INSERT ELECTRODES</p>
						<p>2 SERIES - PG 13</p>
					</div>
				</div>
				{{-- <div class="parts-image-container short-parts-image-container">
					<div class="long-parts-image-container parts-image-centerer">
						<img class="parts-image" src="{{ asset('img/parts/pacific-parts-8.jpg') }}" data-zoom="1.2"></img>
					</div>
					<div class="parts-image-caption">
						<p class="bold">LIGHT DUTY HOLDER</p>
						<p>PG 25</p>
					</div>
				</div> --}}
				{{-- <div class="parts-image-container long-parts-image-container">
					<div class="long-parts-image-container parts-image-centerer">
						<img class="parts-image" src="{{ asset('img/parts/pacific-parts-11.jpg') }}" data-zoom="1.2"></img>
					</div>
					<div class="parts-image-caption">
						<p class="bold">UNIVERSAL HOLDERS</p>
						<p>PG 24</p>
					</div>
				</div> --}}
				

			</div>

			<div class="pacific-parts-images-column">

				<div class="parts-image-container long-parts-image-container">
					<div class="long-parts-image-container parts-image-centerer">
						<img class="parts-image data-img" data-lrg="{{ asset('img/parts/pacific-parts-5.jpg') }}" src="{{ asset('img/parts/pacific-parts-5.jpg') }}" data-zoom="1.2"></img>
					</div>
					<div class="parts-image-caption">
						<p class="bold">OFFSET SHANKS</p>
						<p>PG 9</p>
					</div>
				</div>
				<div class="parts-image-container short-parts-image-container">
					<div class="long-parts-image-container parts-image-centerer">
						<img class="parts-image data-img" data-lrg="{{ asset('img/parts/pacific-parts-11.jpg') }}" src="{{ asset('img/parts/pacific-parts-11.jpg') }}" data-zoom="1.2"></img>
					</div>
					<div class="parts-image-caption">
						<p class="bold">INSERT ELECTRODES</p>
						<p>3 SERIES - PG 14</p>
					</div>
				</div>
				{{-- <div class="parts-image-container long-parts-image-container">
					<div class="long-parts-image-container parts-image-centerer">
						<img class="parts-image" src="{{ asset('img/parts/pacific-parts-7.jpg') }}" data-zoom="1.2"></img>
					</div>
					<div class="parts-image-caption">
						<p class="bold">SLEEVE ADAPTORS</p>
						<p>PG 27</p>
					</div>
				</div> --}}
				{{-- <div class="parts-image-container short-parts-image-container">
					<div class="long-parts-image-container parts-image-centerer">
						<img class="parts-image" src="{{ asset('img/parts/pacific-parts-10.jpg') }}" data-zoom="1.2"></img>
					</div>
					<div class="parts-image-caption">
						<p class="bold">TEE CONNECTIONS</p>
						<p>PG 26</p>
					</div>
				</div> --}}
				

			</div>

			<div class="pacific-parts-images-column">

				{{-- <div class="parts-image-container short-parts-image-container">
					<div class="long-parts-image-container parts-image-centerer">
						<img class="parts-image" src="{{ asset('img/parts/pacific-parts-2.jpg') }}" data-zoom="1.2"></img>
					</div>
					<div class="parts-image-caption">
						<p class="bold">INJECTOR PUNCH</p>
						<p>PG 9</p>
					</div>
				</div> --}}
				<div class="parts-image-container long-parts-image-container">
					<div class="long-parts-image-container parts-image-centerer">
						<img class="parts-image data-img" data-lrg="{{ asset('img/parts/pacific-parts-12.jpg') }}" src="{{ asset('img/parts/pacific-parts-12.jpg') }}" data-zoom="1.2"></img>
					</div>
					<div class="parts-image-caption">
						<p class="bold">MORSE TAPER ADAPTERS</p>
						<p>PG 16</p>
					</div>
				</div>
				<div class="parts-image-container short-parts-image-container">
					<div class="long-parts-image-container parts-image-centerer">
						<img class="parts-image data-img" data-lrg="{{ asset('img/parts/pacific-parts-24.jpg') }}" src="{{ asset('img/parts/pacific-parts-24.jpg') }}" data-zoom="1.2"></img>
					</div>
					<div class="parts-image-caption">
						<p class="bold">THREADED MORSE</p>
						<p>TAPER ADAPTERS PG 27</p>
					</div>
				</div>
				
			</div>

		</div>

	</div>

</div>	

<div class="photo-container pacific-photo-container">

	<div class="photo-caption photo-caption-fixed pacific-photo-caption">

		<h2 class="photo-caption-title">Made in the U.S.A</h2>
		<p class="photo-caption-description">We are the Only Spot Welding Electrode MFG on the Pacific.</p>

	</div>

	<div class="photo data-img" data-speed="2" data-sml="{{ asset('img/pacific-2-m.jpg') }}" data-med="{{ asset('img/pacific-2-m.jpg') }}" data-lrg="{{ asset('img/pacific-2.jpg') }}" style="background-image:url(http://placeholder.it/1x1); background-position:bottom;"></div>

</div>

<div class="photo-container pacific-photo-container">

	<div class="photo-caption photo-caption-fixed pacific-photo-caption">

		<h2 class="photo-caption-title">Pacific Welding</h2>
		<p class="photo-caption-description">Spot Weld Inserts, Electrodes and Accessories. Contact us now for a full catalog.</p>

	</div>

	<div class="photo data-img" data-speed="2" data-sml="{{ asset('img/pacific-3-m.jpg') }}" data-med="{{ asset('img/pacific-3-m.jpg') }}" data-lrg="{{ asset('img/pacific-3.jpg') }}" style="background-image:url(http://placeholder.it/1x1); background-position:bottom;"></div>
	
</div>



@stop


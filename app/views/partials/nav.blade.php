
@if (strpos(Route::currentRouteName(), 'pacific') !== false)
<a href="{{ route('pacific.home') }}"><img class="logo" id="pacific-logo" src="{{ asset('img/pacific-logo.svg') }}"></a>
@elseif(Route::currentRouteName() == 'vendors' || Route::currentRouteName() == 'quote')
<a href="{{ route('home') }}"><img class="logo" src="{{ asset('img/script-logo-white.png') }}"></a>
@else
<a href="{{ route('home') }}"><img class="logo" src="{{ asset('img/script-logo.png') }}"></a>
@endif

<div class="hamburger mobile-hamburger closed" id="mobile-hamburger">

	<div class="patty"></div>
	<div class="patty"></div>
	<div class="patty"></div>

</div>


<div class="nav">

	<div class="container">

		<nav>
			<ul>
				@if (strpos(Route::currentRouteName(), 'pacific') !== false)
				<a href=""><li {{ Request::is('pacific') ? 'class="lighter"' : '' }} data-hover="Overview">Overview</li></a>
				<a href="#catalog"><li {{ Request::is('capabilities') ? 'class="lighter"' : '' }} data-hover="Catalog">Catalog</li></a>
				<a href="#contact"><li id="contact-list-item" data-hover="Contact">Contact</li></a>
				<a href="{{ route('home') }}"><li data-hover="Smith Bros MFG">Smith Bros MFG</li></a>
				<a href="{{ route('vendors') }}"><li {{ Request::is('vendors') || Request::is('quote') ? 'class="lighter"' : '' }} data-hover="Vendors">Vendors</li></a>
				@else
				<a href="{{ route('home') }}"><li {{ Request::is('/') ? 'class="lighter"' : '' }} data-hover="1945 to Now">1945 to Now</li></a>
				<a href="{{ route('capabilities') }}"><li {{ Request::is('capabilities') ? 'class="lighter"' : '' }} data-hover="Capabilities">Capabilities</li></a>
				<a href="#contact"><li id="contact-list-item" data-hover="Contact">Contact</li></a>
				<a href="{{ route('pacific.home') }}"><li {{ Request::is('pacific') ? 'class="lighter"' : '' }} data-hover="Pacific Welding">Pacific Welding</li></a>
				<a href="{{ route('vendors') }}"><li {{ Request::is('vendors') || Request::is('quote') ? 'class="lighter"' : '' }} data-hover="Customers">Customers</li></a>
				@endif
			</ul>

		</nav>

		<div class="nav-page-elements">

			@if(Route::currentRouteName() == 'capabilities')
			<a href="#machine-list">
				<div class="capabilities-title">
			
					<div class="hamburger nav-hamburger">
					    <div class="patty"></div>
					    <div class="patty"></div>
					    <div class="patty"></div>
					</div>
	
					<h3>Machine List</h3>
	
					<div class="clear"></div>
	
				</div>
			</a>
			@elseif(Route::currentRouteName() == 'pacific.home')

				<div class="pacific-title">

					<h3>Spot&nbsp; Weld&nbsp; Insert&nbsp; Electrodes</h3>

				</div>

			@endif
			
		</div>

		<div class="nav-request-quote">
			<ul>
				<a href="{{ route('quote') }}"><li data-hover="Request Quote">Request Quote</li></a>
			</ul>
			
		</div>

		<div class="clear"></div>

	</div>
	
</div>
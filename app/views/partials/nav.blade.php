<div class="nav">

	<div class="container">

		<nav>
			<ul>
				@if (strpos(Route::currentRouteName(), 'pacific') !== false)
				<a href=""><li {{ Request::is('/') ? 'class="lighter"' : '' }} data-hover="Overview">Overview</li></a>
				<a href=""><li {{ Request::is('capabilities') ? 'class="lighter"' : '' }} data-hover="Catalog">Catalog</li></a>
				<a href="#contact"><li {{ Request::is('contact') ? 'class="lighter"' : '' }} data-hover="Contact">Contact</li></a>
				<a href="{{ route('home') }}"><li {{ Request::is('pacific') ? 'class="lighter"' : '' }} data-hover="Smith Bros MFG">Smith Bros MFG</li></a>
				<a href=""><li {{ Request::is('vendors') || Request::is('quote') ? 'class="lighter"' : '' }} data-hover="Vendors">Vendors</li></a>
				@else
				<a href="{{ route('home') }}"><li {{ Request::is('/') ? 'class="lighter"' : '' }} data-hover="1945 to Now">1945 to Now</li></a>
				<a href="{{ route('capabilities') }}"><li {{ Request::is('capabilities') ? 'class="lighter"' : '' }} data-hover="Capabilities">Capabilities</li></a>
				<a href="#contact"><li {{ Request::is('contact') ? 'class="lighter"' : '' }} data-hover="Contact">Contact</li></a>
				<a href="{{ route('pacific.home') }}"><li {{ Request::is('pacific') ? 'class="lighter"' : '' }} data-hover="Pacific Welding">Pacific Welding</li></a>
				<a href="{{ route('vendors') }}"><li {{ Request::is('vendors') || Request::is('quote') ? 'class="lighter"' : '' }} data-hover="Vendors">Vendors</li></a>
				@endif
			</ul>

		</nav>

		<div class="nav-page-elements">

			@if(Route::currentRouteName() == 'capabilities')
			<a href="#machine-list">
				<div class="capabilities-title">
			
					<div class="hamburger">
					    <div class="patty"></div>
					    <div class="patty"></div>
					    <div class="patty"></div>
					</div>
	
					<h3>Machine List</h3>
	
					<div class="clear"></div>
	
				</div>
			</a>
			@endif
			
		</div>

		<div class="clear"></div>

	</div>
	
</div>
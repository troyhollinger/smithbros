<div class="nav">

	<div class="container">



		<nav>
			<ul>

				<a href="{{ route('home') }}"><li {{ Request::is('/') ? 'class="lighter"' : '' }} data-hover="1945 to Now">1945 to Now</li></a>
				<a href="{{ route('capabilities') }}"><li {{ Request::is('capabilities') ? 'class="lighter"' : '' }} data-hover="Capabilities">Capabilities</li></a>
				<a href="{{ route('contact') }}"><li {{ Request::is('/contact') ? 'class="lighter"' : '' }} data-hover="Contact">Contact</li></a>
				<a href="{{ route('pacific') }}"><li {{ Request::is('/pacific') ? 'class="lighter"' : '' }} data-hover="Pacific Welding">Pacific Welding</li></a>
				<a href="{{ route('vendors') }}"><li {{ Request::is('/vendors') ? 'class="lighter"' : '' }} data-hover="Vendors">Vendors</li></a>
			</ul>
		</nav>

	</div>
	
</div>
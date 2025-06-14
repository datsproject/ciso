<div class="flex items-center justify-center h-full">
	<div class="relative">
		<!-- Outer rotating ring -->
		<div class="w-12 h-12 rounded-full border-2 border-transparent border-t-blue-500 border-r-cyan-400 animate-spin"></div>
		
		<!-- Inner rotating ring -->
		<div class="absolute top-2 left-2 w-8 h-8 rounded-full border-2 border-transparent border-b-cyan-500 border-l-blue-400 animate-spin" style="animation-direction: reverse; animation-duration: 0.8s;"></div>
		
		<!-- Center dot with pulse -->
		<div class="absolute top-1/2 left-1/2 w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 loading-pulse"></div>
		
		<!-- Floating particles -->
		<div class="absolute -top-1 -left-1 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-40"></div>
		<div class="absolute -bottom-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-40" style="animation-delay: 0.5s;"></div>
	</div>
	
	<!-- Loading text with gradient -->
	<div class="ml-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-semibold loading-pulse">
		Loading...
	</div>
</div>

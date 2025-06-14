<script lang="ts">
	import { m } from '$paraglide/messages';
	import Typewriter from 'svelte-typewriter';
</script>

<div class="flex flex-col justify-center space-y-8 px-4 lg:px-8">
	<!-- Main Welcome Section -->
	<div class="space-y-6">
		<!-- Animated Welcome Message -->
		<Typewriter mode="loopOnce" cursor={false} interval={50}>
			<div class="space-y-3">
				<h1 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
					<span class="inline-flex items-center gap-3">
						{m.helloThere()} 
						<span class="text-5xl animate-wave">👋</span>
					</span>
				</h1>
				<p class="text-xl lg:text-2xl text-gray-700 font-medium">
					{m.thisIsCisoAssistant()}
				</p>
			</div>
		</Typewriter>

		<!-- Animated Feature Description -->
		<Typewriter mode="cascade" cursor={false} interval={45} delay={3000}>
			<div class="space-y-4">
				<p class="text-lg lg:text-xl text-gray-600 leading-relaxed">
					<span>{m.yourStreamlined()} </span>
					<span class="font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
						{m.oneStopShop()}
					</span>
					<span> {m.forComplianceRiskManagement()}</span>
				</p>
			</div>
		</Typewriter>
	</div>

	<!-- Feature Highlights -->
	<div class="grid gap-4 mt-8 lg:mt-12">
		<div class="flex items-start gap-4 p-4 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/30 transition-all duration-300 hover:bg-white/60 hover:scale-[1.02]">
			<div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
				<i class="fa-solid fa-shield-halved text-white text-xl"></i>
			</div>
			<div>
				<h3 class="font-semibold text-gray-900 mb-1">Risk Management</h3>
				<p class="text-sm text-gray-600">Comprehensive risk assessment and mitigation tools</p>
			</div>
		</div>

		<div class="flex items-start gap-4 p-4 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/30 transition-all duration-300 hover:bg-white/60 hover:scale-[1.02]">
			<div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
				<i class="fa-solid fa-clipboard-check text-white text-xl"></i>
			</div>
			<div>
				<h3 class="font-semibold text-gray-900 mb-1">Compliance Tracking</h3>
				<p class="text-sm text-gray-600">Stay compliant with industry standards and regulations</p>
			</div>
		</div>

		<div class="flex items-start gap-4 p-4 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/30 transition-all duration-300 hover:bg-white/60 hover:scale-[1.02]">
			<div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
				<i class="fa-solid fa-chart-line text-white text-xl"></i>
			</div>
			<div>
				<h3 class="font-semibold text-gray-900 mb-1">Analytics & Reporting</h3>
				<p class="text-sm text-gray-600">Powerful insights and customizable reports</p>
			</div>
		</div>
	</div>

	<!-- Trust Indicators -->
	<div class="flex flex-wrap gap-4 justify-center lg:justify-start mt-8 text-sm text-gray-500">
		<div class="flex items-center gap-2">
			<i class="fa-solid fa-users text-blue-500"></i>
			<span>Trusted by 500+ organizations</span>
		</div>
		<div class="flex items-center gap-2">
			<i class="fa-solid fa-award text-green-500"></i>
			<span>ISO 27001 Certified</span>
		</div>
		<div class="flex items-center gap-2">
			<i class="fa-solid fa-lock text-purple-500"></i>
			<span>SOC 2 Compliant</span>
		</div>
	</div>
</div>

<style>
	@keyframes wave {
		0%, 100% { transform: rotate(0deg); }
		25% { transform: rotate(20deg); }
		75% { transform: rotate(-10deg); }
	}
	
	.animate-wave {
		animation: wave 2s ease-in-out infinite;
		transform-origin: 70% 70%;
		display: inline-block;
	}
</style>

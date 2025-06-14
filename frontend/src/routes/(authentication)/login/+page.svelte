<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import Logo from '$lib/components/Logo/Logo.svelte';
	import Greetings from './Greetings.svelte';
	import FormCard from './FormCard.svelte';

	export let data: PageData;
	export let form: ActionData;
</script>

<!-- Modern Login Page with Gradient Background -->
<div class="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
	<!-- Animated Background Elements -->
	<div class="absolute inset-0 overflow-hidden">
		<div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-70 animate-pulse"></div>
		<div class="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-50 to-purple-50 rounded-full opacity-60 animate-pulse delay-1000"></div>
	</div>

	<!-- Main Content Container -->
	<div class="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl w-full">
			<!-- Logo Section -->
			<div class="text-center mb-8 lg:mb-12">
				<div class="inline-flex items-center justify-center w-48 h-48 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg mb-4">
					<Logo width={160} height={70} />
				</div>
				<p class="text-gray-600 text-lg mt-2">Your streamlined compliance and risk management platform</p>
			</div>

			<!-- Main Login Area -->
			<div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
				<!-- Left Side - Welcome Message -->
				<div class="hidden lg:block">
					<Greetings />
				</div>

				<!-- Right Side - Login Form -->
				<div class="flex justify-center lg:justify-end">
					<FormCard {data} {form} />
				</div>
			</div>

			<!-- Mobile Welcome Message -->
			<div class="lg:hidden mt-8">
				<Greetings />
			</div>
		</div>
	</div>

	<!-- Decorative Grid Pattern -->
	<div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0f2fe' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
</div>

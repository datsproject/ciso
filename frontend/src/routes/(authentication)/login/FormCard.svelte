<script lang="ts">
	import SuperForm from '$lib/components/Forms/Form.svelte';
	import TextField from '$lib/components/Forms/TextField.svelte';
	import { loginSchema } from '$lib/utils/schemas';

	import { page } from '$app/stores';
	import { redirectToProvider } from '$lib/allauth.js';
	import { zod } from 'sveltekit-superforms/adapters';
	import MfaAuthenticateModal from './mfa/components/MFAAuthenticateModal.svelte';
	import {
		getModalStore,
		type ModalComponent,
		type ModalSettings,
		type ModalStore
	} from '@skeletonlabs/skeleton';

	import { m } from '$paraglide/messages';

	export let data: any;
	export let form: any;

	const modalStore: ModalStore = getModalStore();

	function modalMFAAuthenticate(): void {
		const modalComponent: ModalComponent = {
			ref: MfaAuthenticateModal,
			props: {
				_form: data.mfaAuthenticateForm,
				formAction: '?/mfaAuthenticate'
			}
		};
		const modal: ModalSettings = {
			type: 'component',
			component: modalComponent,
			// Data
			title: m.mfaAuthenticateTitle(),
			body: m.enterCodeGeneratedByApp()
		};
		modalStore.trigger(modal);
	}

	$: form && form.mfaFlow ? modalMFAAuthenticate() : null;
</script>

<!-- Modern Glassmorphism Login Card -->
<div class="w-full max-w-md mx-auto">
	<div class="backdrop-blur-xl bg-white/70 border border-white/30 rounded-3xl shadow-2xl shadow-blue-100/50 p-8 transition-all duration-500 hover:shadow-3xl hover:shadow-blue-200/60 hover:-translate-y-1">
		<!-- Header Section -->
		<div data-testid="login" class="text-center mb-8">
			<!-- Login Icon with Gradient Background -->
			<div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-lg mb-6 relative">
				<div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-30"></div>
				<i class="fa-solid fa-right-to-bracket text-white text-2xl relative z-10" />
			</div>
			
			<!-- Title with Enhanced Typography -->
			<h2 class="text-2xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
				{m.logIntoYourAccount()}
			</h2>
			
			<!-- Subtitle -->
			<p class="text-gray-600 text-sm leading-relaxed">
				{m.youNeedToLogIn()}
			</p>
		</div>

		<!-- Login Form -->
		<div class="space-y-6">
			<SuperForm
				class="space-y-6"
				data={data?.form}
				dataType="form"
				let:form
				validators={zod(loginSchema)}
				action="?/login&next={$page.url.searchParams.get('next') || '/'}"
			>
				<!-- Enhanced Text Fields -->
				<div class="space-y-5">
					<TextField 
						type="email" 
						{form} 
						field="username" 
						label={m.email()}
					/>
					<TextField 
						type="password" 
						{form} 
						field="password" 
						label={m.password()}
					/>
				</div>

				<!-- Forgot Password Link -->
				<div class="flex justify-end">
					<a
						href="/password-reset"
						class="text-sm font-medium text-blue-600 hover:text-cyan-600 transition-all duration-200 hover:scale-105 flex items-center gap-1 group"
						data-testid="forgot-password-btn"
					>
						<span>{m.forgtPassword()}?</span>
						<i class="fa-solid fa-arrow-right text-xs opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1"></i>
					</a>
				</div>

				<!-- Modern Login Button -->
				<button
					class="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-200/50 focus:outline-none focus:ring-4 focus:ring-blue-200/50 active:scale-[0.98] relative overflow-hidden group"
					data-testid="login-btn"
					type="submit"
				>
					<!-- Button Background Effect -->
					<div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					<div class="relative z-10 flex items-center justify-center gap-2">
						<i class="fa-solid fa-sign-in-alt mt-1"></i>
						<span>{m.login()}</span>
					</div>
				</button>
			</SuperForm>

			<!-- SSO Section -->
			{#if data.SSOInfo.is_enabled}
				<!-- Elegant Divider -->
				<div class="flex items-center my-8">
					<div class="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
					<span class="px-4 text-sm text-gray-500 bg-white/70 rounded-full">
						{m.or()}
					</span>
					<div class="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
				</div>

				<!-- Modern SSO Button -->
				<button
					class="w-full bg-white/80 hover:bg-white border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-200/30 active:scale-[0.98] flex items-center justify-center gap-3 group"
					on:click={() => redirectToProvider(data.SSOInfo.sp_entity_id, data.SSOInfo.callback_url, 'login')}
				>
					<div class="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
						<i class="fa-solid fa-key text-white text-sm"></i>
					</div>
					<span>{m.loginSSO()}</span>
					<i class="fa-solid fa-arrow-right text-sm opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1"></i>
				</button>
			{/if}
		</div>

		<!-- Security Badge -->
		<div class="mt-8 pt-6 border-t border-gray-200/50">
			<div class="flex items-center justify-center gap-2 text-xs text-gray-500">
				<i class="fa-solid fa-shield-halved text-green-500"></i>
				<span>Secured with enterprise-grade encryption</span>
			</div>
		</div>
	</div>
</div>

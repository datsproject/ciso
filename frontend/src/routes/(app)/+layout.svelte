<script lang="ts">
	// Most of your app wide CSS should be put in this file
	import '../../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { safeTranslate } from '$lib/utils/i18n';

	import SideBar from '$lib/components/SideBar/SideBar.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs/Breadcrumbs.svelte';
	import { pageTitle, clientSideToast } from '$lib/utils/stores';
	import { getCookie, deleteCookie } from '$lib/utils/cookies';
	import { browser } from '$app/environment';
	import { m } from '$paraglide/messages';

	import CommandPalette from '$lib/components/CommandPalette/CommandPalette.svelte';

	let sidebarOpen = true;

	$: classesSidebarOpen = (open: boolean) => (open ? 'ml-7 lg:ml-64' : 'ml-7');

	$: if (browser) {
		const fromLogin = getCookie('from_login');
		if (fromLogin === 'true') {
			deleteCookie('from_login');
			fetch('/fe-api/waiting-risk-acceptances').then(async (res) => {
				const data = await res.json();
				const number = data.count ?? 0;
				if (number <= 0) return;
				clientSideToast.set({
					message: m.waitingRiskAcceptances({
						number: number,
						s: number > 1 ? 's' : '',
						itPlural: number > 1 ? 'i' : 'e'
					}),
					type: 'info'
				});
			});
		}
	}
	import type { ModalComponent, ModalSettings, ModalStore } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { PageData, ActionData } from './$types';
	import QuickStartModal from '$lib/components/SideBar/QuickStart/QuickStartModal.svelte';

	export let data: PageData;
	export let form: ActionData;

	import { getSidebarVisibleItems } from '$lib/utils/sidebar-config';

	export let sideBarVisibleItems = getSidebarVisibleItems(data?.featureflags);

	const modalStore: ModalStore = getModalStore();
	function modalQuickStart(): void {
		let modalComponent: ModalComponent = {
			ref: QuickStartModal,
			props: {}
		};
		let modal: ModalSettings = {
			type: 'component',
			component: modalComponent,
			// Data
			title: m.quickStart()
		};
		modalStore.trigger(modal);
	}
</script>

<!-- App Shell -->
<AppShell
	slotPageContent="p-8 bg-gradient-to-br from-blue-50 to-slate-200"
	regionPage="transition-all duration-300 {classesSidebarOpen(sidebarOpen)}"
>
	<svelte:fragment slot="sidebarLeft">
		<SideBar bind:open={sidebarOpen} {sideBarVisibleItems} />
	</svelte:fragment>
	<svelte:fragment slot="pageHeader">
		<AppBar background="bg-white" padding="py-2 px-4" class="relative">
			<span
				class="text-2xl font-bold pb-1 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dats-glow"
				id="page-title"
			>
				{safeTranslate($pageTitle)}
			</span>
			{#if data?.user?.is_admin}
				<button
					on:click={modalQuickStart}
					class="absolute top-7 right-9 p-2 rounded-full bg-blue-600 text-white text-xs shadow-lg
					ring-2 ring-blue-400 ring-offset-2 transition-all duration-300
					hover:bg-blue-700 hover:ring-blue-300 hover:ring-offset-blue-100
					hover:shadow-blue-500/50 focus:outline-none focus:ring-blue-500"
				>
					{m.quickStart()}
				</button>
			{/if}
			<hr class="w-screen my-1" />
			<Breadcrumbs />
		</AppBar>
	</svelte:fragment>
	<!-- Router Slot -->
	<CommandPalette />
	<slot />
	<!-- ---- / ---- -->
</AppShell>

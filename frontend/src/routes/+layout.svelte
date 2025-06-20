<script lang="ts">
	// Most of the app wide CSS should be put in this file
	import '../app.postcss';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import { browser } from '$app/environment';

	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

	import { getToastStore, storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	// Initializing stores prevents known security issues with SvelteKit SSR
	// https://github.com/skeletonlabs/skeleton/wiki/SvelteKit-SSR-Warning
	import { initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();

	import Modal from '$lib/components/Modals/Modal.svelte';
	import { Toast } from '@skeletonlabs/skeleton';
	import type { ModalComponent, ToastSettings } from '@skeletonlabs/skeleton';
	import { clientSideToast } from '$lib/utils/stores';

	import { getFlash } from 'sveltekit-flash-message';
	import { page } from '$app/stores';

	const flash = getFlash(page);
	const toastStore = getToastStore();

	const toast = (message: string, options: Record<string, string>) => {
		const t: ToastSettings = {
			message: message,
			...options
		};
		toastStore.trigger(t);
	};

	interface FlashMessage {
		message: string;
		type: 'success' | 'error' | 'warning' | 'info';
	}

	function handleToast(flash: FlashMessage | undefined) {
		if (!flash) return;

		toast(flash.message, {
			background:
				flash.type == 'success'
					? 'variant-filled-success'
					: flash.type === 'error'
						? 'variant-filled-error'
						: flash.type == 'warning'
							? 'variant-filled-warning'
							: 'variant-filled-primary'
		});
	}

	clientSideToast.subscribe((flash) => {
		handleToast(flash);
		clientSideToast.set(undefined);
	});

	flash.subscribe(($flash) => {
		handleToast($flash);
		// Clearing the flash message could sometimes
		// be required here to avoid double-toasting.
		flash.set(undefined);
	});

	import DisplayJSONModal from '$lib/components/Modals/DisplayJSONModal.svelte';
	import CreateModal from '$lib/components/Modals/CreateModal.svelte';
	import DeleteConfirmModal from '$lib/components/Modals/DeleteConfirmModal.svelte';
	import ParaglideJsProvider from './ParaglideJsProvider.svelte';

	const modalRegistry: Record<string, ModalComponent> = {
		// Set a unique modal ID, then pass the component reference
		displayJSONModal: { ref: DisplayJSONModal },
		createModal: { ref: CreateModal },
		deleteConfirmModal: { ref: DeleteConfirmModal }
	};

	$: if (browser && $page.url.searchParams.has('refresh')) {
		$page.url.searchParams.delete('refresh');
		window.location.href = $page.url.href;
	}
</script>

<svelte:head><link rel="icon" href="/favicon.ico" /></svelte:head>
<ParaglideJsProvider>
	<Modal components={modalRegistry} />
	<Toast />
	<slot />

	{#if $flash}
		{@const bg = $flash.type == 'success' ? '#3D9970' : '#FF4136'}
		<div style:background-color={bg} class="flash">{$flash.message}</div>
	{/if}
</ParaglideJsProvider>

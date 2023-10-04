<script>
	import { onMount } from 'svelte';
	import { useFetch } from '../hooks/useFetch.js';
  export let Name;
  export let endpoint;
	$: poster = [];
	async function load() {
		try {
			poster = await useFetch(endpoint);
			console.log(poster);
		} catch (error) {
			console.log(error);
		}
	}
	onMount(load);

	function nextslide() {
		const slider = document.querySelector(`#${endpoint}`);
		if (slider) {
			// Calculate the width of each slide item
			const slideWidth = slider.firstElementChild.clientWidth;
			console.log(slideWidth);
			// Calculate the next scroll position
			const nextScrollLeft = slider.scrollLeft + slideWidth + 300;
			console.log(slideWidth);
			// Check if the next scroll position is within bounds
			if (nextScrollLeft <= slider.scrollWidth - slider.clientWidth) {
				slider.scrollLeft = nextScrollLeft;
			}
      
		}
	}
	function prevslide() {
		const slider = document.querySelector(`#${endpoint}`);
		if (slider) {
			// Calculate the width of each slide item
			const slideWidth = slider.firstElementChild.clientWidth;
			console.log(slideWidth);
			// Calculate the next scroll position
			const nextScrollRight = slider.scrollLeft - slideWidth - 300;
			console.log(slideWidth);
			// Check if the next scroll position is within bounds
			if (nextScrollRight <= slider.scrollWidth + slider.clientWidth) {
				slider.scrollLeft = nextScrollRight;
			}
		}
	}
</script>

<div class="relative">
<h1 class="text-2xl font-semibold p-4">{Name}</h1>
<button on:click={prevslide} class="absolute z-10 left-[5vh] top-[45%] bg-[#222222] text-red-400 rounded-md p-2">Prev</button>
<div id={endpoint}  class="w-full p-4 flex sliderpop overflow-x-hidden transition-transform gap-[5vh] relative">
  
	{#each poster as movie}
  <a href={"/Details/" + movie.id}><div class="p-2 hover:scale-105 transition-transform cursor-pointer">
    <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="poster" class="min-w-[15vw] rounded-xl object-cover">
    <p class="text-sm font-semibold mt-2 text-center">{movie.original_title}</p>
  </div></a>
	{/each}
  
</div>
<button on:click={nextslide} class="absolute right-[5vh] top-[45%] text-red-400 bg-[#222222] rounded-md p-2">Next</button>
</div>





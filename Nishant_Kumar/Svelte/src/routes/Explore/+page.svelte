<script>
    export let data;
  </script>
  
  
  <div class="relative">
    <h1 class="text-2xl font-semibold p-4">Explore</h1>
    <div class="w-full p-4 grid grid-cols-3 sliderpop   gap-[5vh] relative">
      {#each data.props as movie}
      <a href={"/Details/" + movie.id}><div class="p-2 hover:scale-105 transition-transform cursor-pointer">
        <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="poster" class="min-w-[15vw] rounded-xl object-cover">
        <p class="text-sm font-semibold mt-2 text-center">{movie.original_title}</p>
      </div></a>
      {/each}
    </div>
    </div>
  
  
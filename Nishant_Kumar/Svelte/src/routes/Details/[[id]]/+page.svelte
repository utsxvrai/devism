<script>
    export let data;
    console.log(data.response);
</script>

<div class="flex p-[5vh] justify-between">
<div>
    <div class="w-[100vh]">
    <img src={"https://image.tmdb.org/t/p/w500/" + data.response.backdrop_path} alt="poster" class="w-full rounded-xl object-cover">
    </div>
</div>
<div class="w-[90vh] flex flex-col gap-[2vh]">
    <div>
    <h1 class="text-4xl font-bold">{data.response.original_title}</h1>
    <p class="text-lg font-medium">{data.response.tagline}</p>
    </div>
    <p class="text-md max-w-[70vh] text-gray-400 font-medium">{data.response.overview}</p>
    <div class="flex gap-[2vh]">
    <p class="text-md font-medium">Release Date: {data.response.release_date}</p>
    <p class="text-md font-medium">Rating: {data.response.vote_average}</p>
    </div>
    <div class="flex gap-[2vh]">
    <p class="text-md font-medium">Status: {data.response.status}</p>
    <p class="text-md font-medium">Language: {data.response.original_language}</p>
    </div>
    <div class="flex gap-[2vh]">
    <p class="text-md font-medium">Budget: {data.response.budget}</p>
    <p class="text-md font-medium">Revenue: {data.response.revenue}</p>
    </div>
    <div class="flex gap-[2vh]">
    <p class="text-md font-medium">Popularity: {data.response.popularity}</p>
    <p class="text-md font-medium">Vote Count: {data.response.vote_count}</p>
    </div>
</div>
</div>
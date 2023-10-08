<script >
    import PopMovies from "../components/PopMovies.svelte";
    import Navbar from "../components/Navbar.svelte";
    import Poster from "../components/Poster.svelte";
</script>


<Poster/>
<PopMovies Name = "Popular" endpoint = "popular"/>
<PopMovies Name = "Upcoming" endpoint = "upcoming"/>
<PopMovies Name = "Top rated" endpoint = "top_rated"/>

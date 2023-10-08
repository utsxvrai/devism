<script>
import "../app.css";
import logo from "../assets/logo1.png";
import profile from "../assets/profile.png";
let Search = "";
function navtoexplore(){
    push("/Explore")
}

</script>

<div class=" h-[15vh] flex p-5 justify-between  items-center">

    <a href="/"><div class="flex">
    <h1 class="font-bold text-3xl text-red-400">ONE</h1>
    <h1 class="font-bold text-3xl ">PLAY</h1>
    </div></a>


    <div class="flex items-center gap-[5vh]">
        
        <div class="flex gap-[2vh] items-center">
            <input type="text" placeholder="Search" bind:value={Search} class="p-2 rounded-lg border-2 bg-[#222222] border-gray-300 w-[25vw] focus:outline-none focus:border-red-400">
            <a href="/Search/{Search}"><button class="border-2 border-red-400 p-2 rounded-md hover:bg-red-400 hover:scale-105 transition-transform">Search</button></a>
        </div>
        
    <nav class="flex gap-[5vh] items-center " >
        <ul class="flex  gap-[4vh] font-semibold" >
            <a href="/Explore"><li class="hover:text-red-400 cursor-pointer">Explore</li></a>
        </ul>  
    </nav>
        <img src={profile} alt="profile" class="w-[6vh] rounded-xl object-cover  ">
    </div>
</div>

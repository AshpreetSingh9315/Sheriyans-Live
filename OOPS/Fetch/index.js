function fetchGithubData(){
    return fetch(`https://api.github.com/users/AshpreetSingh9315`).then(data=>data.json())
}

document.querySelector("button").addEventListener("click",()=>{
    fetchGithubData().then(data=>
        document.querySelector(".card").innerHTML+=`<div class="card w-32 h-46 rounded-lg border border-black">
        <div class="card-img w-full h-24 rounded-lg bg-red-400">
            <img src=${data.avatar_url} class="w-full h-full rounded-lg" alt="">
        </div>
        <div class="card-data px-3 py-2 bg-zinc-100">
            <h2 class="text-1xl">${data.name}</h2>
            <p class="text-xs text-zinc-500">${data.id}</p>
        </div>
    </div>`
    )
})
var filmesSigle = document.querySelector('.filmes .container');
var initial = 0;
var total_results = 1;
var totalMaisUm = total_results+1;

var btnSpan = document.querySelector('span.next');

fetch('https://api.themoviedb.org/3/movie/popular?api_key=0735c915942f0844b6fd0bf6e0aeb3ec&language=en-US&page='+total_results)
.then(Response => Response.json())
.then(allFilmes => {

    allFilmes.results.map((i,j) =>{


        if(j > 18)
        return;

        if(j == 0){
            filmesSigle.innerHTML+=`
        <div class="banner-principal" style="background-image: url(https://image.tmdb.org/t/p/original`+i.backdrop_path+`)">
                
        </div>
        
        `
        }else if(j == 1){
            filmesSigle.innerHTML+= `
            <h2>Assista o melhor filme</h2>
            <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`"></div>
            `
        }else{
            filmesSigle.innerHTML+= `
            <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`">
        
            </div>
            `
        }
        
   
    })

    
    console.log(allFilmes);
})

btnSpan.addEventListener('click', () =>{
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=0735c915942f0844b6fd0bf6e0aeb3ec&language=en-US&page='+totalMaisUm)
    .then(Response => Response.json())
    .then(allFilmes => {
        if(totalMaisUm < 500)
        totalMaisUm++;

    allFilmes.results.map((i,j) =>{


        if(j > 17)
        return;

        if(j == 0){
            filmesSigle.innerHTML+= `
            <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`"></div>
            `
        }else{
            filmesSigle.innerHTML+= `
            <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`">
        
            </div>
            `
        }
        
   
    })

    
})
})




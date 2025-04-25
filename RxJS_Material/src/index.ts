import {from, Observable,fromEvent} from "rxjs"
import { delay, filter, map, switchMap } from "rxjs/operators";

interface IMovie{
    title: string;
}

let button = document.getElementById('button');
let outout = document.getElementById('output');


let click = fromEvent(button, 'click');

function load(url: string) : Observable<IMovie[]> {

    return new Observable(subscriber => {
        outout.innerHTML = '';
        let xhr = new XMLHttpRequest();
    
        xhr.addEventListener('load', () => {
           let data  =JSON.parse(xhr.responseText);
    
          subscriber.next(data);
          subscriber.complete();
        }); 
      
        xhr.open('GET', url);
        xhr.send();
    });

};

function renderMovies(movies: IMovie[]) {
    movies.forEach((movie: IMovie) => {
        let div = document.createElement('div');
        div.innerText = movie.title;
        outout.appendChild(div);
    })
}

click.pipe(switchMap(() => load('../src/movies.json'))
).subscribe({
    next: renderMovies,
    error: (err : Error) => console.error(err),  
    complete: () => console.log('done'),
})

// interface mouseTrack{
//     x: number;
//     y: number;
// }

// let circles = document.getElementById('circle');
// let source = fromEvent(document, 'mousemove').pipe(
//     map((event: MouseEvent) => {
//         return {
//             x: event.clientX,
//             y: event.clientY
//         } as mouseTrack;        
//     }
// ), filter((value : mouseTrack) => value.x < 500),
//     //delay(3000)
// );      


// function onNext(value : mouseTrack){
//     //console.log(value);
//     circles.style.left = value.x + 'px';
//     circles.style.top = value.y + 'px';
// };

// source.subscribe({
//     next: (value:mouseTrack) => onNext(value),
//     error: (err : Error) => console.error(err),  
//     complete: () => console.log('done'),
// })

//let numbers = [1, 5, 10,15,20,25,30];
//let source = from(numbers);
// let sourceInstance = new Observable(subscriber => {

//     let index = 0
//     let produceValue = () => {
//         subscriber.next(numbers[index++]);
//         if(index < numbers.length){
//             setTimeout(produceValue, 2000);
//         } else {
//             subscriber.complete();
//         }
//         // for (let i of numbers) {
//         //     if(i >5)
//         //         subscriber.error('Error: Aconteceu Um Erro Esperado!');
    
//         //     subscriber.next(i);
//         // }
//         // subscriber.complete();
//     }
    
//     produceValue();
// })

// sourceInstance.pipe(
//     map((n: number) => n * 2) ).subscribe({
//     next: (x : number) => console.log(x),
//     error: (err : Error) => console.error(err),  
//     complete: () => console.log('done'),
//   });   

//   sourceInstance.pipe(
//     filter((n: number) => n > 4) ).subscribe({
//     next: (x : number) => console.log(`Filtered: ${x}`),    
//     error: (err : Error) => console.error(err),     
//   });   
// class myObserver{    
//     next(x : number){
//         console.log(x);
//     }
//     error(err : Error){
//         console.error( err);
//     }
//     complete(){
//         console.log('Done class');
//     }
// }

// const myObserver = {
//     next: (x : number) => console.log(x),
//     error: (err : Error) => console.error(err),
//     complete: () => console.log('Done Json'),
// }
// function component() {
// //   source.subscribe({
// //     next: (value) => console.log(value),
// //     error: (err) => console.log(err),  
// //     complete: () => console.log('done'),
// //   });
//     source.subscribe( myObserver);
//     sourceInstance.subscribe( myObserver);
// }

// component();     

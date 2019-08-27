import { Observable } from 'rxjs/Observable';
import { setTimeout } from 'timers';
import 'rxjs/add/operator/share';
import { fromEvent } from 'rxjs/Observable/fromEvent';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { merge } from 'rxjs/observable/merge';
import { map, skipUntil } from 'rxjs/operators';
import { pluck } from 'rxjs/operators';
import { from } from 'rxjs/Observable/from';
import { interval } from 'rxjs/Observable/interval';

const observable1 = Observable.create((x:any) => {
    let i = 1;
    setInterval(() => {
        x.next(i++)
    }, 1000)
});

const observable2 = new Subject();

setTimeout(() => {
    observable2.next('Hey!')
}, 3000)

const newObs = observable1.pipe(skipUntil(observable2));

newObs.subscribe((x:any) => addItem(x))

// from([{ name: 'Max', gender: 'Male', birthday: '07/30/1980', skills: { computers: 'medium', electronics: 'medium' } },
// { name: 'Jaina', gender: 'Female', birthday: '01/25/1995', skills:{ computers: 'low', electronics: 'low' } },
// { name: 'John', gender: 'Male', birthday: '02/15/1979', skills:{ computers: 'high', electronics: 'high' }, }])
// .pipe(pluck('name'))
// .subscribe((x:any) => addItem(x));

// Observable.create((observer:any) => {
//     observer.next({ name: 'Max', gender: 'Male', birthday: '07/30/1980', skills: { computers: 'medium', electronics: 'medium' } });
//     observer.next({ name: 'Jaina', gender: 'Female', birthday: '01/25/1995', skills:{ computers: 'low', electronics: 'low' }  });
//     observer.next({ name: 'John', gender: 'Male', birthday: '02/15/1979', skills:{ computers: 'high', electronics: 'high' }  });
// }).pipe(pluck('name'))
// .subscribe((x:any) => addItem(x));


// Observable.create((observer:any) => {
//     observer.next(4);
//     observer.next(10);
//     observer.next(8);
// }).pipe(map((value:number) => value * 10)
// ).subscribe((x:any) => addItem(x));


// const observer = observable.subscribe((value:any) => addItem(value));

// const observable = Observable.create((observer:any) => 
//     observer.next('Hey guys!')
// );

// const observable2 = Observable.create((observer:any) => 
//     observer.next('How is it?')
// );

// const newObs = merge(observable, observable2);

// newObs.subscribe((value:any) => addItem(value));

// const observable = fromEvent(document, 'mousemove');

// const subject = new AsyncSubject();

// subject.subscribe(
//     (value:any) => addItem(`Subject 1: ${value}`),
//     () => addItem(`Subject 1 Completed`)
// );

// let i:number = 1;
// const int = setInterval(() => subject.next(i++), 100);

// subject.next('The first thing has been sent');
// subject.next('Another thing has been sent');
// subject.next('...Observer 2 is about to subscribe...');


// setTimeout(() => {    
//     const observer2 = subject.subscribe(
//         data => addItem(`Observer 2: ${data}`)
//     );
//     subject.complete();
// }, 500);

// subject.next('The second thing has been sent');
// subject.next('A third thing has been sent');

// observer2.unsubscribe();
// subject.next('A final things has been sent');

// const observable = Observable.create((observer:any) => {
//     try{
//         observer.next('Hey guys!')
//         observer.next('How are you?')
//         setInterval(() => {
//             observer.next('I am good.')
//         }, 2000);
//         // observer.complete()
//         // observer.next('This will not send')
//     } catch(err) {
//         observer.error(err)
//     }
// }).share();

// const observer = observable.subscribe(
//                     (value:any) => addItem(value),
//                     (error:any) => addItem(error),
//                     () => addItem('Completed'));

// setTimeout(() => {
//     const observer2 = observable.subscribe((x:any) => addItem(`Subscriber 2: ${x}`));
// }, 1000);

// // const observer2 = observable.subscribe(
// //     (value:any) => addItem(value)
// // );

// // observer.add(observer2);

// // setTimeout(() => {
// //     observer.unsubscribe();
// // }, 6001)

function addItem(val:any){
    let node = document.createElement("li");
    let textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}

// setTimeout(() => {
//    const subscription = observable.subscribe((value:any) => {
//        addItem(value)
//    }) 
// }, 2000);
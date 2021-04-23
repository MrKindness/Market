import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

const search$ = new Observable<Event>((observer) => {

  const elem = document.getElementById('InputId');

  elem?.addEventListener('input', (event) => {
    observer.next(event);
    console.log('hello');
    //observer.error(event);
    //observer.complete();
  });
});

const searchsub = search$
  .pipe(
    map((event) => {
      return (event.target as HTMLInputElement).value;
    }),
    debounceTime(500),
    distinctUntilChanged()
  )
  .subscribe(
    (event) => {
      console.log(event);
      searchsub.unsubscribe();
    },
    (error) => {
      console.log('We have an error!');
      console.log(error);
    },
    () => {
      console.log('We Completed!');
    }
  );

  
export class Init {
  todo;
  load(){
    if(localStorage.getItem('todo') === null || 
       localStorage.getItem('todo') === undefined || 
       localStorage.getItem('todo').length === 2) {
      this.todo = [
        {
            text: 'task 1'
        },
        {
            text: 'task 2'
        },
        {
            text: 'task 2'
        },
      ];

      localStorage.setItem('todo', JSON.stringify(this.todo));
      return;
    } 
  }
}
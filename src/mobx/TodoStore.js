import { makeObservable,observable, action, computed } from "mobx";

class TodoStore {
  date = new Date();
  selectedDate = (new Date()).getMonth()+1 + "/" + (new Date()).getDate();
  input = '';
  id = (0);
  todos = [
      { id: 0, text: ' 리액트 소개', date:"9/15"},
      { id: 1, text: ' 리액트 설치', date:"9/15"},
      { id: 2, text: ' 리액트 이론', date:"9/20"},
      { id: 3, text: ' 리액트 실습', date:"9/22"}
    ];
  filteredtodos = [];

  constructor() {
    makeObservable(this, {
      input:observable,
      todos : observable,
      filteredtodos : observable,
      date : observable,
      selectedDate : observable,
      getFiltertodos : computed,
      setSelectedDate : action,
      setFilteredtodos : action,
      handleChange : action,
      handleCreate : action,
      todoRemove : action
    });

    // 수정 필요
    let d = this.selectedDate;
    let filtered = (this.todos).filter(function(element){
     return element.date === d;
    });
    this.filteredtodos = filtered;
  }
  
  get getFiltertodos(){
    return this.filteredtodos;
  }

  setSelectedDate=(date)=>{
    this.date = date;
    this.selectedDate =date.getMonth()+1 + "/" + date.getDate();
    this.setFilteredtodos();
  }


setFilteredtodos=()=>{
  let date = this.selectedDate;
  let filtered = (this.todos).filter(function(element){
      return element.date === date;
  });
  this.filteredtodos = filtered;
}

 handleChange = (e) => {
    this.input = e.target.value;
 }

  handleCreate = () => {
    this.id = this.todos[this.todos.length-1].id+1;

    this.todos = this.todos.concat({
          id: this.id,
          text: this.input,
          date:this.selectedDate
        });
        
    this.filteredtodos = this.filteredtodos.concat({
      id: this.id,
      text: this.input,
      date:this.selectedDate
    });
    this.input = '';
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
        this.handleCreate();
    };
}

  todoRemove = (id) => {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.filteredtodos = this.filteredtodos.filter(todo => todo.id !== id);
  }

}

export default new TodoStore();
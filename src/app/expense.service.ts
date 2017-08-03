import uuidv4  from 'uuid/v4';
import {Expense} from './expense.model';

export class ExpenseService{

    categories = ['Food','Travel','Others'];
    
    expenses= this.loadExpenses();

 
  addExpense(expense: Expense){
    expense.id = uuidv4();
    this.expenses.push(expense);
    this.storeExpenses();
  }

  getExpense(expenseId: string){
      const expense = this.expenses.find(it => it.id === expenseId);
      return Object.assign({}, expense);
  }

  removeExpense(expenseId: string){
    const index = this.expenses.findIndex(it => it.id === expenseId);
    this.expenses.splice(index,1);
    this.storeExpenses();
  }

  updateExpense(expense: Expense){
      const index = this.expenses.findIndex(it => it.id === expense.id);
      this.expenses[index] = expense;
      this.storeExpenses();
  }

  private loadExpenses(): Expense[] {
    const exepenses = localStorage.getItem('expenses');
    if(exepenses){
      return JSON.parse(exepenses);
    } else{
      return [];
    }
  }

  private storeExpenses(){
    localStorage.setItem('expenses', JSON.stringify(this.expenses));
  }

}
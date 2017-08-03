import uuidv4  from 'uuid/v4';
import {Expense} from './expense.model';

export class ExpenseService{

    categories = ['Food','Travel','Others'];
    
    expenses: Expense[] = [];

 
  addExpense(expense: Expense){
    expense.id = uuidv4();
    this.expenses.push(expense);
  }

  getExpense(expenseId: string){
      const expense = this.expenses.find(it => it.id === expenseId);
      return Object.assign({}, expense);
  }

  removeExpense(expenseId: string){
    const index = this.expenses.findIndex(it => it.id === expenseId);
    this.expenses.splice(index,1);
  }

  updateExpense(expense: Expense){
      const index = this.expenses.findIndex(it => it.id === expense.id);
      this.expenses[index] = expense;
  }


}
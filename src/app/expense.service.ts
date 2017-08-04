import Dexie from 'dexie';
import uuidv4  from 'uuid/v4';
import {Expense} from './expense.model';

export class ExpenseService extends Dexie {

    expenses: Dexie.Table<Expense, string>;
    categories = ['Food','Travel','Others'];

    constructor(){
      super('expense_tracker');
      this.version(1).stores({
        expenses: 'id,date'
      })
    }

 
  addExpense(expense: Expense){
    expense.id = uuidv4();
    this.expenses.add(expense); 
  }

  getExpense(expenseId: string): Dexie.Promise<Expense>{
      return this.expenses.get(expenseId);
  }

  getExpenses(): Dexie.Promise<Expense[]>{
    return this.expenses.toArray();
  }

  removeExpense(expenseId: string){
     this.expenses.delete(expenseId);
  }

  updateExpense(expense: Expense){
    this.expenses.update(expense.id, expense);
  }

}
class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(
        description: string,
        value: number,
        date: string
    ){
        this.description = description;
        this.value = value;
        this.date = date
    }

    
    public getDescription() : string {
        return this.description
    }

    
    public getValue() : number {
        return this.value   
    }

    
    public getDate() : string {
        return this.date
    }
}


class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction;

    constructor(
       cpf: string,
       name: string,
       age: number,
       transactions: Transaction,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
       this.transactions = transactions;
    }

    
    public getCpf() : string {
        return this.cpf
    }

    
    public getName() : string {
        return this.name
    }

    
    public getAge() : number {
        return this.age
    }

    
    public getBalance() : number {
        return this.balance
    }
    
    
    public getTransactions() : Transaction {
        return this.transactions
    }
  
  }

  class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
    
    
    public getAccounts() : UserAccount[] {
        return this.accounts
    }
    
  }

  const transactions = new Transaction('teste', 200, 'hoje')
  const user = new UserAccount('123456789', 'user1', 19, transactions)

  console.log(user.getTransactions());

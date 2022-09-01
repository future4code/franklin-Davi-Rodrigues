import { User } from "./User"
import { Customer } from "./Customer"
import { Client } from "./Client"
import { Place, Residence, Commerce, Industry, } from "./Place"

// Ex 1
// a) Nã0, pois a senha está como private e não possui um método get.
// b) 1 vez.
// ###############################################################

/*
* Ex 1
* a) Nã0, pois a senha está como private e não possui um método get.
* b) 1 vez.
*
*************************************************************************
*
* Ex 2
* a) 1 vez
* b) 1 vez. A palavra reservada 'super' convoca o construtor da classe 
* pai que tem o console.log('Chamando o construtor da classe User') 
*
*************************************************************************
*
* Ex 3
* a) Não. A classe filha herda as características da classe pai, logo o
*    password também será private, e como a classe pai não tem um método 
*    setter para isso, não é possível alterar.
*
*************************************************************************
*
* Polimorfismo
* 
* Ex 1
* a) É possível ter acesso a todas as propriedades já que não possui 
*    encapsulamento.
*
*************************************************************************
*
* Ex 2
* a) error TS2511: Cannot create an instance of an abstract class.
* b) Para isso devemos criar um subclasse que herde de Place
*
*************************************************************************
*
* Ex 4
* a) Possui os métodos getCpf e calculateBill, possui as propriedades 
*    name, registrationNumber, consumedEnergy, o restante é herdado
*
*************************************************************************
*
* Ex 05
* a) Ambos herdam de classes que herdam da classe abstrata place, também utilizam a mesma interface
* b) Uma herda de Residence e outra de Commerce, os métodos getters também são diferentes.
*
*************************************************************************
*
* Ex 06
* a) Deve ser filha de Industry, pois precisa herdar a propriedade machinesQuantity
* b) Client, pois é base para criar um cliente
* c) Os dados do cliente não devem ser alterados
*/



  const user = new User('01', 'email@email.com', 'teste', '123456')
  const customer = new Customer('01', 'email@email.com', 'teste', '123456', '1234 5678 9012 3456')
  const client: Client = {
    name: 'teste',
    registrationNumber: 12,
    consumedEnergy: 500,
    calculateBill: () => {
        return 2
    }
  }
  const residence = new Residence(1, '10000-000')
  const commerce = new Commerce(1, '01000-000')
  const industry = new Industry(1, '00100-000')

  console.log(user.getEmail(), user.getId(), user.getName());
  console.log(customer.purchaseTotal, customer.getName(), customer.getId(), customer.getEmail(), customer.getCreditCard());
  customer.introduceYourself()

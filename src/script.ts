//Abaixo esta a classe de Erro e seus atributos com a entrada dos dados do erro
class SystemError {
  public message: string;
  public type: string;
  
  constructor(message: string, type: string) {
    this.message = message;
    this.type = type;
  }
}
console.log('Sera que vai dar erro ?');
//try testa se ocorrer o erro o catch(error)exibe a mensagem que voce que apartir do que você por
try{
console.log('antes do erro!');
throw new SystemError ('Erro que eu mesmo gerei', 'Abstrato');
console.log('Depois do erro');

}catch(error){
//O if eta aqui para saber se o erro e uma instancia da Classe SystemError
if(error instanceof SystemError){
console.log(`${error.type}: ${error.message}`)
 }else{
    console.log(`Error ${error.mensagem}`);
 }
}
console.log('Acabou!!!');
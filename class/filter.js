const user=require('../user');
class Filter {
     constructor(param){
      this.param=param
     }
     byAge(){
         return user.filter(item=>item.age===this.param)
     }
}

module.exports=Filter;
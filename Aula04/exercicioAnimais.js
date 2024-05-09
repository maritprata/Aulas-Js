let categoriaAnimais = "A5"
//A1 Vertebrados 
//A2 Invertebrados
//A3 Onívoros
//A4 Ovíparos
//A5 Herbívoros

switch (categoriaAnimais) {
    case "A1":0
        console.log("O animal é: Vertebrado");
        break;
       
        case "A2":
            console.log("O animal é: Invertebrado");
           break;
           
           case "A3": 
           console.log("O animal é: Onívoro");
           break;
         
           case "A4":   
           console.log("O animal é: Ovíparo"); 
           break;
          
           case "A5":
           console.log("O animal é: Herbívoro");
           break;
    default: console.log(" Não encontrou o animal"); }
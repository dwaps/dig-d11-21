import { Lieu } from "./Lieu.js";
export class APIReader{
  
    static  APIUrl = "https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=lieux-dacces-au-numerique-portail-solidarites-ccas-lille&q=&facet=acteur";

    static apiDatas= [];
    
    static async  getDatasFromAPI() {
        if(APIReader.apiDatas.length>0) return apiDatas;
        let datas = [];
      
        await fetch(APIReader.APIUrl)
          .then(function (res) {
            if (res.ok) {
              return res.json();
            }
          })
          .then(function (value) {
            
            datas = value.records;      
           
          })
          .catch(function (err) {
          });
          
          APIReader.apiDatas=datas;
      
        return datas;
        // recuperation d'une liste d'acteurs avec leur nom et leur adresse.
      };
      // recuperation d'une liste de lieux avec leur nom et leur adresse.
     static async getLieux(){       
      return (await APIReader.getDatasFromAPI()).map(function (data){
      const lieu=new Lieu(data.fields.acteur,data.fields.adresse);
      
      return lieu;
    
      })
   };
    
}
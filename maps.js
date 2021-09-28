
// A $( document ).ready() block.
$( document ).ready(function() {
    
    var groups = [
        {id:'#layer26', label:'Kigali-Rural communes'},
        {id:'#layer24', label:'Kigali-Ville communes'},
        {id:'#layer43', label:'Gitarama communes'},
        {id:'#layer61', label:'Butare communes'},
        {id:'#layer81', label:'Gikongoro communes'},
        {id:'#layer95', label:'Cyangugu communes'},
        {id:'#layer165', label:'Kibungo communes'},
        {id:'#layer107', label:'Kibuye communes'},
        {id:'#layer117', label:'Gisenyi communes'},
        {id:'#layer130', label:'Ruhengeri communes'},
        {id:'#layer147', label:'Byumba communes'}
       ]
    

    var getId =(name) =>{
        return `#${name}`
    }
    var styledb = {}  
    var currCommune=""
    var currRegion =""      
    var main  = document.querySelectorAll("#Prefectures > *"); 
    var communeList =document.querySelectorAll("#layer18 > *");

    var swapCommunes = (commune) =>{

         if(commune !== currCommune ){

             if(currCommune != ""){
              
                $(getId(currCommune)).attr("style", styledb[currCommune].off )
                $(getId(commune)).attr("style", styledb[commune].on )              
                
             } else {

                $(getId(commune)).attr("style", styledb[commune].on )

             }
             currCommune = commune
         }

    }




    communeList.forEach(function(el) {

        el.addEventListener("mouseenter", function() {
            var id = $(this).attr("id")
            
            var list = document.querySelectorAll(`#${id} > *`);
            list.forEach(function(item){
                item.addEventListener("mouseenter", function() {
                    var comid = $($(item).children()[0]).attr("id")
                    if(! styledb[comid]){

                        styledb[comid] = {
                            off: $($(item).children()[0]).attr("style"),
                            on : ""
                        }
                    }
                    var style = styledb[comid].off.split(";")
                    var idFill = -1 
                    var onColor = "fill:#d6e1ac"
                    

                    style.map((item,i) =>{
                       
                        if(item.includes("fill:")){
                            idFill = i
                            style.splice(i, 1, onColor );                           
                            styledb[comid].on =  style.join(";")
                        }
                       
                    })

                    swapCommunes(comid)

                })
            })

           
        });

        
        
      });
      


    var swap = (region) =>{

         if(region !== currRegion ){
             if(currRegion != ""){
                $(getId(currRegion)).show()
                $(getId(region)).hide()
                
             } else {
                $(getId(region)).hide()

             }
             currRegion = region
         }

    }
    
 
    main.forEach(function(el) {

        el.addEventListener("mouseenter", function() {
            var id = $(this).attr("id")
            swap($(this).attr("id"))     
  
        });

    });
      

   

});


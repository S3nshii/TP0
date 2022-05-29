
usuario_recordado=false;
productos=false;
console.log(usuario_recordado)

var usuario_header=new Vue({
el:'header',
data:usuario_recordado


});


var Usarneme_div = new Vue({
    el: '#Username_div',
    data:{
        usuario:"", 
        continuar:0},
    methods:{
        Recordarycontinuar(){
            if(this.usuario==""){
                alert("Por favor completa el campo solicitado");
            }else if(document.getElementById("Recordar").checked==true){
                window.localStorage.setItem(nombre_usuario,this.usuario);
                usuario_recordado=true;
                this.continuar=1;
                document.getElementById("nombre_en_header").style.display="flex";
                document.getElementById("nombre_en_header").innerHTML="Usuario: "+this.usuario;
                show_products.productos=true;


            }else{
                usuario_header.usuario_recordado=true;
                console.log(usuario_recordado);
                console.log(this.usuario);
                this.continuar=1;
                document.getElementById("nombre_en_header").style.display="flex";
                document.getElementById("nombre_en_header").innerHTML="Usuario: "+this.usuario;
                console.log(usuario_header.usuario_recordado);
                show_products.productos=true;
            }
        }
    }
})
;
var show_products= new Vue({
    el:'#productos',
    data:{
        productos:false,
        Cpu_show:true,
        Ram_show:false,
        Gabinte_show:false,
        Computadora: [
                
                {nombre:"cpu_1",precio:2000,img:"",seleccionado:false,componente:"cpu"},
                {nombre:"cpu_2",precio:4000,img:"",seleccionado:false,componente:"cpu"},
                {nombre:"cpu_3",precio:6000,img:"",seleccionado:false,componente:"cpu"},
                {nombre:"ram_1",precio:6000,img:"",seleccionado:false,componente:"ram"},
                {nombre:"ram_2",precio:1000,img:"",seleccionado:false,componente:"ram"},
                {nombre:"ram_3",precio:3000,img:"",seleccionado:false,componente:"ram"},
                {nombre:"gabinete_1",precio:6000,img:"",seleccionado:false,componente:"gabinete"},
                {nombre:"gabinete_2",precio:6000,img:"",seleccionado:false,componente:"gabinete"},
                {nombre:"gabinete_3",precio:6000,img:"",seleccionado:false,componente:"gabinete"}

        ]
    },
    computed:{
        esCpu:function(){
            return this.Computadora.filter(function(value){
                return value.componente=="cpu";
            })
        },
        esRam:function(){
            return this.Computadora.filter(function(value){
                return value.componente=="ram";
            })
        },
        esGabinete:function(){
            return this.Computadora.filter(function(value){
                return value.componente=="gabinete";
            })
        }

    },
    methods:{
        Añadir(){
            
        }
    }
    
})


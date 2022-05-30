
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
        carrito_show:false,
        Computadora: [
                
                {nombre:"Procesador Intel Core i5 10400F 4.3GHz Turbo 1200 Comet Lake",precio:20000,img:"https://www.venex.com.ar/products_images/1598542335_38073e.jpg",seleccionado:false,componente:"cpu"},
                {nombre:"Procesador Intel Core i7 10700KF 5.1GHz Turbo 1200 Comet Lake",precio:40000,img:"https://www.tryhardware.com.ar/wp-content/uploads/2021/07/Procesador-Intel-Core-I7-10700KF-5.1GHz-Turbo-1200.jpg",seleccionado:false,componente:"cpu"},
                {nombre:"Procesador AMD Ryzen 7 5800X 4.7GHz Turbo AM4",precio:60000,img:"https://www.qloud.ar/SITES/IMG/gaming-point-06-2021/221_31-01-2022-03-01-15-procesador-amd-ryzen-7-5800x-1-1_ccexpress.png",seleccionado:false,componente:"cpu"},
                {nombre:"Memoria Kingston FURY™ Renegade DDR4 RGB  8GB  Kingston Technology",precio:6000,img:"https://media.kingston.com/kingston/features/ktc-features-memory-renegade-ddr4-rgb.jpg",seleccionado:false,componente:"ram"},
                {nombre:"Memoria Ram Kingston, KCP316ND8/8 - 8GB, 1600MHz, DDR3",precio:1000,img:"https://sipoonline.cl/wp-content/uploads/2021/06/Memoria-Ram-Kingston-KCP316ND88-8GB-1600MHz-DDR3-2.jpg",seleccionado:false,componente:"ram"},
                {nombre:"Memoria Ram Kingston Ddr4 3200mhz 16gb Hyperx Fury Rgb",precio:3000,img:"https://http2.mlstatic.com/D_NQ_NP_746372-MLA47262400839_082021-O.webp",seleccionado:false,componente:"ram"},
                {nombre:"Gabinete Gamer Redragon Devastator Gc-550 Rgb Acrilico",precio:6000,img:"https://www.precio-calidad.com.ar/wp-content/uploads/2020/09/REDRAGON-DEVASTATOR-GC-550-1.jpg",seleccionado:false,componente:"gabinete"},
                {nombre:"Gabinete Deepcool Macube 310 Blanco",precio:6000,img:"https://mcegamer.com/wp-content/uploads/2019/10/MACUBE-310-WH-1.jpg",seleccionado:false,componente:"gabinete"},
                {nombre:"Gabinete Gamer AUREOX Orion ARX 350G",precio:6000,img:"https://axa.com.ar/webaxa/20268-medium_default/gabinete-gamer-aureox-orion-arx-350g-sin-fuente.jpg",seleccionado:false,componente:"gabinete"}

        ],
        
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
        },
        Carrito:function(){
            return this.Computadora.filter(function(value){
                return value.seleccionado==true;
            })
        }

    },
    methods:{
        Añadir:function(flag,nombre){
            console.log(flag,nombre);
            console.log(this.Computadora.nombre);
            const resultado= this.Computadora.find(value=>value.nombre===nombre);
            console.log(resultado);
            console.log(resultado.nombre);
            if(nombre==resultado.nombre){
                this.Computadora.seleccionado=true;
                console.log(this.Computadora.seleccionado);
                console.log(this.Computadora);
            };
            if(flag==0){
                this.Cpu_show=false;
                this.Ram_show=true;
                


            }else if(flag==1){
                this.Ram_show=false;
                this.Gabinte_show=true;

            }else if(flag==2){
                this.Gabinte_show=false;
                this.carrito_show=true;


            };
        }
    }
    
    
})

function Validarmail(){
    const texto=document.getElementById("email").value;
    console.log(texto);
    const nombre=document.getElementById("nombre_contacto").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(texto==""|| nombre==""){
        alert("por favor completar los campos solicitados");
    }else if(texto.match(mailformat)){
        return true;
    }else{
        alert("El email ingresado no existe")
        
    };
}


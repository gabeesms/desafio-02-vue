new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado(){
            return this.valor == 37 ?
            'Valor igual' : 'Valor diferente'
        }
        
    },
    watch: {
        valor(novo, antigo){
            setTimeout(() =>{
                this.valor = 0
            }, 5000)
        }
    },
    methods: {
        aumentar(){
            this.valor++
        },
        diminuir(){
            this.valor--
        }
    }
});
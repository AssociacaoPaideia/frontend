<template>
<b-container>
    <h2 class="title">{{this.subscriber.user.firstName + " " + this.subscriber.user.lastName }}</h2>
    <b-img v-if="img" :src="img" fluid alt="Responsive image" class="mobile-img"/>
    <b-row>
        <b-col class="subs-info">
            <p><strong class="subs-title">Tel:</strong> {{this.subscriber.phone}} </p>
            <p><strong class="subs-title">Local de nascimento:</strong> {{this.subscriber.birthPlace}} </p>
            <p><strong class="subs-title">CPF:</strong> {{this.subscriber.cpf}} </p>
            <p><strong class="subs-title">RG:</strong> {{this.subscriber.rg}} </p>
            <p><strong class="subs-title">Cartão cidadão:</strong> {{this.subscriber.cartaoCidadao}} </p> 
        </b-col>
        <b-col class="desktop-img-col">
            <b-img v-if="img" :src="img" fluid alt="Responsive image" class="desktop-img"/>
        </b-col>
    </b-row>
    <b-row>
    <b-card no-body class="table">
        <b-tabs card>
            <b-tab v-for="(file) in this.items" :key="file.type" v-if="file.isLoaded" :disabled="!file.isLoaded" :title="file.displayName" active>
                <b-img v-if="file.isLoaded" :src="file.file" fluid alt="Responsive image" />
                <b-progress v-if="!file.isLoaded" :value="100" :max="100" variant="success" striped animated class="mb-2"></b-progress>
            </b-tab>
        </b-tabs>
    </b-card>
    </b-row>
</b-container>
    
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    props: ['subscriberId'],
    data() {
        return {
            img: null,
            items: [
                {
                    type: "RG",
                    displayName: "RG",
                    isLoaded: false,
                    file: null
                },
                {
                    type: "CPF",
                    displayName: "CPF",
                    isLoaded: false,
                    file: null
                },
                {
                    type: "PARENT_RG",
                    displayName: "RG do Responsável",
                    isLoaded: false,
                    file: null
                },
                {
                    type: "PARENT_CPF",
                    displayName: "CPF do Responsável",
                    isLoaded: false,
                    file: null
                },
                {
                    type: "HISTORY",
                    displayName: "Histórico Escolar",
                    isLoaded: false,
                    file: null
                },
                {
                    type: "SCHOLARSHIP",
                    displayName: "Comprovante de Bolsa",
                    isLoaded: false,
                    file: null
                }, 
                {
                    type: "EJA",
                    displayName: "Comprovante Matrícula 3o Período EJA",
                    isLoaded: false,
                    file: null
                },
                {
                    type: "MEDICAL",
                    displayName: "Atestado médico",
                    isLoaded: false,
                    file: null
                },
                {
                    type: "ADDRESS",
                    displayName: "Comprovante de Endereço",
                    isLoaded: false,
                    file: null
                },
                {
                    type: "CITIZEN CARD",
                    displayName: "Cartão Cidadão",
                    isLoaded: false,
                    file: null
                },
                {
                    type: "HIGHSCHOOL",
                    displayName: "Comprovante de Matrícula ou Conclusão do ensino médio",
                    isLoaded: false,
                    file: null
                }
            ],
        }
    },
    computed: {
        ...mapGetters(['subscriber']),
    },
    methods: {
        ...mapActions(['getSubscriber', 'getFile']),
        getPhoto(type) {
            var params = {
                type: type,
                subscriberId: this.subscriberId,
                callback: this.setPhoto
            }
            this.getFile(params)
        },
        setPhoto(result){            
            var file = result.data.getFiles[0]
            if(!file) return

            if(file.type === "PHOTO") {
                this.img = file.file
            } else {
                var index = this.items.findIndex((element) => element.type === file.type)
                if(file.file) {
                    this.items[index].file = file.file
                } else {
                     this.items[index].notFound = true
                }

                this.items[index].isLoaded = true
               
            }
            
        },
        loadPhotos(){
            for(var img = 0; img < this.items.length; img++){
                this.getPhoto(this.items[img].type)
            }
        }
    },
    mounted() {
        debugger
        this.getSubscriber(this.subscriberId)
        this.getPhoto("PHOTO")
        this.loadPhotos()
    },
}
</script>

<style lang='scss'>
@import '../custom-bootstrap.scss';
.title{
    margin: 10px 0 20px 0;
    color: $paideia-purple;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    font-size: 2.3em;
}
.subs-title{
    font-size: 1.3em;
}
.subs-info{
    margin-left: 25px;
}
.desktop-img-col{
    margin: 0 10px 15px 0;
}
.desktop-img{
    height: 230px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.mobile-img{
    display: none;
    margin: 10px 0 15px 0;
}
@media (max-width: 770px) {
    .desktop-img-col{
        display: none;
    }
    .mobile-img{
        display: block;
    }
}
</style>

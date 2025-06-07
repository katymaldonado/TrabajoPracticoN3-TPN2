<template>
    <div>
        <table class="table table-success table-striped">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Avatar</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(usuario,index) in usuarios" scope="row" :key="index">
                    <td>{{ usuario.id }}</td>
                    <td>{{ usuario.nombre }}</td>
                    <td>{{ usuario.email }}</td>
                    <td>{{ usuario.celular }}</td>
                    <td><img :src= usuario.avatar  alt=""></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { obtenerUsuarios } from '../servicios/usuarios';

export default {
    name: 'ListaUsuarios',
    props: [],
    mounted() {
        this.obtenerUsers()
    },
    data() {
        return {
            usuarios: [],
            timer: 0,

        }
    },
    methods: {
        async obtenerUsers() {
            const usuarios = await obtenerUsuarios()
            console.log(usuarios);

            this.usuarios = usuarios
        }
    },
    computed: {

    }
}
</script>

<style scoped>
tbody img{
    height: 100px;
    border-radius: 50%;
}
table{
    border-radius: 20px;
}
</style>
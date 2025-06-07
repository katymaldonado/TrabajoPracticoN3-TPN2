export default {
    name: 'Formulario',
    props: [],
    data() {
        return {
            formData: this.getInicialData(),
            formDirty: this.getInicialData(),
        }
    },
    methods: {
        getInicialData() {
            return {
                nombre: null,
                edad: null,
                email: null
            }
        },

        validarBotonEnvio() {
            return !this.errorNombre.ok || !this.errorEdad.ok || !this.errorEmail.ok
        },

        enviar() {
            //console.log('enviar form')

            const datos = { ...this.formData }
            console.log(datos)

            this.formData = this.getInicialData()
            this.formDirty = this.getInicialData()
        }
    },
    computed: {
        errorNombre() {
            let mensaje = ''
            if (!this.formData.nombre) mensaje = 'Campo requerido'
            else if (this.formData.nombre?.length < 5) mensaje = 'Este campo debe poseer al menos 5 caracteres'
            else if (this.formData.nombre?.length > 15) mensaje = 'Este campo debe poseer como máximo 15 caracteres'
            else if (this.formData.nombre.includes(' ')) mensaje = 'Este campo no permite espacios intermedios'

            return {
                mostrar: mensaje != '' && this.formDirty.nombre,
                mensaje,   // es igual a -> mensaje: mensaje
                ok: mensaje == ''
            }
        },
        errorEdad() {
            let mensaje = ''
            if (!this.formData.edad) mensaje = 'Campo requerido'
            else if (this.formData.edad < 18) mensaje = 'Debe ingresar un edad mayor a 18 años.'
            else if (this.formData.edad > 120) mensaje = 'La edad máxima permitida es 120 años.'

            return {
                mostrar: mensaje != '' && this.formDirty.edad,
                mensaje,   // es igual a -> mensaje: mensaje
                ok: mensaje == ''
            }
        },
        errorEmail() {
            let mensaje = ''
            const validoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

            if (!this.formData.email) mensaje = 'Campo requerido'
            else if (!validoEmail.test(this.formData.email)) mensaje = "Debe ingresar un mail valido"

            return {
                mostrar: mensaje != '' && this.formDirty.email,
                mensaje,   // es igual a -> mensaje: mensaje
                ok: mensaje == ''
            }
        }
    }
}
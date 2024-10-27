new Vue({
    el: '#app',
    data: {
        form: {
            name: '',
            email: '',
            message: ''
        },
        successMessage: ''
    },
    methods: {
        submitForm() {
            this.successMessage = 'Thank you for your message, ' + this.form.name + '!';
            
            this.form.name = '';
            this.form.email = '';
            this.form.message = '';
        }
    }
});

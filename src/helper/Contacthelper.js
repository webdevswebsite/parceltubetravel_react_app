import React, { Component, Fragment } from 'react';

class Contacthelper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            subject: '',
            message: '',
            isVerified: false
        }
    }
    onNameChange(event) {
        this.setState({ name: event.target.value })
    }
    onPhoneChange(event) {
        this.setState({ phone: event.target.value })
    }
    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }
    onSubjectChange(event) {
        this.setState({ subject: event.target.value })
    }
    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }
    // REcaptcha
    reCaptchaLoaded(value) {
        console.log("Captcha Successfully Loaded", value);
    }
    handleSubmit(e) {
        e.preventDefault();
        // eslint-disable-next-line no-restricted-globals
        fetch(location.origin + '/tm/react/toor/sendmail.php', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {
            if (response.id !== '') {
                document.getElementById("server_response_success").classList.add("d-block");
                this.resetForm();
                this.setState({
                    isVerified: true
                })
            } else {
                document.getElementById("server_response_danger").classList.add("d-block");
            }
        })
    }
    resetForm() {
        this.setState({ name: "", phone: "", email: "", subject: "", message: "", })
    }
    render() {
        return (
            <Fragment />
        );
    }
}

export default Contacthelper;
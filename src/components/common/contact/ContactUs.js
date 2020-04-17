import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getContact, contactUs } from './ContactAction'
import { Form, Input, Button, Container, } from 'reactstrap';
import style from './ContactUs.css';
// import font from "../../../assets/css/font-awesome.min.css";
// import { toast } from 'react-toastify';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactInfo: [],
            name: '',
            email: '',
            reason: 'Select Reason',
            query: '',
            isNameValid: true,
            isEmailValid: true,
            isQueryValid: true,
            isReasonValid: true,
            emailValidationMessage: '',
            errors: []
        }
    }
    componentDidMount() {
        // this.props.getContact()
        //     .then(data => {
        //         if (data.status) {
        //             this.setState({
        //                 contactInfo: data.data
        //             })
        //         }
        //     })
    }

    changeName(e) {
        this.setState({
            [e.target.name]: e.target.value,
            isNameValid: true
        });
    }

    changeEmail(e) {
        this.setState({
            [e.target.name]: e.target.value,
            isEmailValid: true
        });
    }

    changeRadio(e) {
        console.log("in change", e.target.name, e.target.value)
        this.setState({
            reason: e.target.value,
            isReasonValid: true
        });
    }

    changeQuery(e) {
        this.setState({
            [e.target.name]: e.target.value,
            isQueryValid: true
        });
    }

    contactUs(e) {
        e.preventDefault();

        const errors = this.validate(this.state.name, this.state.email, this.state.reason, this.state.query);
        if (errors.length <= 0) {
            var contactUsValue = {
                name: this.state.username,
                email: this.state.email,
                reason: this.state.reason,
                query: this.state.query,
                to: this.state.contactInfo[0].email
            }
            this.props.contactUs(contactUsValue)
                .then(data => {
                    if (data.status) {
                        console.log(data);
                        // toast.success(data.message);
                        this.setState({
                            name: '',
                            email: '',
                            reason: '',
                            query: ''
                        })
                        this.props.history.push('/');
                    }
                    else{ }
                        // toast.error(data.message);
                })
        }
    }

    validate(name, email, reason, query) {
        const errors = [];
        console.log(reason)
        if (name.trim()
            .replace(/ +(?= )/g, "") == "") {
            errors.push("invalid");
            this.setState({
                isNameValid: false
            })
        }

        if (email.length <= 0) {
            errors.push("invalid");
            this.setState({
                isEmailValid: false,
                emailValidationMessage: 'Email is required'
            })
        }

        if (email.length > 0 && !(email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))) {
            errors.push("invalid");
            this.setState({
                isEmailValid: false,
                emailValidationMessage: 'Please enter a valid email'
            })
        }


        if (query.trim()
            .replace(/ +(?= )/g, "") == "") {
            errors.push("invalid");
            this.setState({
                isQueryValid: false
            })
        }

        if (reason == "Select Reason") {
            errors.push("invalid");
            this.setState({
                isReasonValid: false
            })
        }

        return errors;
    }

    render() {
        const { contactInfo } = this.state
        return (
            <div>}
            <Container fluid className={style['background-main']}>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-5">
                        <div className={style['contact-box']}>
                            <div className={style['new-row']}>
                                {contactInfo && contactInfo.length > 0 || true ? (
                                    <div className={[['col-lg-4 col-md-6 col-sm-12 col-xs-12 pt-2 pb-5 pl-3 pr-3'], style['contact-info-background']].join(' ')}>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0">
                                            <h5 className={[['mb-3 mt-5'], style['contact-info-heading']].join(' ')}>
                                                Contact Information
            </h5>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0">
                                            {}
                                            <p className={[[''], style['address']].join(' ')}>
                                                <i ></i><span >{"email"}
                                                </span></p>
                                        </div>
                                    </div>) : ''}
                                <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 pt-5 pb-5">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <h5 className={[['mb-3'], style['contact-sub-heading']].join(' ')}>
                                            {/* <i className={[font['fa'], font['fa-paper-plane'], style['plane-icon']].join(' ')}></i> Send us a Message */}
            </h5>
                                    </div>
                                    <Form onSubmit={(e) => this.contactUs(e)} noValidate>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group mt-2">
                                            <Input className={[['form-control'], style['form-fld']].join(' ')} type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => this.changeName(e)} validations={[this.required]} />
                                            {this.state.isNameValid ? '' : <span className={style['error-text']}>Name is required</span>}
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                            <Input className={[['form-control'], style['form-fld']].join(' ')} type="email" name="email" placeholder="Email" value={this.state.email} onChange={(e) => this.changeEmail(e)} validations={[this.required]} />
                                            {this.state.isEmailValid ? '' : <span className={style['error-text']}>{this.state.emailValidationMessage}</span>}
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                            <Input className={[['form-control'], style['form-fld']].join(' ')} placeholder="Reason" type="select" name="reason" id="exampleSelect" onChange={e => this.changeRadio(e)}>
                                                <option defaultValue>Select Reason</option>
                                                <option value="Question or comment about a feature">Question or comment about a feature</option>
                                                <option value="Article comment" >Article comment</option>
                                                <option value="Website design">Website design</option>
                                                <option value="Advertising on the website">Advertising on the website</option>
                                            </Input>
                                            {this.state.isReasonValid ? '' : <span className={style['error-text']}>Please select a valid reason</span>}
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <Input className={[['form-control'], style['form-fld']].join(' ')} type="textarea" name="query" placeholder="Description" value={this.state.query} onChange={(e) => this.changeQuery(e)} />
                                            {this.state.isQueryValid ? '' : <span className={style['error-text']}>Please enter description</span>}
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-right ">
                                            <Button className={[['mt-3'], style['btn-submit']].join(' ')} title="Send" type="submit">Send</Button>
                                        </div>
                                    </Form>
                                </div>

                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    // info: state.contact.result
})


const mapDispatchToProps = state => ({
    // info: state.contact.result
})

    ;
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
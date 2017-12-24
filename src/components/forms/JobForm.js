import React from "react";
import PropTypes from "prop-types";
import {Form, Button, Grid, Segment} from "semantic-ui-react";
import InlineError from "../messages/InlineError";

class JobForm extends React.Component {
    state = {
        data: {
            name: '',
        },
        index: 0,
        loading: false,
        errors: {}
    };

    onChange = e =>
        this.setState({
            ...this.state,
            data: {...this.state.data, [e.target.name]: e.target.value}
        });

    onSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if (Object.keys(errors).length === 0) {
            this.setState({loading: true});
            this.props
                .submit(this.state.data)
                .catch(err =>
                    this.setState({errors: err.response.data.errors, loading: false})
                );
        }
    };

    validate = data => {
        const errors = {};
        if (!data.name) errors.title = "Can't be blank";
        return errors;
    };

    render() {
        const {errors, data, loading} = this.state;

        return (
            <Segment>
                <Form onSubmit={this.onSubmit} loading={loading}>
                    <Grid columns={2} stackable>
                        <Grid.Row>
                            <Grid.Column>
                                <Form.Field error={!!errors.title}>
                                    <label htmlFor="title">Job Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        value={data.name}
                                        onChange={this.onChange}
                                    />
                                    {errors.title && <InlineError text={errors.title}/>}
                                </Form.Field>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Button primary>Save</Button>
                        </Grid.Row>
                    </Grid>
                </Form>
            </Segment>
        );
    }
}

JobForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default JobForm;
import React from 'react';
// Materialize
import { Row, Input, Icon, Button, CardPanel, Collection, CollectionItem } from 'react-materialize';

class Bmr extends React.Component {
    // constructor
    constructor(props) {
        super(props);
        this.state = {
            bmrCalculation: '',
            heightFt: '',
            heightIn: '',
            age: '',
            weight: '',
            gender: '',
            activity: '',
            showBmr: false,
            brm: '',
            maintenanceCalories: '',
            errorMessage: false,

        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleActivityChange = this.handleActivityChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleHeightFtChange = this.handleHeightFtChange.bind(this);
        this.handleHeightInChange = this.handleHeightInChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
    }
    // handle all changes
    handleHeightFtChange(e) {
        this.setState({ heightFt: e.target.value });
    }
        handleHeightInChange(e) {
        this.setState({ heightIn: e.target.value });
    }
        handleAgeChange(e) {
        this.setState({ age: e.target.value });
    }
        handleWeightChange(e) {
        this.setState({ weight: e.target.value });
    }
        handleGenderChange(e) {
        this.setState({ gender: e.target.value });
    }
    handleActivityChange(e) {
        this.setState({ activity: e.target.value });
    }
    // handle submit of the form
    onSubmit(e) {
        // use Math.abs() otherwise it will concat as string and not numbers
        e.preventDefault();
        let userHeight = (Math.abs(this.state.heightFt) * 12) + Math.abs(this.state.heightIn);
        let bmr;
        let maintenanceCalories;

        if(
            this.state.activity &&
            this.state.age &&
            this.state.gender &&
            this.state.heightFt &&
            this.state.heightIn &&
            this.state.weight
        ) {
            if (this.state.gender === 'male') {
                bmr = Math.round(66 + (6.23 * Math.abs(this.state.weight)) + (12.7 * Math.abs(userHeight)) - (6.8 * Math.abs(this.state.age)));
                maintenanceCalories = Math.round(Math.abs(bmr * this.state.activity));
            } else if (this.state.gender === 'female') {
                bmr = Math.round(655 + (4.35 * Math.abs(this.state.weight)) + (4.7 * Math.abs(userHeight)) - (4.7 * Math.abs(this.state.age)));
                maintenanceCalories = Math.round(Math.abs(bmr * this.state.activity));
            }

            this.setState({
                showBmr: true,
                bmr,
                maintenanceCalories,
                errorMessage: false,
            });
            // scroll to bottom of page (better experience for mobile)
            window.scrollTo(0, document.body.scrollHeight);
        } else {
            this.setState({
                errorMessage: true,
            });
            window.scrollTo(0, document.body.scrollHeight);
        }

    }
    // render the form
    render() {
        return (
            <div>
                <h4>BMR and Caloric Needs</h4>
                <code><Icon tiny>ic_warning</Icon> All fields are required!</code>
                <Row>
                    <Input onChange={ this.handleHeightFtChange } value={ this.state.heightFt } label="Height Feet" type="number" s={4} />
                    <Input onChange={ this.handleHeightInChange } value={ this.state.heightIn } label="Height Inches" type="number" s={4} />
                    <Input onChange={ this.handleWeightChange } value={ this.state.weight } label="Weight (lbs)" type="number" s={4} />
                    <Input onChange={ this.handleAgeChange } value={ this.state.age } label="Age" type="number" s={4} />
                    <Input onChange={ this.handleGenderChange } value={ this.state.gender } s={4} type='select' label="Gender">
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                    </Input>
                    <Input onChange={ this.handleActivityChange } value={ this.state.activity } s={4} type='select' label="Activity Level">
                            <option value='1.2'>Sedetary</option>
                            <option value='1.375'>Lightly Active</option>
                            <option value='1.55'>Active</option>
                            <option value='1.725'>Very Active</option>
                            <option value='1.9'>Extra Active</option>
                    </Input>
                    <Button onClick={ this.onSubmit } waves="light">Find Out!<Icon left>insert_emoticon</Icon></Button>
                </Row>
                <Row>
                    <Collection header="Activity Legend">
                        <CollectionItem>Sedetary: Little to no exercise.</CollectionItem>
                        <CollectionItem>Lightly Active: light exercise/sports 1-3 days/week</CollectionItem>
                        <CollectionItem>Active: moderate exercise/sports 3-5 days/week</CollectionItem>
                        <CollectionItem>Very Active: hard exercise/sports 6-7 days a week</CollectionItem>
                        <CollectionItem>Extra Active: very hard exercise/sports & physical job or 2x training</CollectionItem>
                    </Collection>
                </Row>
                {/* display data after button is pressed */}
                { this.state.showBmr 
                ? 
                    <Row>
                    <CardPanel className="teal center-align">
                        <span className="white-text">Your BMR is {this.state.bmr}!</span>
                    </CardPanel>
                    <CardPanel className="teal center-align">
                        <span className="white-text">Based on your activity level you need to eat {this.state.maintenanceCalories} calories in order to maintain your current weight. (assuming you did not lie to me.)</span>
                    </CardPanel>
                    </Row>
                : 
                    null
                }
                {/*show errors*/}
                {
                    this.state.errorMessage
                    ?
                        <Row>
                            <CardPanel className="red center-align">
                                <span className="white-text">Please make sure all of the fields are filled out. (reselect the gender and activity level)</span>
                            </CardPanel>
                        </Row>
                    :
                        null
                }
            </div>
        );
    }
}

export default Bmr;
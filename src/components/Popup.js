import { Form } from 'react-bootstrap';
import {Component, createRef} from 'react';
import {ReactComponent as CloseIcon} from "../icons/close.svg";
import { updateConfig } from "../helpers/Config";


export class Popup extends Component {

    

    constructor(props) {
        super(props);
        this.checkboxRef = createRef();
        this.state = {
            displayPopup: 'block'
        }
    }

    handleClick = () => {
        let checked = this.checkboxRef.current.checked;
        updateConfig("showtip-addTask", !checked);
        this.setState({
            displayPopup: 'none'
        })
    }

    render() {

        return (
                <div className="popup-container" style={{display: this.state.displayPopup}}>
                    <div id="close-icon-wrapper" onClick={() => this.handleClick()}>
                        <CloseIcon />
                    </div>
                    <h4 style={{margin: "4%", color: "yellow"}}>Pro tips:</h4>
                    <div className="tip-container" id="tip1">
                        <span className="tip-start">Tip 1:</span>&nbsp;&nbsp;&nbsp; You are welcome style your text with markdown in the body of a task.
                    </div>
                    <div className="tip-container" id="tip2">
                        <span className="tip-start">Tip 2:</span>&nbsp;&nbsp;&nbsp; Short and simple titles are brilliant.
                    </div>
                    <div id="popup-dontshow">
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Don't show again" ref={this.checkboxRef}/>
                    </Form.Group>
                    </div>
                </div>
            )
    }
}
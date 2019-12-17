import React, { Component } from 'react';
import Navbar from './Navbar';
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container';
import { TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Dropdown from './Dropdown';
function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if (d > 0) {//Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
class App extends Component {
    constructor() {
        super();
        this.state = {
            questions: [],
        };
        this.CreateQuestion = this.CreateQuestion.bind(this);
        this.OnChecked = this.OnChecked.bind(this);
        this.HandleChangeValue = this.HandleChangeValue(this);
        this.AddQuestion = this.AddQuestion.bind(this);
    }
    OnPasteHandler(e) {

    }
    onPaste(e, type) {
        var data = e.clipboardData.getData('Text');
        var arr = data.split('\n');

        arr.forEach(element => {
            let question = {

                key: null,
                text: 'null',
                typeOfResponse: 'text',
                ChildQuestion: [],
                IsScored: false,
                MaxScore: 0,
                Scored: 0,
                IsMandatory: false,
                IsMultiSelection: false,
                IsNotified: false
            };
            question.text = element;
            question.type = 'text';
            question.key = generateUUID();

            this.setState((prevState) => {
                return {
                    questions: prevState.questions.concat(question)
                }

            });
        });

        console.log(this.state.questions);
    }
    OnTextChangeHandler(e) {

    }
    OnChecked(key, e, type) {

        console.log(this.state.questions);
        var item = this.state.questions.filter(item => item.key === key)[0];
        let index = this.state.questions.indexOf(item);
        console.log(index);
        if (type === "Mandatory") {

            item.IsMandatory = e.target.checked;

        }
        else if (type === "MultipleSelection") {
            item.IsMultiSelection = e.target.checked;
        }
        else if (type === "Notify") {
            item.IsNotified = e.target.checked;
        }
        this.state.questions[index] = item;
        this.forceUpdate();
        console.log(this.state.questions);
    }
    HandleChangeValue(e, key) {


    }
    handleLanguage = (langValue, key) => {

        console.log('type', langValue, 'key', key);
        var item = this.state.questions.filter(item => item.key === key)[0];
        item.typeOfResponse = langValue;
        let index = this.state.questions.indexOf(item);
        this.state.questions[index] = item;
        this.forceUpdate();
        console.log(this.state.questions);

    }
     AddQuestion()
    {
        let question = {

            key: null,
            text: '',
            typeOfResponse: 'text',
            ChildQuestion: [],
            IsScored: false,
            MaxScore: 0,
            Scored: 0,
            IsMandatory: false,
            IsMultiSelection: false,
            IsNotified: false
        };
       
        question.type = 'text';
        question.key = generateUUID();
    
        this.setState((prevState) => {
             return{
                questions: prevState.questions.concat(question)
            }
        });
    }
        
    

    CreateQuestion(item) {
        return <TableRow key={item.key}>
            <TableCell>


                <TextField placeholder="Enter some text" fullWidth onPaste={this.onPaste.bind(this, "main")} defaultValue={item.text} key={item.key} onChange={this.OnTextChangeHandler.bind(this)} ></TextField>
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox value="Mandatory" color="primary" onClick={(e) => this.OnChecked(item.key, e, "Mandatory")} />
                        }
                        label="Mandatory"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox value="MultiSelection" color="primary" onClick={(e) => this.OnChecked(item.key, e, "MultipleSelection")} />
                        }
                        label="Multiple Selections"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox value="Notify" color="primary" onClick={(e) => this.OnChecked(item.key, e, "Notify")} />
                        }
                        label="Notify"
                    />
                </FormGroup>
            </TableCell>
            <TableCell>

                {/* <SimpleListMenu  onClick={this.HandleChangeValue} name={"asad"}></SimpleListMenu> */}
                <Dropdown keyval={item.key} triggerChange={this.handleLanguage}></Dropdown>


            </TableCell>
        </TableRow>
    }
    render() {

        var list = this.state.questions.map(this.CreateQuestion);
        const style = {
            'justified-contet':'center',
            'position': 'fixed',
            'bottom': '350px',
            'left': '0%',
        };
        return (
            <div>
                <Navbar></Navbar>
              
                <Container fixed style={{ margin: 50 }}>
                    <h3> Title here</h3>
                    <Fab color="primary" aria-label="add" style={style} onClick={this.AddQuestion} >
                    <AddIcon />
                </Fab>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell title> Questions </TableCell>
                                <TableCell title> Responses </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {list}

                        </TableBody>

                    </Table>
                </Container>

            </div>
        );
    }
}

export default App; 
import React from "react";


class InputField extends React.Component{
    state ={
        input: ""
    }
    render(){
        const onInput = event =>{
            this.setState({
                input: event.target.value
            })
        }

        const onSubmit = event => {
            event.preventDefault()
            this.props/onSubmit(this.state.input)
            this.setState({
                input: ""
            })
        }
        return(
            <div>
                <form>
                    <input
                    placeholder="voeg je boodschappen toe"
                    type="search"
                    onChange={onInput} 
                    value={this.state.input}
                    > </input>
                    <button type="submit"></button>
                </form>
            </div>
        )
    }
}

export default InputField
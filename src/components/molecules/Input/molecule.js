import React, { Component } from 'react';

class molecule extends Component {  
    
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        const { name, ...rest } = this.props;
        console.log('rest: ', {...rest});
        const classStr = "input-field col s12 "  + name ;
        return (
            <div className={classStr}>
                <input
                    placeholder={this.capitalizeFirstLetter(name)}
                    name={name}
                    {...rest}/>
            </div>
        );
    }
}

export default molecule;
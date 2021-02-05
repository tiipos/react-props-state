import React, {Component} from 'react';

export default class Welcome extends Component {
    render() {
        let personName = this.props.name ? this.props.name : 'Anônimo';
        // this.props.className = 'App';
        // não é possível modificar valores de props
        return (
            <h1 className={this.props.className}>
                Bem vindo, {personName}
            </h1>
        );
    }
}

// export default (props) => (
//     <h1>Alo mundo</h1>
// );

// export default (props) => {
//     let personName = props.name ? props.name : 'anônimo';
//     return (
//         <h1 className={props.className}>
//             Bem vindo, {personName}
//         </h1>
//     );
// }

// export default function welcome (props) {
//   return (
//         <h1 className={props.className}>
//             Bem vindo, {props.name}
//         </h1>
//     );
// }

import Car from "./Car";

class CarWithProps extends React.Component {
    render() {
      return <h2>I am a {this.props.color} Car!</h2>;
    }
  }
  export default CarWithProps;
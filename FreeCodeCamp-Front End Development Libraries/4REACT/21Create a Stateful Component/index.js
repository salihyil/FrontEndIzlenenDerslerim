/* HAtirlatma: 
that you must create a class component by extending React.Component in order to create state like this. 
Bunun gibi bir state oluşturmak için React.Component'i genişleterek bir sınıf component oluşturmanız gerektiğini unutmayın.
*/

class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);
      // Only change code below this line
    this.state = {
      name: "salih"
    }
      // Only change code above this line
    }
    render() {
      return (
        <div>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };
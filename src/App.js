import React, { useState } from "react";
import './App.css';
import Person from './Person/Person';
import Student from './Person/Student';

const app = props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [personsState , setPersonsState] = useState({
        persons : [
          { id: '1' , name : 'Ali' , age : '21'},
          { id: '2' , name : 'Mohammad' , age : '23'},
          { id: '3' , name : 'Mehdi' , age : '24'}
        ],
        otherState : 'The other state',
        showPersons : false
    })

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [studentsState , setStudentsState] = useState({
        students : [
            {name : 'Max' , age : '15' , grade : '18'},
            {name : 'Mani' , age : '14' , grade : '19'}
        ]
    })

    // const switchNameHandler = (newName) => {
    //     console.log(personsState, studentsState)
    //     setPersonsState({
    //         persons : [
    //           {name : newName , age : '21'},
    //           {name : 'Mohammad' , age : '23'},
    //           {name : 'Mehdi' , age : '25'}
    //         ],
    //         otherState : 'hello state',
    //         showPersons : true
    //     })
    //
    //     setStudentsState({
    //         students : [
    //           {name : 'Terry' , age : '15' , grade : '18'},
    //           {name : 'Bob' , age : '14' , grade : '19'}
    //         ]
    //     })
    //     console.log(personsState, studentsState);
    //     const doesShow = personsState.showPersons;
    //     setPersonsState({
    //         persons : [
    //             { name : 'Ali' , age : '21'},
    //             { name : 'Mohammad' , age : '23'},
    //             { name : 'Mehdi' , age : '24'}
    //         ],
    //         otherState : 'The other state',
    //         showPersons : !doesShow
    //     })
    // }

    const deletePersonHandler = (personIndex) => {
        const persons = [...personsState.persons];
        persons.splice(personIndex, 1);
        setPersonsState({
            persons: persons,
            otherState : 'The other state',
            showPersons : true
        })
    }

    const togglePersonsHandler = () => {
        const doesShow = personsState.showPersons;
        setPersonsState({
            persons : [
                { id: '1' , name : 'Ali' , age : '21'},
                { id: '2' , name : 'Mohammad' , age : '23'},
                { id: '3' , name : 'Mehdi' , age : '24'}
            ],
            otherState : 'The other state',
            showPersons : !doesShow
        })
    }

    const nameChangeListener = (event, id) => {
        const personIndex = personsState.persons.findIndex(person => {
            return person.id === id;
        });

        console.log(personIndex)

        const person = {
            ...personsState.persons[personIndex]
        }

        person.name = event.target.value;

        const persons = [...personsState.persons]
        persons[personIndex] = person;
        setPersonsState({
            persons : persons,
            otherState : 'The other state',
            showPersons : true
        })
    }

    const style = {
        backgroundColor: 'green',
        color: 'white',
        width: '200px',
        height: '70px',
        boxShadow: '0 2px 3px black',
        borderStyle: 'solid',
        borderRadius: '15px',
        margin: '20px auto',
        cursor: 'pointer',
    }

    let persons = null;

    if (personsState.showPersons) {
        persons = (
            <div>
                {personsState.persons.map((person , index) => {
                    return <Person
                        click={() => deletePersonHandler(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        change={(event) => nameChangeListener(event, person.id)} />
                })}
            </div>
        );
        style.backgroundColor = 'green';
    }

    let classes = [];

    if (personsState.persons.length <= 2) {
        classes.push('red');
    }
    if (personsState.persons.length <= 1) {
        classes.push('font');
    }

    return (
        <div className="App">
            <h1 className={classes.join(' ')}>Hi, I'm a React App</h1>
            <button
                style={style}
                onClick={togglePersonsHandler}>Switch name</button>
            <h1>Persons</h1>
            {persons}
            <h1>Students</h1>
            <Student
                name={studentsState.students[0].name}
                age={studentsState.students[0].age}
                grade={studentsState.students[0].grade} />
            <Student
                name={studentsState.students[1].name}
                age={studentsState.students[1].age}
                grade={studentsState.students[1].grade} />
        </div>
    )
}
export default app;

// class App extends Component{
//   state = {
//       persons : [
//           { name : 'Ali' , age : '21'},
//           { name : 'Mohammad' , age : '23'},
//           { name : 'Mehdi' , age : '24'}
//       ]
//   }
//
//   switchNameHandler = () => {
//       this.setState({
//           persons : [
//               { name : 'Ali Asgari' , age : '21'},
//               { name : 'Mohammad' , age : '23'},
//               { name : 'Mehdi' , age : '25'}
//           ]
//       })
//   }
//
//   render() {
//       return (
//           <div className="App">
//               <h1>Hi, I'm a React App</h1>
//               <button onClick={this.switchNameHandler}>Switch name</button>
//               <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
//               <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
//               <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
//           </div>
//       );
//   }
//   //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it works?'))
// }
//
// export default App;

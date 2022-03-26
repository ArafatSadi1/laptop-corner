import React from "react";
import './Question.css'
const Question = () => {
  return (
    <div className="question-container">
      <div>
        <h2>1/ Diffrence Between props and state?</h2>
        <article>
          Props: Props are used to send data and event handlers to a component's
          children. State: The data of the components that must be presented to
          it store the view in the state. Props: Props are immutable — they
          can't be modified after they've been set. State: The data is stored in
          the state, which might change over time. Props: Both functional and
          class components can benefit from the use of props. State: Only class
          components can use the state. Props: The parent component sets props
          for the children components. State: Event handlers are typically
          responsible for updating the state.
        </article>
      </div>
      <div>
        <h2>2/ How useState Works?</h2>
        <article>
          useState is a Hook that allow you to have state variable in functional
          component. You pass the initial state to this function and it returns
          a variable with the value of the current state (not necessarily the
          initial state) and another function to update that value. Each call to
          the useState hook returns an array containing two values: The first
          value is the current (up-to-date) value of the declared state item.
          React keeps track of this value as it changes and ensures that it
          stays up to date on subsequent renders of the component. When the
          component is first rendered (mounted), this value will be the same as
          the initial state value that was passed to the useState hook. The
          second value is the state update function for the declared state item.
          . This function, when invoked, updates the value of the corresponding
          state item. If the updated value is not the same as the current value
          based on the Object.is comparison, then React schedules a re-render of
          the component.
        </article>
      </div>
    </div>
  );
};

export default Question;

import React, { useState } from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal  from './components/NewGoal/NewGoal';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Finish the Course'},
    {id: 'cg2', text: 'Learn all about the Course Main Topic'},
    {id: 'cg3', text: 'Help other students in the Course Q&amp;A'}
  ]);


  const addNewGoalHandler = newGoal => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);
    });
  };

  // Here i am writing HTml but its converted to Jsx  
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals } />    
    </div>
  );
};

export default App;

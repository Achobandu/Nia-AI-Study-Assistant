'use client';

import React, { useState } from 'react';
import styles from '../../styles/assignments.module.css';

const AssignmentsPage = () => {
  // State to manage assignments
  const [assignments, setAssignments] = useState([
    { id: 1, name: 'Math Assignment 1', dueDate: '2024-12-13', course: 'MTH 130' },
    { id: 2, name: 'Programming Project', dueDate: '2024-12-20', course: 'CIT 340' },
    { id: 3, name: 'Research Paper', dueDate: '2024-12-25', course: 'MIS 699' }
  ]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newAssignment, setNewAssignment] = useState({ name: '', dueDate: '', course: '' });
  const [editMode, setEditMode] = useState(false); // Track if editing an assignment
  const [currentAssignmentId, setCurrentAssignmentId] = useState(null);

  // Handle adding or updating assignments
  const handleAddOrUpdateAssignment = (e) => {
    e.preventDefault();
    if (editMode) {
      // Update the existing assignment
      setAssignments(assignments.map(assignment => 
        assignment.id === currentAssignmentId ? { id: assignment.id, ...newAssignment } : assignment
      ));
    } else {
      // Add new assignment
      setAssignments([...assignments, { id: assignments.length + 1, ...newAssignment }]);
    }
    closePopup();
  };

  // Open the pop-up for editing an existing assignment
  const openEditPopup = (assignment) => {
    setNewAssignment({ name: assignment.name, dueDate: assignment.dueDate, course: assignment.course });
    setCurrentAssignmentId(assignment.id);
    setEditMode(true);
    setIsPopupOpen(true);
  };

  // Handle deleting an assignment
  const handleDeleteAssignment = (assignmentId) => {
    setAssignments(assignments.filter(assignment => assignment.id !== assignmentId));
  };

  // Reset form and close the pop-up
  const closePopup = () => {
    setNewAssignment({ name: '', dueDate: '', course: '' });
    setIsPopupOpen(false);
    setEditMode(false);
    setCurrentAssignmentId(null);
  };

  return (
    <div className={styles.assignmentsPage}>
      <h1>Assignments</h1>
      <div className={styles.assignmentList}>
        {assignments.map((assignment) => (
          <div key={assignment.id} className={styles.assignmentCard}>
            <h3>{assignment.name}</h3>
            <p><b>Course:</b> {assignment.course}</p>
            <p><b>Due Date:</b> {assignment.dueDate}</p>
            <div className={styles.cardActions}>
              <button onClick={() => openEditPopup(assignment)} className={styles.editBtn}>Edit</button>
              <button onClick={() => handleDeleteAssignment(assignment.id)} className={styles.deleteBtn}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => setIsPopupOpen(true)} className={styles.addAssignmentBtn}>
        + Add New Assignment
      </button>

      {/* Pop-up for adding/editing an assignment */}
      {isPopupOpen && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            <h2>{editMode ? 'Edit Assignment' : 'Add New Assignment'}</h2>
            <form onSubmit={handleAddOrUpdateAssignment} className={styles.addAssignmentForm}>
              <input
                type="text"
                value={newAssignment.name}
                onChange={(e) => setNewAssignment({ ...newAssignment, name: e.target.value })}
                placeholder="Assignment Name"
                required
              />
              <input
                type="date"
                value={newAssignment.dueDate}
                onChange={(e) => setNewAssignment({ ...newAssignment, dueDate: e.target.value })}
                required
              />
              <input
                type="text"
                value={newAssignment.course}
                onChange={(e) => setNewAssignment({ ...newAssignment, course: e.target.value })}
                placeholder="Course"
                required
              />
              <div className={styles.formActions}>
                <button type="submit">{editMode ? 'Update' : 'Add'}</button>
                <button type="button" onClick={closePopup}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentsPage;

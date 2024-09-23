'use client';

import React, { useState, useEffect } from 'react';
import styles from '../../styles/courses.module.css';

// Sample assignment data, assuming it comes from the Assignments page
const sampleAssignments = [
  { id: 1, title: 'Assignment 1', dueDate: new Date(2024, 11, 13, 11, 59, 59).toLocaleString() },
  { id: 2, title: 'Assignment 2', dueDate: new Date('Dec 16, 2024 11:59:59').toLocaleString() },
  { id: 3, title: 'Assignment 3', dueDate: new Date('Dec 25, 2024 11:59:59').toLocaleString() },
];

const CoursesPage = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: 'MTH 130', instructor: 'Dr. Tester', assignment: '' },
    { id: 2, name: 'CIT 340', instructor: 'Dr. Constant', assignment: '' },
    { id: 3, name: 'MIS 699', instructor: 'Dr. Hulabaloo', assignment: '' },
  ]);

  const [assignments, setAssignments] = useState(sampleAssignments); // Placeholder for assignments
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({ name: '', instructor: '', assignmentId: '' });
  const [editMode, setEditMode] = useState(false); // Track if editing a course
  const [currentCourseId, setCurrentCourseId] = useState(null);

  // Handle adding or updating courses
  const handleAddOrUpdateCourse = (e) => {
    e.preventDefault();
    const selectedAssignment = assignments.find(a => a.id === parseInt(newCourse.assignmentId));
    if (editMode) {
      // Update the existing course
      setCourses(courses.map(course => 
        course.id === currentCourseId 
          ? { id: course.id, ...newCourse, assignment: selectedAssignment ? selectedAssignment.dueDate : '' } 
          : course
      ));
    } else {
      // Add new course
      setCourses([
        ...courses, 
        { 
          id: courses.length + 1, 
          ...newCourse, 
          assignment: selectedAssignment ? selectedAssignment.dueDate : '' 
        }
      ]);
    }
    closePopup();
  };

  // Open the pop-up for editing an existing course
  const openEditPopup = (course) => {
    const selectedAssignment = assignments.find(a => a.dueDate === course.assignment);
    setNewCourse({ name: course.name, instructor: course.instructor, assignmentId: selectedAssignment ? selectedAssignment.id : '' });
    setCurrentCourseId(course.id);
    setEditMode(true);
    setIsPopupOpen(true);
  };

  // Handle deleting a course
  const handleDeleteCourse = (courseId) => {
    setCourses(courses.filter(course => course.id !== courseId));
  };

  // Reset form and close the pop-up
  const closePopup = () => {
    setNewCourse({ name: '', instructor: '', assignmentId: '' });
    setIsPopupOpen(false);
    setEditMode(false);
    setCurrentCourseId(null);
  };

  return (
    <div className={styles.courseDash}>
      <div className={styles.courseHeader}>
        <div>
          <h1>My Courses</h1>
        </div>
        <div>
          <button onClick={() => setIsPopupOpen(true)} className={styles.addPlusSign}> + </button>
        </div>
      </div>
      <div className={styles.courseList}>
        {courses.map((course) => (
          <div key={course.id} className={styles.courseCard}>
            <h3>{course.name}</h3>
            <p><b>Instructor:</b> {course.instructor}</p>
            <p><b>Assignment Due: </b> {course.assignment || 'No assignment yet'}</p>
            <div className={styles.cardActions}>
              <button onClick={() => openEditPopup(course)} className={styles.editBtn}>Edit</button>
              <button onClick={() => handleDeleteCourse(course.id)} className={styles.deleteBtn}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => setIsPopupOpen(true)} className={styles.addCourseBtn}>Add New Course</button>

      {/* Pop-up for adding/editing a course */}
      {isPopupOpen && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            <h2>{editMode ? 'Edit Course' : 'Add New Course'}</h2>
            <form onSubmit={handleAddOrUpdateCourse} className={styles.addCourseForm}>
              <input
                type="text"
                value={newCourse.name}
                onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
                placeholder="Course Name"
                required
              />
              <input
                type="text"
                value={newCourse.instructor}
                onChange={(e) => setNewCourse({ ...newCourse, instructor: e.target.value })}
                placeholder="Instructor"
                required
              />
              <select
                value={newCourse.assignmentId}
                onChange={(e) => setNewCourse({ ...newCourse, assignmentId: e.target.value })}
                required
              >
                <option value="">Select Assignment</option>
                {assignments.map((assignment) => (
                  <option key={assignment.id} value={assignment.id}>
                    {assignment.title} - Due: {assignment.dueDate}
                  </option>
                ))}
              </select>
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

export default CoursesPage;

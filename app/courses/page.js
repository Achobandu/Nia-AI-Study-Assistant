// app/courses/page.js
import styles from '../../styles/courses.module.css';

export const courses = [
  { id: 1, name: 'MTH 130', instructor: 'Dr. Tester', assignment: Date(2024, 12, 13, 11, 59, 59) },
  { id: 2, name: 'CIT 340', instructor: 'Dr. Constant', assignment: Date('Dec 16, 2024 11:59:59') },
  { id: 3, name: 'MIS 699', instructor: 'Dr. Hulabaloo', assignment: Date('Dec 25, 2024 11:59:59') },
];

const Courses = () => {
  return (
    <div className={styles.courseDash}>
      <div className={styles.courseHeader}>
        <div>
          <h1>My Courses</h1>
        </div>
        <div>
          <button className={styles.addPlusSign}> + </button>
        </div>
      </div>
      <div className={styles.courseList}>
        {courses.map((course) => (
          <div key={courses.id} className={styles.courseCard}>
            <h3>{course.name}</h3>
            <p><b>Instructor:</b> {course.instructor}</p>
            <p><b>Assignment Due: </b> {course.assignment}</p>
          </div>)
        )}
      </div>
      <button className={styles.addCourseBtn}>Add New Course</button>
    </div>
  );
};

export default Courses;

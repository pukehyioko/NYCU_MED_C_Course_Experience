import React from 'react';

const Table = ({ feedbacks }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>課程</th>
          <th>學生</th>
          <th>心得</th>
          <th>評分</th>
        </tr>
      </thead>
      <tbody>
        {feedbacks.map((feedback, index) => (
          <tr key={index}>
            <td>{feedback.course}</td>
            <td>{feedback.student}</td>
            <td>{feedback.comment}</td>
            <td>{feedback.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
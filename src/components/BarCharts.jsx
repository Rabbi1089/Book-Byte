import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const BarCharts = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/Books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="">
      <BarChart
        width={1200}
        height={400}
        data={books}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalPages" fill="#8884d8" name="totalPages" />
        <Bar dataKey="rating" fill="#82ca9d" name="rating" />
      </BarChart>
    </div>
  );
};

export default BarCharts;

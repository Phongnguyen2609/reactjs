import React, {useEffect, useState} from 'react';
import axios from "axios";

function Home() {
    // b1: Khởi tạo education = useState[] 1 mảng trong
    const [education, setEducation] = useState([])

    //b3: dùng để thay đổi state
    useEffect(() => {
        loadEducation();
    }, []);

    //b2 : lấy data thông qua axios
    const loadEducation = async () => {
        const result = await axios.get("http://localhost:8686/education")
        // cập nhật từng phần tử và được gán vào mảng useState[];
        setEducation(result.data);
    }

    return (
        <div className="container">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">School</th>
                    <th scope="col">Level</th>
                    <th scope="col">Course</th>
                    <th scope="col">GPA</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {/*Lấy giá trị khởi tạo để duyệt mảng thông qua map() */}
                {
                    education.map((ed, index) => (
                        <tr>
                            <th scope="row" key={index}>{index + 1}</th>
                            <td>{ed.school}</td>
                            <td>{ed.level}</td>
                            <td>{ed.course}</td>
                            <td>{ed.gpa}</td>
                            <td>
                                <button>edit</button>
                                <button>delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default Home;
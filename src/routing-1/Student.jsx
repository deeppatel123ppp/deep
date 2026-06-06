import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Shome from "./Shome";
import Sproject from './Sproject';
import Snopage from "./snopage";
import img1 from '../assets/image1.avif'
import img2 from '../assets/image2.jpg'
import img3 from '../assets/image3.jpg'
import './style.css'

function Student() {

  const s = [
    {
      name: "project1",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod illo omnis voluptas consequatur reiciendis soluta, voluptates nesciunt iusto hic reprehenderit atque exercitationem nostrum facere cupiditate pariatur tempore veritatis. Exercitationem, quas?",
      image: img1,
    },
    {
      name: "project2",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod illo omnis voluptas consequatur reiciendis soluta, voluptates nesciunt iusto hic reprehenderit atque exercitationem nostrum facere cupiditate pariatur tempore veritatis. Exercitationem, quas?",
      image: img2,
    },
    {
      name: "project3",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod illo omnis voluptas consequatur reiciendis soluta, voluptates nesciunt iusto hic reprehenderit atque exercitationem nostrum facere cupiditate pariatur tempore veritatis. Exercitationem, quas?",
      image: img3,
    },
  ];

  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sproject">Project</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Shome />} />
          <Route path="/sproject" element={<Sproject data={s} />} />
          <Route path="*" element={<Snopage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Student;

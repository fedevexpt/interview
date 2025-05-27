import { useNavigate } from "react-router-dom";
function CategoryCard({ icon, title, count, path }) {
  const navigate = useNavigate();

  const pathOnClick = () => {
    navigate(path);
  };
  return (
    <div className="border border-[#eeeeee] p-2 rounded-[5px]">
      <div>{icon}</div>
      <h2>{title}</h2>
      <h4>총 {count} 문제</h4>
      <span onClick={pathOnClick}>연습하러 가기 → </span>
    </div>
  );
}

export default CategoryCard;

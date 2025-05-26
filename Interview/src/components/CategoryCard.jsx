function CategoryCard({ icon, title, count }) {
  return (
    <div>
      <div>{icon}</div>
      <h2>{title}</h2>
      <h4>총 {count} 문제</h4>
      <span>연습하러 가기 → </span>
    </div>
  );
}

export default CategoryCard;

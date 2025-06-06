import CategoryCard from "../components/CategoryCard";
import Header from "../components/Header";
import RandomBtn from "../components/RandomBtn";
import Footer from "../components/Footer";

function Home() {
    const Categories = [
        {
            icon: "🌷",
            title: "기술",
            count: 0,
            path: "/practice/TechQuestion",
        },

        {
            icon: "🌻",
            title: "언어",
            count: 0,
            path: "/practice/LanguageQuestion",
        },
        { icon: "🌼", title: "CS", count: 0, path: "/practice/EtcQuestion" },
        { icon: "🌹", title: "기타", count: 0 },
    ];

    return (
        <div className="w-[500px] border border-[#eeeeee] m-auto mt-10 p-6">
            <Header />
            <h1 className="text-center text-[30px] text-bold my-6">
                진짜 면접처럼 연습해보세요
            </h1>

            <h1 className="text-center text-[25px] text-bold my-6">
                카테고리 선택하기
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 w-[400px] mx-auto ">
                {Categories.map((category) => (
                    <CategoryCard
                        key={category.title}
                        icon={category.icon}
                        title={category.title}
                        count={category.count}
                        path={category.path}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Home;

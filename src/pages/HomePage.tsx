import BannerSlider from "@/features/Home/BannerSlider";
import CourseListSlider from "@/features/Home/CourseListSlider";

function HomePage() {
    // fetch course slider list
    return (
        <>
            <div>
                <BannerSlider />
            </div>

            <div className="mx-[auto] mt-10 w-[1340px] px-[24px]">
                <CourseListSlider />
            </div>
        </>
    );
}

export default HomePage;

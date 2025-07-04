import StoryHeaderSidebarshop from "./StoryHeaderSidebarshop";

function HeaderSidebarshop() {
  return (
    <section className="flex flex-row p-4 gap-4">
      <div className="w-full md:w-1/2">
        <StoryHeaderSidebarshop />
      </div>
      <div className="flex justify-around w-full text-sm text-gray-700 items-center">
        <span className="flex flex-col items-center text-md m-1 sm:text-lg font-semibold">
          <span>بازدید</span>
          <span>9k</span>
        </span>
        <span className="flex flex-col items-center text-md m-1 sm:text-lg font-semibold">
          <span>مشتری</span>
          <span>12</span>
        </span>
        <span className="flex flex-col items-center text-md m-1 sm:text-lg font-semibold">
          <span>محصول</span>
          <span>20</span>
        </span>
      </div>
    </section>
  );
}

export default HeaderSidebarshop;

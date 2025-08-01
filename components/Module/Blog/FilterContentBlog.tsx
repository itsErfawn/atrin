import { Search } from "lucide-react";
import BoxSideBar from "../ui/shop/BoxSideBar";
import BlogTopics from "./BlogTopics";

export default function FilterContentBlog() {
  return (
    <>
      <form className="bg-secondary-10 p-3 rounded-xl mb-4">
        <div className="relative">
          <input
            type="search"
            placeholder="جست و جو کنید"
            className="w-full p-2 rounded-md pr-10"
          />
          <Search className="absolute left-2 top-2.5 h-5 w-5 text-gray-500" />
        </div>
      </form>
      <BoxSideBar title="موضوعات وبلاگ:">
        <BlogTopics />
      </BoxSideBar>
    </>
  );
}
